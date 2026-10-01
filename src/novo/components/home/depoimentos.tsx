import RevealAnimation from '@/novo/components/animation/reveal-animation';
import VideoDepoimento from '@/novo/components/home/video-depoimento';
import SectionHeading from '@/novo/components/shared/section-heading';
import { depoimentosTexto, depoimentosVideo } from '@/novo/data/home';

const Depoimentos = () => {
  return (
    <section className="bg-white py-18 md:py-28 xl:py-32">
      <div className="main-container space-y-12 md:space-y-16">
        <SectionHeading
          badge="Depoimentos"
          title="Quem acompanhou o processo de dentro"
          description="Clientes de educação, tecnologia, serviços e varejo contando como foi trabalhar com a UPDO."
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {depoimentosVideo.map((video, index) => (
            <RevealAnimation
              key={video.videoId}
              delay={0.1 + index * 0.1}
              className="col-span-12 md:col-span-4"
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

        <div className="columns-1 gap-4 md:columns-2 md:gap-6 xl:columns-3">
          {depoimentosTexto.map((depoimento, index) => (
            <RevealAnimation key={depoimento.name + index} delay={0.1 + (index % 3) * 0.1}>
              <figure className="border-stroke-3 mb-4 break-inside-avoid rounded-2xl border p-7 md:mb-6">
                <blockquote className="text-tagline-1 text-secondary/80">
                  “{depoimento.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="bg-primary-500 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-medium">
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
