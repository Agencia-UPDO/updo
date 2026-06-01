"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Bot, ShieldCheck } from "lucide-react";

const secondaryPillars = [
  {
    icon: Brain,
    title: "Neuromarketing aplicado",
    description:
      "Copy, oferta e processo comercial desenhados com gatilhos de decisão validados em campo, não em teoria.",
  },
  {
    icon: Bot,
    title: "IA integrada ao funil",
    description:
      "Agentes de IA para qualificação, atendimento e nutrição, conectados ao seu CRM sem virar caixa-preta.",
  },
  {
    icon: ShieldCheck,
    title: "Governança e transparência",
    description:
      "Reuniões semanais, ISO 27001, comitê consultivo e dashboard aberto. Você sabe o que está sendo feito e por quê.",
  },
];

export function HomeDifferentials() {
  return (
    <section className="py-18 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,rgba(7,17,31,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,17,31,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 max-w-2xl"
        >
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Por que UPDO
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            O que só a UPDO entrega.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            Não somos agência de execução. Somos uma agência com método
            próprio, sistemas exclusivos e governança real validados por uma
            década.
          </p>
        </motion.div>

        {/* Hero card: Radar UPDO™ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#07111F] via-[#0A1526] to-[#07111F] p-8 shadow-[0_24px_80px_rgba(7,17,31,0.22)] lg:p-12"
        >
          {/* Padrão de grid de fundo */}
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/[0.08] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/[0.08] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-center">
            {/* Coluna texto */}
            <div className="flex flex-col">
              <div className="updo-badge inline-flex items-center self-start rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Sistema próprio
              </div>
              <h3 className="mt-4 font-heading text-3xl lg:text-4xl font-black text-white leading-[1.1] tracking-tight">
                Radar UPDO™
              </h3>
              <p className="mt-5 text-base leading-relaxed text-white/72">
                BI próprio que conecta mídia, funil e comercial em um único
                painel. Independente do seu CRM e desenhado para a leitura
                estratégica que ferramentas convencionais não entregam.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  "Panorama unificado em tempo real",
                  "Visão de ROI por canal, produto e estágio do funil",
                  "Decisão rápida com dado confiável",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/35 bg-[#6575FF]/10">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna screenshot */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_24px_70px_rgba(0,0,0,0.20)]">
                <Image
                  src="/Imagens/radar de matrículas.jpeg"
                  alt="Radar UPDO™: sistema próprio de leitura de performance"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1120]/30 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-[#6575FF]/20 via-[#6575FF]/10 to-transparent blur-2xl opacity-50" />
            </div>
          </div>
        </motion.div>

        {/* 3 pilares menores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {secondaryPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:shadow-[0_24px_70px_rgba(101,117,255,0.13)]"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 transition-transform duration-300 group-hover:scale-105">
                <pillar.icon className="h-5 w-5 text-[#6575FF]" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
