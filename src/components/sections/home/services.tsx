"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Filter,
  Handshake,
  MousePointerClick,
  Activity,
  Bot,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 0,
    icon: Megaphone,
    tag: "Atração",
    title: "Geração de demanda qualificada",
    problem:
      "Você investe em anúncio mas atrai curioso, não comprador. Volume alto, conversão baixa e CAC subindo.",
    solution:
      "Campanhas estruturadas no Google, Meta, LinkedIn e TikTok com foco em intenção real, ICP definido e jornada de compra mapeada.",
    results: [
      "Leads com perfil de compra real",
      "Redução de CAC mês a mês",
      "Campanhas otimizadas por produto e canal",
    ],
  },
  {
    id: 1,
    icon: Filter,
    tag: "Conversão",
    title: "Funil, automação e CRM",
    problem:
      "O lead chega mas se perde em site confuso, demora pra ser atendido e some no follow-up. Você perde venda no caminho.",
    solution:
      "Landing pages de alta conversão, automação no RD Station, WhatsApp integrado e CRM organizado por estágio de funil.",
    results: [
      "Aumento na taxa de agendamento",
      "Nutrição automática de lead frio",
      "Rastreamento total da jornada",
    ],
  },
  {
    id: 2,
    icon: Handshake,
    tag: "Vendas",
    title: "Inside Sales e processo comercial",
    problem:
      "Time comercial sem script, sem follow-up, sem playbook. Cada vendedor faz do jeito que acha. Performance vira loteria.",
    solution:
      "Playbook de Vendas, treinamento de neuromarketing aplicado, pipeline padronizado e gestão de meta com leitura semanal.",
    results: [
      "Taxa de conversão comercial acima da média do setor",
      "Onboarding rápido de novo vendedor",
      "Previsibilidade no fechamento",
    ],
  },
  {
    id: 3,
    icon: MousePointerClick,
    tag: "Experiência",
    title: "UX, landing pages e CRO",
    problem:
      "Tráfego chega, mas conversão não acompanha. Página bonita que não vende, formulário longo que ninguém preenche.",
    solution:
      "Design orientado a conversão, neurodesign aplicado, testes A/B e otimização contínua de jornada por hipótese validada.",
    results: [
      "Aumento de conversão por sessão",
      "Redução de bounce em página de oferta",
      "UX validada por dado, não por opinião",
    ],
  },
  {
    id: 4,
    icon: Activity,
    tag: "Inteligência",
    title: "Dados, BI e sistemas próprios",
    problem:
      "Você não sabe qual canal traz mais lucro, qual produto tem melhor margem ou qual cliente recompra mais. Decisão é no escuro.",
    solution:
      "Dashboards personalizados, integração de fontes e acesso ao Radar UPDO™, nosso sistema próprio de leitura de performance independente do CRM.",
    results: [
      "Visão real de ROI por canal e produto",
      "Decisão rápida com dado confiável",
      "Panorama que CRM convencional não entrega",
    ],
  },
  {
    id: 5,
    icon: Bot,
    tag: "IA Aplicada",
    title: "IA aplicada a vendas e atendimento",
    problem:
      "Volume cresce e equipe não escala na mesma velocidade. Lead esfria esperando atendimento humano e você perde a janela de compra.",
    solution:
      "Agentes de IA para qualificação, atendimento e follow-up, integrados ao seu CRM e ao seu time comercial, sem virar caixa-preta.",
    results: [
      "Resposta em segundos, 24/7",
      "Qualificação automática antes do humano",
      "Escala sem inflar headcount",
    ],
  },
];

export function HomeServices() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      id="servicos"
      className="py-18 lg:py-28 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(7,17,31,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,17,31,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-50" />

      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-accent/[0.035] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] mb-6">
            Serviços
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            O que você recebe na prática.
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-lg leading-relaxed">
            Não vendemos só tráfego. Implementamos um sistema completo que
            organiza sua operação do anúncio ao caixa.
          </p>
        </motion.div>

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
          {/* Lista de serviços */}
          <div className="flex flex-col gap-1 lg:w-[320px] lg:shrink-0">
            {services.map((service, index) => {
              const isActive = active === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActive(index)}
                  className={`relative flex items-center gap-3 text-left rounded-2xl px-4 py-3.5 w-full transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-[#6575FF]/35 cursor-pointer ${
                    isActive
                      ? "bg-white border border-[#6575FF]/25 shadow-[0_10px_28px_rgba(101,117,255,0.14)]"
                      : "border border-border/40 bg-white/35 hover:bg-white hover:border-[#6575FF]/20"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#6575FF]/10 border border-[#6575FF]/25"
                        : "bg-white border border-border/70 text-muted-foreground"
                    }`}
                  >
                    <service.icon
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isActive ? "text-[#6575FF]" : "text-foreground/45"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                      isActive ? "text-foreground" : "text-foreground/62"
                    }`}
                  >
                    {service.title}
                  </span>
                  <ChevronRight
                    className={`ml-auto h-3.5 w-3.5 shrink-0 transition-all duration-200 ${
                      isActive
                        ? "text-[#6575FF] opacity-100"
                        : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Painel de conteúdo */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[var(--shadow-soft)]">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6575FF]/55 via-[#6575FF]/30 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.22,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="p-8 lg:p-10"
              >
                <div className="absolute top-6 right-6 pointer-events-none select-none opacity-[0.04]">
                  <current.icon className="w-32 h-32 text-foreground" />
                </div>

                <div className="relative flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="updo-badge inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em]">
                        {current.tag}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-black text-foreground leading-tight tracking-tight">
                      {current.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                        Problema
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {current.problem}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/50">
                        Solução
                      </span>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {current.solution}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6575FF]/60">
                        Resultados
                      </span>
                      <ul className="flex flex-col gap-2">
                        {current.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6575FF]/60" />
                            <span className="text-sm text-foreground/70 leading-relaxed">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                    <Link
                      href="/diagnostico"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all duration-200 hover:opacity-80"
                    >
                      <span className="sm:hidden">Quero estruturar isso</span>
                      <span className="hidden sm:inline">Quero estruturar isso na minha empresa</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
