"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const videoTestimonials = [
  {
    name: "Elizabete De Marchi",
    role: "Fundadora",
    company: "Elizabete De Marchi",
    videoId: "H0Dm1oPwbF0",
  },
  {
    name: "Hamilton",
    role: "Executivo",
    company: "Nextcard",
    videoId: "XxNoPscpid4",
  },
  {
    name: "Dra. Naudimar",
    role: "Diretora",
    company: "Instituição de Ensino Superior",
    videoId: "2cE9ycBnLVg",
  },
];

const textTestimonials = [
  {
    name: "Samuel Henrique",
    role: "CEO",
    company: "Trevisan Comunicação Visual",
    quote:
      "A UPDO transformou nosso marketing. Antes, estávamos perdidos. Agora, temos um fluxo constante de leads e sabemos exatamente de onde eles vêm. Recomendo!",
  },
  {
    name: "Jordânia",
    role: "Head de Marketing",
    company: "Polibrinq",
    quote:
      "O diferencial é a parceria. Eles realmente se tornaram nosso braço de marketing. A equipe é proativa e sempre traz novas ideias para acelerar nosso crescimento.",
  },
  {
    name: "Lorena",
    role: "Sócia",
    company: "Vainet Tecnologia",
    quote:
      "Experiência muito boa com a Agência UPDO. Após o desenvolvimento do atual site da Vainet Tecnologia nossos leads aumentaram significativamente. Super indico.",
  },
  {
    name: "Hamilton Flores",
    role: "Sócio",
    company: "Nextcard e Teloos",
    quote:
      "Você cliente como eu, que não se envolvia com marketing digital, te garanto: existe o antes e o depois com a UPDO! Parabéns Rodrigo. Super indico!",
  },
  {
    name: "Rafael Kirsten Borba",
    role: "Consultor Sênior de Vendas",
    company: "",
    quote:
      "Agência de marketing que te conecta com o mercado de fato, tem visão e entendimento de números comerciais. Trabalho de qualidade!",
  },
  {
    name: "Luiz Otavio",
    role: "",
    company: "Lucca Cafés Espaciais",
    quote:
      "Serviço altamente profissional de alto nível e eficiente. Realmente faz a diferença!",
  },
];

const INTERVAL = 5000;

export function HomeTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + textTestimonials.length) % textTestimonials.length);
  }, []);

  const prev = () => goTo(index - 1, -1);
  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  };

  const t = textTestimonials[index];

  return (
    <section className="py-18 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(7,17,31,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,17,31,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14 max-w-2xl"
        >
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Depoimentos
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Quem viveu, conta.
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed font-medium">
            Resultados reais narrados por quem acompanhou o processo de dentro.
          </p>
        </motion.div>

        {/* Vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {videoTestimonials.map((v, i) => (
            <motion.div
              key={v.videoId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:shadow-[0_24px_70px_rgba(101,117,255,0.13)]"
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.videoId}?rel=0&modestbranding=1`}
                  title={`Depoimento ${v.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-t-2xl"
                />
              </div>
              <div className="flex flex-col gap-1 p-5 border-t border-border/40">
                <p className="font-heading font-black text-base text-foreground leading-tight">
                  {v.name}
                </p>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {[v.role, v.company].filter(Boolean).join(" · ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carrossel de depoimentos em texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-white p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[#6575FF]/35 hover:shadow-[0_24px_70px_rgba(101,117,255,0.13)] md:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col gap-6"
              >
                <Quote className="h-8 w-8 text-[#6575FF]/25 shrink-0" />
                <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-medium">
                  {t.quote}
                </p>
                <div className="flex flex-col gap-0.5 pt-4 border-t border-border/40">
                  <p className="font-heading font-black text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {[t.role, t.company].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="mt-6 flex items-center justify-between">

            {/* Dots */}
            <div className="flex items-center gap-2">
              {textTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 h-2 bg-[#6575FF]"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>

            {/* Setas */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-[#6575FF]/35 hover:text-[#6575FF] hover:shadow-md"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-sm transition-all hover:border-[#6575FF]/35 hover:text-[#6575FF] hover:shadow-md"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
