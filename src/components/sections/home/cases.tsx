"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  ShoppingBag,
  Store,
  Factory,
} from "lucide-react";

type CaseMetric = {
  metric: string;
  label: string;
};

type Case = {
  tag: string;
  sector: string;
  client: string;
  title: string;
  description: string;
  metrics: CaseMetric[];
  href: string;
  icon: typeof GraduationCap;
};

const cases: Case[] = [
  {
    tag: "Case educacional",
    sector: "Educação",
    client: "Instituição de ensino",
    title: "Mais leads, mais processo, mais matrícula.",
    description:
      "Reorganizamos a captação com estratégia, automação e processo comercial para transformar interesse em matrícula real.",
    metrics: [
      { metric: "+211%", label: "geração de leads" },
      { metric: "+166%", label: "conversão comercial" },
      { metric: "450 → 1.400", label: "leads/mês" },
    ],
    href: "/cases/educacao",
    icon: GraduationCap,
  },
  {
    tag: "Case e-commerce",
    sector: "E-commerce",
    client: "Moda infantil",
    title: "De R$ 3k a R$ 211k de faturamento mensal.",
    description:
      "Aplicamos análise de persona e otimização de funil em 60 dias. Resultado: ROAS quase 5x e taxa de conversão 3x acima da média do mercado brasileiro.",
    metrics: [
      { metric: "+6.900%", label: "vendas mensais" },
      { metric: "4.7x", label: "ROAS geral" },
      { metric: "4,45%", label: "taxa de conversão" },
    ],
    href: "/cases/e-commerce",
    icon: ShoppingBag,
  },
  {
    tag: "Case varejo",
    sector: "Varejo",
    client: "Varejista híbrido B2B/B2C",
    title: "Quebra de teto histórico após 20 anos de operação.",
    description:
      "Reconstruímos a fundação digital e aplicamos planejamento com sazonalidade para tirar um varejista paulista do platô de faturamento.",
    metrics: [
      { metric: "+87%", label: "faturamento (2022 a 2024)" },
      { metric: "+1.400%", label: "tráfego mensal" },
      { metric: "+35%", label: "ticket médio" },
    ],
    href: "/cases/varejo",
    icon: Store,
  },
  {
    tag: "Case indústria",
    sector: "Indústria",
    client: "Bens de consumo",
    title: "1.527% de ROI com R$ 21,5k de mídia.",
    description:
      "Provamos para uma diretoria cética que cada real investido em digital retorna múltiplas vezes, com pesquisa sólida, seleção de canais e otimização semanal.",
    metrics: [
      { metric: "1.527%", label: "ROI total" },
      { metric: "R$ 350k", label: "em receita gerada" },
      { metric: "102", label: "vendas (32 Google + 70 Meta)" },
    ],
    href: "/cases/industria",
    icon: Factory,
  },
];

export function HomeCases() {
  return (
    <section
      id="cases"
      className="py-18 lg:py-28 bg-[var(--surface-soft)] relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Resultados reais
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Prova antes da promessa.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:text-right">
            Cada case mostra cliente real, recorte de período e números
            verificáveis, não promessa de capa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link
                href={c.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:shadow-[0_24px_70px_rgba(101,117,255,0.13)]"
              >
                {/* Cabeçalho do card */}
                <div className="flex items-start justify-between">
                  <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                    {c.tag}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10">
                    <c.icon className="h-4 w-4 text-[#6575FF]" />
                  </div>
                </div>

                {/* Cliente */}
                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                  {c.sector} · {c.client}
                </p>

                {/* Título */}
                <h3 className="mt-3 font-heading text-2xl font-black text-foreground leading-tight tracking-tight">
                  {c.title}
                </h3>

                {/* Descrição */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>

                {/* Métricas */}
                <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border/40 pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <p className="font-heading text-xl font-black tracking-tight text-foreground">
                        {m.metric}
                      </p>
                      <p className="mt-1 text-[10px] font-medium text-muted-foreground leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#6575FF]">
                  <span>Ver case completo</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <div className="h-px w-full max-w-md bg-linear-to-r from-transparent via-border to-transparent mb-8" />
          <Link
            href="/diagnostico"
            className="group mx-auto inline-flex h-13 w-full max-w-xs items-center justify-center gap-3 rounded-full border border-border/60 bg-white px-6 text-center text-sm font-bold text-foreground transition-all duration-300 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 hover:shadow-xl hover:scale-105 active:scale-95 sm:w-auto sm:max-w-none sm:px-8"
          >
            <span className="sm:hidden">Quero meu diagnóstico</span>
            <span className="hidden sm:inline">Quero um diagnóstico do meu negócio</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6575FF]/10 text-[#6575FF] transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
