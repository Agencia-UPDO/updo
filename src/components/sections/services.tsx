"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Bot,
  Megaphone,
  MousePointerClick,
  GitMerge,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 0,
    icon: LayoutGrid,
    tag: "Fundação",
    title: "Arquitetura de marketing e vendas",
    problem:
      "Você tem esforço espalhado em várias frentes, mas não tem um sistema. Cada ação funciona de forma isolada e o resultado não se acumula.",
    solution:
      "Estruturamos o marketing e as vendas como um sistema integrado: processos, canais, metas e indicadores alinhados com o objetivo real do negócio.",
    results: [
      "Previsibilidade de receita mês a mês",
      "Redução de desperdício em ações sem retorno",
      "Time de vendas com processo claro e repetível",
    ],
  },
  {
    id: 1,
    icon: Bot,
    tag: "Eficiência",
    title: "Automação e inteligência artificial",
    problem:
      "Tarefas repetitivas consomem tempo do time. Oportunidades se perdem por falta de agilidade no atendimento e acompanhamento.",
    solution:
      "Implementamos automações e IA nas rotinas de marketing, atendimento e vendas para que sua equipe foque no que realmente gera valor.",
    results: [
      "Atendimento 24h sem aumentar equipe",
      "Follow-up automático sem perder oportunidades",
      "Relatórios e análises gerados automaticamente",
    ],
  },
  {
    id: 2,
    icon: Megaphone,
    tag: "Crescimento",
    title: "Captação de leads e tráfego pago",
    problem:
      "Você investe em anúncios sem saber se está gerando o cliente certo. O custo por lead sobe, a qualidade cai e o comercial perde tempo com contatos que não fecham.",
    solution:
      "Criamos campanhas com foco em qualificação, não só volume. Tráfego pago integrado com funil e critérios claros de quem é o lead ideal.",
    results: [
      "Redução do custo por lead qualificado",
      "Mais taxa de conversão de lead para cliente",
      "Campanhas que alimentam o funil de forma previsível",
    ],
  },
  {
    id: 3,
    icon: MousePointerClick,
    tag: "Conversão",
    title: "Experiência do usuário e conversão",
    problem:
      "Pessoas chegam até o seu site ou proposta e não avançam. O problema não é o produto, é como ele está sendo apresentado.",
    solution:
      "Redesenhamos a jornada do cliente com base em comportamento real: landing pages, fluxo de proposta e pontos de contato com foco em converter.",
    results: [
      "Aumento de taxa de conversão em páginas e propostas",
      "Redução do abandono em etapas críticas da jornada",
      "Experiência que gera confiança antes da venda",
    ],
  },
  {
    id: 4,
    icon: GitMerge,
    tag: "Receita",
    title: "Estruturação de funis e vendas",
    problem:
      "O processo de venda depende da memória e do feeling do vendedor. Não tem etapas definidas, nem critérios para avançar ou descartar.",
    solution:
      "Estruturamos o funil de vendas com etapas claras, scripts, critérios de qualificação e indicadores para o gestor acompanhar em tempo real.",
    results: [
      "Ciclo de vendas mais curto",
      "Menos negócios perdidos por falta de acompanhamento",
      "Gestão do pipeline com visibilidade real",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="pt-0 pb-24 lg:pb-40 bg-background relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
            Serviços
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Cada serviço resolve{" "}
            <span className="text-muted-foreground/30">um problema real.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-lg leading-relaxed">
            Não vendemos ferramentas. Estruturamos o que precisa ser estruturado
            para o seu negócio crescer com consistência.
          </p>
        </motion.div>

        {/* Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col lg:flex-row gap-4 lg:gap-10"
        >
          {/* Left: service list */}
          <div className="flex flex-col gap-1 lg:w-[300px] lg:shrink-0">
            {services.map((service, index) => {
              const isActive = active === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActive(index)}
                  className={`relative flex items-center gap-3 text-left rounded-xl px-4 py-3.5 w-full transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                    isActive
                      ? "bg-accent/[0.06] border border-accent/20"
                      : "border border-transparent hover:bg-muted/50 hover:border-border"
                  }`}
                >
                  {/* Active left bar */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300 ${
                      isActive ? "h-8 bg-accent" : "h-0"
                    }`}
                  />

                  {/* Icon */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-accent/10 border border-accent/20"
                        : "bg-muted border border-border/50"
                    }`}
                  >
                    <service.icon
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <span
                    className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ChevronRight
                    className={`ml-auto h-3.5 w-3.5 shrink-0 transition-all duration-200 ${
                      isActive
                        ? "text-accent opacity-100"
                        : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: content panel */}
          <div className="relative flex-1 rounded-2xl border border-border/60 bg-white/60 backdrop-blur-sm overflow-hidden shadow-sm">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 via-accent/60 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="p-8 lg:p-10"
              >
                {/* Watermark icon */}
                <div className="absolute top-6 right-6 pointer-events-none select-none opacity-[0.04]">
                  <current.icon className="w-32 h-32 text-foreground" />
                </div>

                <div className="relative flex flex-col gap-8">
                  {/* Tag + Title */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                        {current.tag}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-black text-foreground leading-tight tracking-tight">
                      {current.title}
                    </h3>
                  </div>

                  {/* Three columns: problema / solução / resultados */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Problema */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                        Problema
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {current.problem}
                      </p>
                    </div>

                    {/* Solução */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/50">
                        Solução
                      </span>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {current.solution}
                      </p>
                    </div>

                    {/* Resultados */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-accent/60">
                        Resultados esperados
                      </span>
                      <ul className="flex flex-col gap-2">
                        {current.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            <span className="text-sm text-foreground/70 leading-relaxed">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    <a
                      href="#contato"
                      className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent transition-colors duration-200"
                    >
                      Quero estruturar isso no meu negócio
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
