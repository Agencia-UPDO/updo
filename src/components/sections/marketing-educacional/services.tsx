"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutGrid,
  Bot,
  Megaphone,
  MousePointerClick,
  GitMerge,
  ArrowRight,
  ChevronRight,
  Search,
} from "lucide-react";

const services = [
  {
    id: 0,
    icon: Search,
    tag: "Fundação",
    title: "Matriz CSD & Diagnóstico Estratégico",
    problem:
      "A maioria dos gestores investe em marketing baseados em 'achismos' ou suposições sobre o que o seu aluno realmente quer, gerando desperdício e frustração.",
    solution:
      "Aplicamos a Matriz CSD (Certezas, Suposições e Dúvidas) no Discovery do seu projeto, transformando hipóteses em dados reais para guiar cada ação do seu plano de captação.",
    results: [
      "Estratégia baseada em fatos, não em palpites",
      "Redução de risco logo no início do investimento",
      "Clareza total sobre os objetivos de negócio",
    ],
  },
  {
    id: 1,
    icon: Megaphone,
    tag: "Atração",
    title: "Geração de demanda qualificada",
    problem:
      "Sua instituição investe em anúncios mas atrai apenas curiosos, gerando um volume alto de leads que não convertem em matrículas reais.",
    solution:
      "Criamos e gerimos campanhas estruturadas no Google, Meta e LinkedIn com foco em atrair alunos com real intenção de compra e perfil para o seu curso.",
    results: [
      "Leads com maior poder aquisitivo e interesse real",
      "Redução drástica do custo por matrícula (CAC)",
      "Campanhas otimizadas por curso e unidade",
    ],
  },
  {
    id: 2,
    icon: LayoutGrid,
    tag: "Conversão",
    title: "Funil de captação e automação",
    problem:
      "O interessado chega mas se perde em um site confuso ou demora para ser atendido, fazendo com que ele procure a concorrência.",
    solution:
      "Desenvolvemos landing pages de alta conversão e fluxos de automação (CRM/E-mail/WhatsApp) que mantêm o lead engajado até o fechamento.",
    results: [
      "Aumento na taxa de agendamento de visitas",
      "Nutrição automática de leads em dúvida",
      "Rastreamento total da jornada do aluno",
    ],
  },
  {
    id: 3,
    icon: GitMerge,
    tag: "Vendas",
    title: "Estruturação do processo comercial",
    problem:
      "Sua equipe de vendas não tem um script claro, não faz follow-up e acaba perdendo matrículas por falhas básicas de atendimento.",
    solution:
      "Desenvolvemos o seu Playbook de Vendas Educacional e aplicamos o Treinamento de Neuromarketing para sua equipe comercial, padronizando um atendimento focado em fechamento.",
    results: [
      "Aumento real na taxa de conversão comercial",
      "Playbook de Vendas replicável e escalável",
      "Equipe treinada em gatilhos de neuromarketing",
    ],
  },
  {
    id: 4,
    icon: Bot,
    tag: "Inteligência",
    title: "Inteligência de dados e performance",
    problem:
      "Você não sabe qual canal traz mais lucro ou qual curso está sendo mais caro captar. As decisões são tomadas no escuro.",
    solution:
      "Acesso ao Radar de Matrículas™, nosso sistema próprio e independente que oferece um panorama estratégico real que o seu CRM não alcança.",
    results: [
      "Visão clara do ROI real por curso e campanha",
      "Panorama estratégico unificado da sua instituição",
      "Decisões rápidas baseadas em dados exclusivos",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-background py-18 lg:py-28"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6575FF]/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6575FF]/[0.04] rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="updo-badge mb-6 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Serviços
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            O que você recebe{" "}
            <span className="text-muted-foreground/30">na prática.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-lg leading-relaxed">
            Nós não vendemos apenas tráfego. Implementamos um sistema completo
            que organiza sua captação do anúncio à matrícula.
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
                      ? "border border-[#6575FF]/30 bg-[#6575FF]/[0.06]"
                      : "border border-transparent hover:border-[#6575FF]/20 hover:bg-[#6575FF]/[0.035]"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                      isActive
                        ? "border border-[#6575FF]/25 bg-[#6575FF]/10"
                        : "bg-muted border border-border/50"
                    }`}
                  >
                    <service.icon
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isActive ? "text-[#6575FF]" : "text-muted-foreground"
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
                        ? "text-[#6575FF] opacity-100"
                        : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: content panel */}
          <div className="relative flex-1 rounded-2xl border border-border/60 bg-white/60 backdrop-blur-sm overflow-hidden shadow-sm">
            {/* Blueprint grid for the panel */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6575FF]/20 via-[#6575FF]/60 to-transparent" />

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
                      <span className="inline-flex items-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#6575FF]">
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
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6575FF]/60">
                        Solução
                      </span>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {current.solution}
                      </p>
                    </div>

                    {/* Resultados */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6575FF]/60">
                        Resultados esperados
                      </span>
                      <ul className="flex flex-col gap-2">
                        {current.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6575FF]/70" />
                            <span className="text-sm text-foreground/70 leading-relaxed">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                    <Link
                      href="#contato"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-all duration-200 hover:opacity-80"
                    >
                      Quero estruturar isso no meu negócio
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
