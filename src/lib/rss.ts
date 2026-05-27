/**
 * Lightweight RSS 2.0 / WordPress feed parser.
 * Returns the N most recent posts without external deps.
 */

export type RSSPost = {
  title: string;
  link: string;
  pubDate: string;
  pubDateFormatted: string;
  description: string;
  category: string | null;
  imageUrl: string | null;
  creator: string | null;
};

const decodeEntities = (str: string): string =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ");

const stripTags = (html: string): string => html.replace(/<[^>]*>/g, "").trim();

const extractCData = (raw: string): string => {
  const cdataMatch = raw.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return cdataMatch ? cdataMatch[1] : raw;
};

const getTag = (item: string, tag: string): string | null => {
  const re = new RegExp(
    `<${tag}[^>]*>([\\s\\S]*?)<\\/${tag.split(":")[0]}(?::[^>]*)?>`,
    "i",
  );
  const m = item.match(re);
  if (!m) return null;
  return decodeEntities(extractCData(m[1])).trim();
};

const formatPubDate = (raw: string): string => {
  try {
    const date = new Date(raw);
    if (Number.isNaN(date.getTime())) return raw;
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return raw;
  }
};

const extractImage = (item: string): string | null => {
  // 1) media:content
  const mediaContent = item.match(
    /<media:content[^>]+url="([^"]+)"[^>]*>/i,
  );
  if (mediaContent) return mediaContent[1];

  // 2) enclosure (image)
  const enclosure = item.match(
    /<enclosure[^>]+url="([^"]+)"[^>]+type="image[^"]*"/i,
  );
  if (enclosure) return enclosure[1];

  // 3) first <img> tag inside content:encoded or description
  const contentEncoded = item.match(
    /<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i,
  );
  const description = item.match(
    /<description[^>]*>([\s\S]*?)<\/description>/i,
  );
  const body = (contentEncoded ? contentEncoded[1] : "") +
    (description ? description[1] : "");
  const imgMatch = body.match(/<img[^>]+src="([^"]+)"/i);
  if (imgMatch) return imgMatch[1];

  return null;
};

const extractMetaImage = (html: string): string | null => {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeEntities(match[1]);
  }

  return null;
};

const fetchPostImage = async (url: string): Promise<string | null> => {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "UPDO Site/1.0 (+https://updo.com.br)",
        Accept: "text/html",
      },
    });

    if (!res.ok) return null;

    return extractMetaImage(await res.text());
  } catch {
    return null;
  }
};

export async function fetchRSSPosts(
  feedUrl: string,
  limit = 3,
  revalidateSeconds = 3600,
): Promise<RSSPost[]> {
  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: revalidateSeconds },
      headers: {
        "User-Agent": "UPDO Site/1.0 (+https://updo.com.br)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!res.ok) {
      console.error(`[RSS] Failed: ${feedUrl} → ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const items = xml.match(/<item[\s\S]*?<\/item>/g) ?? [];

    return Promise.all(items.slice(0, limit).map(async (item) => {
      const title = getTag(item, "title") ?? "";
      const link = getTag(item, "link") ?? "";
      const pubDate = getTag(item, "pubDate") ?? "";
      const rawDescription = getTag(item, "description") ?? "";
      const description = stripTags(rawDescription).slice(0, 180).trim();
      const category = getTag(item, "category");
      const creator = getTag(item, "dc:creator");
      const imageUrl = extractImage(item) ?? (link ? await fetchPostImage(link) : null);

      return {
        title,
        link,
        pubDate,
        pubDateFormatted: formatPubDate(pubDate),
        description: description ? `${description}…` : "",
        category,
        imageUrl,
        creator,
      };
    }));
  } catch (err) {
    console.error("[RSS] Error:", err);
    return [];
  }
}
