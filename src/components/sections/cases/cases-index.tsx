"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  GraduationCap,
  ShoppingBag,
  Store,
} from "lucide-react";

const filters = ["Todos", "Educação", "E-commerce", "Varejo", "Indústria"];

const cases = [
  {
    tag: "Educação",
    client: "Instituição de ensino",
    title: "Mais leads, mais processo, mais matrícula.",
    description:
      "Reorganização da captação com estratégia, automação e processo comercial para transformar interesse em matrícula real.",
    href: "/cases/educacao",
    icon: GraduationCap,
    metrics: [
      { value: "+211%", label: "geração de leads" },
      { value: "+166%", label: "conversão comercial" },
      { value: "20x", label: "ROAS direto" },
    ],
  },
  {
    tag: "E-commerce",
    client: "Moda infantil",
    title: "De R$ 3k a R$ 211k de faturamento mensal.",
    description:
      "Análise de persona, funil e canais para escalar vendas com ROAS quase 5x e conversão acima da média do mercado.",
    href: "/cases/e-commerce",
    icon: ShoppingBag,
    metrics: [
      { value: "+6.900%", label: "vendas mensais" },
      { value: "4.7x", label: "ROAS geral" },
      { value: "4,45%", label: "taxa de conversão" },
    ],
  },
  {
    tag: "Varejo",
    client: "Varejista híbrido B2B/B2C",
    title: "Quebra de teto histórico após 20 anos de operação.",
    description:
      "Reconstrução da fundação digital, planejamento com sazonalidade e integração da jornada entre catálogo, CRM e loja física.",
    href: "/cases/varejo",
    icon: Store,
    metrics: [
      { value: "+87%", label: "faturamento" },
      { value: "+1.400%", label: "tráfego mensal" },
      { value: "+35%", label: "ticket médio" },
    ],
  },
  {
    tag: "Indústria",
    client: "Bens de consumo",
    title: "1.527% de ROI com R$ 21,5k de mídia.",
    description:
      "Pesquisa, seleção de canais e otimização semanal para provar retorno de mídia digital para uma diretoria cética.",
    href: "/cases/industria",
    icon: Factory,
    metrics: [
      { value: "1.527%", label: "ROI total" },
      { value: "R$ 350k", label: "receita gerada" },
      { value: "102", label: "vendas atribuídas" },
    ],
  },
];

export function CasesIndexClient() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const visibleCases =
    activeFilter === "Todos"
      ? cases
      : cases.filter((item) => item.tag === activeFilter);

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-[#F7F9FF] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 right-0 h-[480px] w-[480px] rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
              Cases reais
            </span>
            <h1 className="mt-5 font-heading text-4xl font-black leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Resultados com método, dados e execução.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Histórias reais de empresas que cresceram quando marketing,
              vendas e operação passaram a trabalhar com mais clareza.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  activeFilter === filter
                    ? "border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] text-accent"
                    : "border-border/70 bg-white text-muted-foreground hover:border-[var(--color-accent-border)] hover:bg-[var(--color-accent-soft)] hover:text-accent"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="todos" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {visibleCases.map((item, index) => (
              <motion.article
                key={item.href}
                id={item.tag.toLowerCase().replace("-", "")}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-border)] hover:shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                      {item.tag}
                    </span>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground/60">
                    {item.client}
                  </p>
                  <h2 className="mt-3 font-heading text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border/40 pt-6">
                    {item.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-heading text-xl font-black tracking-tight text-foreground">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-[10px] font-medium leading-tight text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-accent">
                    Ver case completo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#6575FF]/[0.08] blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Próximo passo
            </span>
            <h2 className="font-heading text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
              Quer entender qual case se parece com o seu cenário?
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-white/55 md:text-base">
              O diagnóstico ajuda a mapear onde sua operação perde performance
              e quais movimentos merecem prioridade agora.
            </p>
            <Link
              href="/diagnostico"
              className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-accent px-8 text-sm font-bold text-accent-foreground shadow-[0_0_24px_rgba(86,254,213,0.35)] transition-all duration-200 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_0_36px_rgba(86,254,213,0.55)] active:scale-95"
            >
              Agendar diagnóstico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
