"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  // Abre com as marcas de maior reconhecimento nacional
  { name: "PUCPR", src: "/Clientes/Logo PUCPR.png" },                               // educação — âncora de credibilidade
  { name: "Unimed", src: "/Clientes/Logo Unimed.png" },                             // saúde — maior cooperativa do país
  { name: "Ford", src: "/Clientes/Logo Ford.png" },                                 // automotivo — marca global
  { name: "GMAC", src: "/Clientes/Logo GMAC.png" },                                 // financeiro automotivo — marca global
  { name: "Andritz", src: "/Clientes/Logo Andritz.png" },                           // indústria — marca internacional
  { name: "CNA", src: "/Clientes/Logo CNA.png" },                                   // educação — franquia nacional
  { name: "Ademicon", src: "/Clientes/Logo Ademicon.png" },                         // financeiro
  { name: "Polibrinq", src: "/Clientes/Logo Polibrinq.png" },                       // varejo/consumo
  { name: "Faculdade Ibrate", src: "/Clientes/Logo Faculdade Ibrate.png" },         // educação
  { name: "UniCV", src: "/Clientes/Logo UniCV.png" },                               // educação
  { name: "Interpret 2B", src: "/Clientes/Logo Interpret 2B.png" },                 // educação
  { name: "Ameg Plena", src: "/Clientes/Logo Ameg Plena.png" },                     // saúde
  { name: "Instituto Equilibra", src: "/Clientes/Logo Instituto Equilibra.png" },   // saúde/bem-estar
  { name: "Teloos", src: "/Clientes/Logo Teloos.png" },                             // tecnologia/B2B
  { name: "Riole", src: "/Clientes/Logo Riole.png" },                               // varejo
  { name: "Veta Pós Graduação", src: "/Clientes/Logo Veta Pós Graduação.png" },     // educação
  { name: "Nextcard", src: "/Clientes/Logo Nextcard.png" },                         // financeiro
  { name: "Sulmatre", src: "/Clientes/Logo Sulmatre.png" },                         // indústria
  { name: "Saúde Mais", src: "/Clientes/Logo Saúde Mais.png" },                     // saúde
  { name: "G20", src: "/Clientes/Logo G20.png" },                                   // varejo
  { name: "Buligon Advogados", src: "/Clientes/Logo Buligon Advogados.png" },       // serviços profissionais
  { name: "Tempo Med", src: "/Clientes/Logo Tempo Med.png" },                       // saúde
  { name: "Madeiras Lane", src: "/Clientes/Logo Madeiras Lane.png" },               // varejo
  { name: "Ação Consultoria", src: "/Clientes/Logo Ação Consultoria.png" },         // B2B/consultoria
  { name: "Clínica Revitalize", src: "/Clientes/Logo Clínica Revitalize.png" },     // saúde
  { name: "RV Plastic", src: "/Clientes/Logo RV Plastic.png" },                     // indústria
  { name: "Nilma Noivas", src: "/Clientes/Logo Nilma Noivas.png" },                 // varejo/moda
  { name: "Psico Despertar", src: "/Clientes/Logo Psico Despertar.png" },           // saúde
  { name: "Trevisan Comunicação Visual", src: "/Clientes/Logo Trevisan Comunicação Visual.png" }, // serviços
  { name: "Salum", src: "/Clientes/Logo Salum.png" },                               // varejo
  { name: "Psicologia Viva Mais", src: "/Clientes/Logo Psicologia Viva Mais.png" }, // saúde
  { name: "Elizabete De Marchi", src: "/Clientes/Logo Elizabete De Marchi.png" },   // marca pessoal
  { name: "Pontinhos de Luz", src: "/Clientes/Logo Pontinhos de Luz.png" },         // varejo/decoração
];

const track = [...clients, ...clients];

const SPEED = 35; // px por segundo

export function HomeClients() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollStartRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = (time: number) => {
      if (!pausedRef.current) {
        if (lastTimeRef.current) {
          const delta = time - lastTimeRef.current;
          container.scrollLeft += (SPEED * delta) / 1000;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft -= container.scrollWidth / 2;
          }
        }
        lastTimeRef.current = time;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause = () => {
    pausedRef.current = true;
    lastTimeRef.current = 0;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resume = (delay = 0) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragScrollStartRef.current = scrollRef.current?.scrollLeft ?? 0;
    setDragging(true);
    pause();
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    scrollRef.current.scrollLeft = dragScrollStartRef.current - delta;
  };

  const onMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setDragging(false);
    resume(800);
  };

  const scroll = (dir: "left" | "right") => {
    pause();
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -480 : 480,
      behavior: "smooth",
    });
    resume(900);
  };

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-[#F7F9FF] py-12 lg:py-14">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Clientes e projetos
          </span>
          <p className="max-w-xl text-base font-medium leading-relaxed text-muted-foreground">
            Empresas que já confiaram na UPDO para estruturar marketing,
            vendas e crescimento com mais previsibilidade.
          </p>
        </div>

        {/* Carrossel com setas */}
        <div className="flex items-center gap-4">

          {/* Seta esquerda */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-[#6575FF]/35 hover:text-[#6575FF] hover:shadow-md"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Trilho com fade nas bordas */}
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_16%,black_84%,transparent)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F7F9FF] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F7F9FF] to-transparent" />
            <div
              ref={scrollRef}
              onMouseEnter={pause}
              onMouseLeave={() => { onMouseUp(); resume(200); }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              className={`flex items-center gap-10 overflow-x-scroll py-3 select-none [&::-webkit-scrollbar]:hidden ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ scrollbarWidth: "none" }}
            >
            {track.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="relative h-14 w-44 shrink-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  unoptimized
                  className="object-contain object-center transition-all duration-300 hover:opacity-100 hover:scale-105"
                />
              </div>
            ))}
            </div>
          </div>

          {/* Seta direita */}
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-[#6575FF]/35 hover:text-[#6575FF] hover:shadow-md"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </section>
  );
}
