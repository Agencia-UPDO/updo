"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    id: 0,
    slug: "e-commerce",
    client: "E-commerce de Moda Infantil",
    segment: "E-commerce B2C",
    challenge:
      "CAC inviável para crescimento em um e-commerce recém-lançado por uma indústria B2B. Baixo volume de vendas e ceticismo interno sobre o potencial do canal digital.",
    strategy:
      "Mapeamos a persona com foco nas dores reais, estruturamos campanhas por intenção de compra e construímos um funil de remarketing robusto. Cada decisão guiada por KPIs claros.",
    results: [
      { metric: "+6.900%", label: "crescimento em faturamento mensal" },
      { metric: "4.7x", label: "ROAS geral nas campanhas" },
      { metric: "4,45%", label: "tx. de conversão (média: 1–2%)" },
    ],
  },
  {
    id: 1,
    slug: "educacao",
    client: "Instituição de Ensino Superior",
    segment: "Educação · Área da Saúde",
    challenge:
      "Platô de crescimento com time comercial sem ferramentas e marketing sem direção estratégica. O modelo anterior não entregava performance, e a comunicação entre áreas gerava retrabalho.",
    strategy:
      "Diagnóstico de 6 meses, implementação de CRM e RD Station, playbooks de vendas e gestão 360° do marketing. Aplicamos regressão linear para projetar resultados e ajustar rotas com precisão.",
    results: [
      { metric: "+211%", label: "na geração de leads (450 → 1.400/mês)" },
      { metric: "20x", label: "ROAS direto sobre o investimento" },
      { metric: "+166%", label: "na taxa de conversão (6% → 16%)" },
    ],
  },
  {
    id: 2,
    slug: "industria",
    client: "Indústria de Bens de Consumo",
    segment: "Indústria B2C",
    challenge:
      "Uma diretoria cética sobre o digital com o desafio de provar que marketing pago pode substituir e superar o varejo tradicional. Precisavam de prova irrefutável, não de promessas.",
    strategy:
      "Desk research profundo, seleção estratégica de canais (Google e Meta), otimização semanal de campanhas e relatórios na linguagem do C-level, transformando dados em convicção.",
    results: [
      { metric: "1.527%", label: "de ROI sobre o investimento total" },
      { metric: "R$ 350k", label: "em receita gerada com R$ 21.500" },
      { metric: "102", label: "vendas diretas via canais digitais" },
    ],
  },
  {
    id: 3,
    slug: "varejo",
    client: "Varejista Híbrido (B2B/B2C)",
    segment: "Varejo · São Paulo",
    challenge:
      "Mais de 20 anos de mercado sem atingir o faturamento desejado. E-commerce com falhas técnicas limitando tráfego e geração de negócios. Liderança exigente buscando ROI comprovado.",
    strategy:
      "Substituímos o e-commerce por catálogo com CRM integrado, aplicamos planejamento baseado em regressão linear e sazonalidade, e estruturamos campanhas por categoria, gerando resultado omnichannel.",
    results: [
      { metric: "+87%", label: "no faturamento (2022 vs 2024)" },
      { metric: "+1.400%", label: "de crescimento no tráfego digital" },
      { metric: "+1.000", label: "leads gerados por mês" },
    ],
  },
];

export function Cases() {
  return (
    <section className="py-24 lg:py-40 bg-[#F7F9FF] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
              Cases
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Problemas reais.{" "}
              <span className="text-muted-foreground/30">
                Resultados reais.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:text-right">
            Cada case começa com um diagnóstico honesto do que não está
            funcionando.
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {cases.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-white overflow-hidden hover:border-primary/20 hover:shadow-[0_4px_32px_rgba(79,70,229,0.08)] transition-all duration-300"
            >
              {/* Top bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-primary/40 via-accent/50 to-transparent" />

              <div className="flex flex-col gap-6 p-7 lg:p-8">
                {/* Client header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                      {c.segment}
                    </span>
                    <h3 className="mt-1 text-lg font-black text-foreground tracking-tight">
                      {c.client}
                    </h3>
                  </div>
                  {c.slug ? (
                    <Link
                      href={`/cases/${c.slug}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/15 transition-all duration-200"
                      aria-label={`Ver case completo: ${c.client}`}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                    </Link>
                  ) : (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Challenge + Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/40">
                      Desafio
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-primary/50">
                      Estratégia aplicada
                    </span>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {c.strategy}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="pt-4 border-t border-border/40">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/60 mb-4 block">
                    Resultados
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    {c.results.map((result, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <span className="text-xl lg:text-2xl font-black text-foreground tracking-tight leading-none">
                          {result.metric}
                        </span>
                        <span className="text-[11px] text-muted-foreground/60 leading-snug">
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA para cases com página interna */}
                {c.slug && (
                  <div className="pt-5 border-t border-border/30">
                    <Link
                      href={`/cases/${c.slug}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-accent hover:text-accent/70 transition-colors duration-200"
                    >
                      Ver case completo
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
