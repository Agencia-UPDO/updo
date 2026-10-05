import RevealAnimation from '@/novo/components/animation/reveal-animation';
import MolduraGrade from '@/novo/components/shared/moldura-grade';
import VideoDepoimento from '@/novo/components/home/video-depoimento';
import SectionHeading from '@/novo/components/shared/section-heading';
import { cn } from '@/novo/utils/cn';
import { Quote } from 'lucide-react';
import { depoimentosTexto, depoimentosVideo } from '@/novo/data/home';

const Depoimentos = () => {
  return (
    <section className="relative isolate bg-white py-18 md:py-28 xl:py-32">
      <MolduraGrade />
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Depoimentos"
          contador="06 / 08"
          title="Quem acompanhou o processo *de dentro*"
          description="Clientes de educação, tecnologia, serviços e varejo contando como foi trabalhar com a UPDO."
        />

        <div className="max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:px-4 max-md:pb-2 max-md:[scrollbar-width:none] md:grid md:grid-cols-12 md:gap-6">
          {depoimentosVideo.map((video, index) => (
            <RevealAnimation
              key={video.videoId}
              delay={0.1 + index * 0.1}
              className="col-span-12 max-md:w-[82%] max-md:shrink-0 max-md:snap-start md:col-span-4"
            >
              <div className="bg-background-13 overflow-hidden rounded-2xl">
                <div className="relative aspect-video">
                  <VideoDepoimento videoId={video.videoId} name={video.name} />
                </div>
                <div className="p-5">
                  <p className="text-tagline-1 text-secondary font-medium">{video.name}</p>
                  <p className="text-tagline-2">{video.role}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:gap-3 max-md:overflow-x-auto max-md:px-4 max-md:pb-2 max-md:[scrollbar-width:none] md:columns-2 md:gap-6 xl:columns-3">
          {depoimentosTexto.map((depoimento, index) => (
            <RevealAnimation
              key={depoimento.name + index}
              delay={0.1 + (index % 3) * 0.1}
              className="max-md:w-[82%] max-md:shrink-0 max-md:snap-start"
            >
              <figure
                className={cn(
                  'break-inside-avoid rounded-2xl p-6 max-md:h-full md:mb-6 md:p-7',
                  ['bg-lilas-50', 'bg-primary-50', 'bg-background-13'][index % 3]
                )}
              >
                <Quote className="text-lilas-500 mb-4 size-7" strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="text-tagline-1 text-secondary/80">
                  {depoimento.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={cn(
                      'flex size-10 shrink-0 items-center justify-center rounded-full font-medium',
                      index % 2 === 0 ? 'bg-lilas-500 text-white' : 'bg-primary-500 text-secondary'
                    )}
                  >
                    {depoimento.name.charAt(0)}
                  </span>
                  <span>
                    <span className="text-tagline-1 text-secondary block font-medium">
                      {depoimento.name}
                    </span>
                    <span className="text-tagline-2 text-secondary/55 block">{depoimento.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
