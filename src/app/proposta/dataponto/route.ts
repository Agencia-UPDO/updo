import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const htmlPath = path.join(process.cwd(), "src", "proposals", "dataponto.html");
  const html = await fs.readFile(htmlPath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
