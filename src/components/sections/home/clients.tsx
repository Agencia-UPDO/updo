"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
const DESKTOP_SPEED = 32;

export function HomeClients() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const mobileAnimRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const mobileLastTimeRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const mobilePausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileResumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDraggingRef = useRef(false);
  const isTouchDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const touchStartXRef = useRef(0);
  const dragScrollStartRef = useRef(0);
  const touchScrollStartRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = (time: number) => {
      if (!pausedRef.current) {
        if (lastTimeRef.current) {
          const delta = time - lastTimeRef.current;
          const loopWidth = container.scrollWidth / 2;
          if (loopWidth > 0) {
            container.scrollLeft += (DESKTOP_SPEED * delta) / 1000;
            if (container.scrollLeft >= loopWidth) {
              container.scrollLeft -= loopWidth;
            }
          }
        }
        lastTimeRef.current = time;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const animate = (time: number) => {
      if (!mobilePausedRef.current) {
        if (mobileLastTimeRef.current) {
          const delta = time - mobileLastTimeRef.current;
          const loopWidth = container.scrollWidth / 2;
          if (loopWidth > 0) {
            container.scrollLeft += (DESKTOP_SPEED * delta) / 1000;
            if (container.scrollLeft >= loopWidth) {
              container.scrollLeft -= loopWidth;
            }
          }
        }
        mobileLastTimeRef.current = time;
      }
      mobileAnimRef.current = requestAnimationFrame(animate);
    };

    mobileAnimRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(mobileAnimRef.current);
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
      lastTimeRef.current = 0;
    }, delay);
  };

  const pauseMobile = () => {
    mobilePausedRef.current = true;
    mobileLastTimeRef.current = 0;
    if (mobileResumeTimerRef.current) clearTimeout(mobileResumeTimerRef.current);
  };

  const resumeMobile = (delay = 0) => {
    if (mobileResumeTimerRef.current) clearTimeout(mobileResumeTimerRef.current);
    mobileResumeTimerRef.current = setTimeout(() => {
      mobilePausedRef.current = false;
      mobileLastTimeRef.current = 0;
    }, delay);
  };

  const scroll = (dir: "left" | "right") => {
    pause();
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -520 : 520,
      behavior: "smooth",
    });
    resume(500);
  };

  const onMouseDown = (event: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragScrollStartRef.current = scrollRef.current.scrollLeft;
    setDragging(true);
    pause();
    event.preventDefault();
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    scrollRef.current.scrollLeft = dragScrollStartRef.current - delta;
  };

  const onMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setDragging(false);
    resume(300);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    if (!mobileScrollRef.current) return;
    isTouchDraggingRef.current = true;
    touchStartXRef.current = event.touches[0].clientX;
    touchScrollStartRef.current = mobileScrollRef.current.scrollLeft;
    pauseMobile();
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (!isTouchDraggingRef.current || !mobileScrollRef.current) return;
    const delta = event.touches[0].clientX - touchStartXRef.current;
    mobileScrollRef.current.scrollLeft = touchScrollStartRef.current - delta;
  };

  const onTouchEnd = () => {
    if (!isTouchDraggingRef.current) return;
    isTouchDraggingRef.current = false;
    resumeMobile(600);
  };

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
          animation: updo-client-marquee 76s linear infinite;
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

      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

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

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-[#6575FF]/35 hover:text-[#6575FF] hover:shadow-md"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_16%,black_84%,transparent)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F7F9FF] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F7F9FF] to-transparent" />
            <div
              ref={scrollRef}
              onMouseLeave={onMouseUp}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              className={`flex items-center gap-10 overflow-x-scroll py-3 select-none [&::-webkit-scrollbar]:hidden ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ scrollbarWidth: "none" }}
            >
              {track.map((client, index) => (
                <div
                  key={`desktop-${client.name}-${index}`}
                  className="relative h-14 w-44 shrink-0"
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

          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-[#6575FF]/35 hover:text-[#6575FF] hover:shadow-md"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F9FF] to-transparent lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F9FF] to-transparent lg:w-24" />

          <div
            ref={mobileScrollRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
            className="flex items-center gap-8 overflow-x-scroll py-3 touch-pan-x select-none [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
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
