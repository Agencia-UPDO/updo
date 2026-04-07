"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const cases = [
  {
    id: 0,
    client: "PUCPR",
    segment: "Educação Superior",
    challenge:
      "Necessidade de aumentar o volume de leads qualificados para cursos de graduação e pós-graduação em um cenário altamente competitivo.",
    strategy:
      "Implementação de funis de segmentação avançada no Google Search e Meta Ads, com landing pages focadas em conversão imediata e nutrição de leads.",
    results: [
      { metric: "+245%", label: "na geração de leads qualificados" },
      { metric: "-32%", label: "no custo por aquisição (CPA)" },
      { metric: "18x", label: "ROAS em campanhas de fundo de funil" },
    ],
  },
  {
    id: 1,
    client: "Faculdade IBRATE",
    segment: "Pós-graduação e Extensão",
    challenge:
      "Time comercial sem processos definidos e marketing focado apenas em 'posts', resultando em baixa conversão de interessados.",
    strategy:
      "Estruturação do Radar de Matrículas™, implantação de CRM com automação de vendas e treinamento da equipe para abordagem consultiva.",
    results: [
      { metric: "+166%", label: "na taxa de conversão comercial" },
      { metric: "1.400", label: "leads gerados por mês" },
      { metric: "R$ 450M", label: "em faturamento projetado" },
    ],
  },
  {
    id: 2,
    client: "CNA Idiomas",
    segment: "Franquias de Educação",
    challenge:
      "Dificuldade em manter a previsibilidade de matrículas nas unidades em períodos de baixa sazonalidade.",
    strategy:
      "Campanhas de geofencing e tráfego local focadas em benefícios imediatos, integradas com agendamento direto via WhatsApp.",
    results: [
      { metric: "102", label: "vendas diretas em apenas 15 dias" },
      { metric: "4.7x", label: "retorno sobre o investimento" },
      { metric: "85%", label: "de comparecimento em visitas" },
    ],
  },
  {
    id: 3,
    client: "Equilibra",
    segment: "Saúde e Bem-estar",
    challenge:
      "Transformar autoridade técnica em matrículas recorrentes para cursos de especialização.",
    strategy:
      "Criação de jornadas de conteúdo estratégico com foco em prova social e demonstração de resultados de alunos, encurtando o ciclo de venda.",
    results: [
      { metric: "+87%", label: "no faturamento anual" },
      { metric: "1.200", label: "novos alunos em 6 meses" },
      { metric: "+1.000", label: "leads gerados por mês" },
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-40 bg-[#F7F9FF] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]" />

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
              Autoridade
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Resultados reais no{" "}
              <span className="text-muted-foreground/30">
                mercado educacional.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:text-right">
            Não somos uma agência genérica. Somos especialistas em captação para
            educação, com atuação direta em grandes instituições.
          </p>
        </motion.div>

        {/* Video Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-24 lg:mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-primary/80">
                Depoimento
              </span>
              <h3 className="mt-4 font-heading text-3xl lg:text-4xl font-black text-foreground leading-tight tracking-tight">
                O que diz quem já <br />
                <span className="text-muted-foreground/30">está escalando.</span>
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Descubra como estruturamos a captação de alunos e mudamos o jogo
                da previsibilidade em instituições de ensino de forma real.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-border/60 shadow-sm">
                <p className="text-sm italic text-muted-foreground">
                  "Reconhecidos como destaque nacional pela RD Station com cases
                  no segmento educacional."
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-muted group">
              <iframe
                src="https://www.youtube.com/embed/2cE9ycBnLVg"
                title="Depoimento Cliente UPDO"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* single case CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent mb-12" />
          
          <h4 className="text-xl font-bold text-foreground mb-6">
            Quer ver o passo a passo completo deste e de outros resultados?
          </h4>
          
          <Link
            href="/cases/educacao"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-border/60 text-foreground font-bold transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Ver todos os cases de educação
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
