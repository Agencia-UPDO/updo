"use client";

import Image from "next/image";

const clients = [
  { name: "PUCPR", src: "/Clientes/Logo PUCPR.png" },
  { name: "Unimed", src: "/Clientes/Logo Unimed.png" },
  { name: "Ford", src: "/Clientes/Logo Ford.png" },
  { name: "GMAC", src: "/Clientes/Logo GMAC.png" },
  { name: "Andritz", src: "/Clientes/Logo Andritz.png" },
  { name: "CNA", src: "/Clientes/Logo CNA.png" },
  { name: "Ademicon", src: "/Clientes/Logo Ademicon.png" },
  { name: "Polibrinq", src: "/Clientes/Logo Polibrinq.png" },
  { name: "Faculdade Ibrate", src: "/Clientes/Logo Faculdade Ibrate.png" },
  { name: "UniCV", src: "/Clientes/Logo UniCV.png" },
  { name: "Interpret 2B", src: "/Clientes/Logo Interpret 2B.png" },
  { name: "Ameg Plena", src: "/Clientes/Logo Ameg Plena.png" },
  { name: "Instituto Equilibra", src: "/Clientes/Logo Instituto Equilibra.png" },
  { name: "Teloos", src: "/Clientes/Logo Teloos.png" },
  { name: "Riole", src: "/Clientes/Logo Riole.png" },
  { name: "Veta Pós Graduação", src: "/Clientes/Logo Veta Pós Graduação.png" },
  { name: "Nextcard", src: "/Clientes/Logo Nextcard.png" },
  { name: "Sulmatre", src: "/Clientes/Logo Sulmatre.png" },
  { name: "Saúde Mais", src: "/Clientes/Logo Saúde Mais.png" },
  { name: "G20", src: "/Clientes/Logo G20.png" },
  { name: "Buligon Advogados", src: "/Clientes/Logo Buligon Advogados.png" },
  { name: "Tempo Med", src: "/Clientes/Logo Tempo Med.png" },
  { name: "Madeiras Lane", src: "/Clientes/Logo Madeiras Lane.png" },
  { name: "Ação Consultoria", src: "/Clientes/Logo Ação Consultoria.png" },
  { name: "Clínica Revitalize", src: "/Clientes/Logo Clínica Revitalize.png" },
  { name: "RV Plastic", src: "/Clientes/Logo RV Plastic.png" },
  { name: "Nilma Noivas", src: "/Clientes/Logo Nilma Noivas.png" },
  { name: "Psico Despertar", src: "/Clientes/Logo Psico Despertar.png" },
  { name: "Trevisan Comunicação Visual", src: "/Clientes/Logo Trevisan Comunicação Visual.png" },
  { name: "Salum", src: "/Clientes/Logo Salum.png" },
  { name: "Psicologia Viva Mais", src: "/Clientes/Logo Psicologia Viva Mais.png" },
  { name: "Elizabete De Marchi", src: "/Clientes/Logo Elizabete De Marchi.png" },
  { name: "Pontinhos de Luz", src: "/Clientes/Logo Pontinhos de Luz.png" },
];

const track = [...clients, ...clients];

export function HomeClients() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-[#F7F9FF] py-12 lg:py-14">
      <style jsx>{`
        @keyframes updo-client-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .client-marquee {
          animation: updo-client-marquee 44s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .client-marquee {
            animation-duration: 72s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-marquee {
            animation-duration: 90s;
          }
        }
      `}</style>

      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Clientes e projetos
          </span>
          <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground">
            Empresas que já confiaram na UPDO para estruturar marketing,
            vendas e crescimento com mais previsibilidade.
          </p>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F9FF] to-transparent lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F9FF] to-transparent lg:w-24" />

          <div className="client-marquee flex w-max items-center gap-8 py-3 lg:gap-10">
            {track.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="relative h-12 w-36 shrink-0 lg:h-14 lg:w-44"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  unoptimized
                  className="object-contain object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
