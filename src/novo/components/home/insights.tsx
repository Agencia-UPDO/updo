import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import { ArrowUpRightIcon } from '@/novo/components/shared/icons';
import SectionHeading from '@/novo/components/shared/section-heading';
import ButtonWhite from '@/novo/components/shared/ui/button/button-white';
import { fetchRSSPosts } from '@/lib/rss';
import Image from 'next/image';
import NewsletterInsights from '@/novo/components/home/newsletter-insights';

const FEED_URL = 'https://insights.updo.com.br/feed';

const Insights = async () => {
  const posts = await fetchRSSPosts(FEED_URL, 3, 3600);
  if (posts.length === 0) return null;

  return (
    <section className="relative isolate bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            badge="Insights"
            title="O que estamos *estudando* e publicando"
            description="Análises e estratégias escritas pela equipe da UPDO para quem decide marketing e vendas."
            className="max-lg:text-center [&_div]:max-lg:justify-center [&_p]:max-lg:mx-auto"
          />
          <RevealAnimation delay={0.3}>
            <a
              href="https://insights.updo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0"
            >
              <ButtonWhite text="Ver todos os artigos" />
            </a>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <RevealAnimation
              key={post.link}
              delay={0.1 + index * 0.1}
              className="col-span-12 md:col-span-4"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background-13 flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="bg-background-3 relative aspect-[16/10] overflow-hidden">
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-tagline-3 text-secondary/50">
                    {post.category} · {post.pubDateFormatted}
                  </p>
                  <h3 className="text-heading-6 line-clamp-3 font-normal">{post.title}</h3>
                  <span className="text-tagline-2 text-secondary mt-auto flex items-center gap-2 pt-4 font-medium">
                    Ler artigo
                    <ArrowUpRightIcon className="size-4 stroke-current transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </a>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.2}>
          <NewsletterInsights />
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Insights;
