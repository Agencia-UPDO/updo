import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, ArrowRight } from "lucide-react";
import { fetchRSSPosts, type RSSPost } from "@/lib/rss";

const FEED_URL = "https://insights.updo.com.br/feed";

// Fallback exibido se o feed estiver fora do ar
const fallbackPosts: RSSPost[] = [
  {
    title: "Confira os insights mais recentes da UPDO",
    link: "https://insights.updo.com.br",
    pubDate: "",
    pubDateFormatted: "Atualizado semanalmente",
    description:
      "Estudos, análises e estratégias publicados pela equipe da UPDO. Conteúdo prático para quem decide.",
    category: "Blog",
    imageUrl: null,
    creator: "Equipe UPDO",
  },
];

export async function HomeInsights() {
  const posts = await fetchRSSPosts(FEED_URL, 3, 3600);
  const items = posts.length > 0 ? posts : fallbackPosts;

  return (
    <section className="py-18 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Conteúdo
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Insights aplicados ao seu negócio.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:text-right">
            Estudos, análises e estratégias publicados pela equipe da UPDO.
            Conteúdo prático para quem decide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((post) => (
            <article
              key={post.link}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:shadow-[0_24px_70px_rgba(101,117,255,0.13)]"
            >
              {/* Imagem destacada */}
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ler artigo: ${post.title}`}
                className="relative block aspect-[16/10] overflow-hidden bg-muted"
              >
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6575FF]/10 via-muted to-white">
                    <BookOpen className="h-12 w-12 text-[#6575FF]/35" />
                  </div>
                )}
                {post.category && (
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    {post.category}
                  </span>
                )}
              </Link>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg font-black leading-tight tracking-tight text-foreground transition-colors hover:text-[#6575FF] line-clamp-2"
                >
                  {post.title}
                </Link>
                {post.description && (
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                )}

                <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                    {post.pubDateFormatted}
                  </span>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6575FF] transition-opacity hover:opacity-80"
                  >
                    Ler artigo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://insights.updo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto inline-flex h-13 w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#6575FF] px-6 text-center text-sm font-bold text-white shadow-[0_10px_24px_rgba(101,117,255,0.22)] transition-all duration-300 hover:bg-[#5362E8] active:scale-95 sm:w-auto sm:max-w-none"
          >
            Ver todos os insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
