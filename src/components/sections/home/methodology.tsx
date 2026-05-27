"use client";

import { motion } from "framer-motion";
import {
  Search,
  Compass,
  Zap,
  Activity,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Matriz CSD, leitura de funil, auditoria de canais, processos e dados.",
    icon: Search,
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "ICP, posicionamento, oferta, mensagem e plano de canais alinhados ao negócio.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Execução",
    description:
      "Mídia paga, landing pages, automação, CRM e processo comercial em produção.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Inteligência",
    description:
      "Dashboards, BI, Radar UPDO™ e leitura de performance que CRM convencional não entrega.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Otimização",
    description:
      "Ajuste contínuo orientado por dados: testes, hipóteses validadas e crescimento composto.",
    icon: TrendingUp,
  },
];

export function HomeMethodology() {
  return (
    <section
      id="metodologia"
      className="py-18 lg:py-28 bg-[#F7F9FF] relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(86,254,213,0.06),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(79,70,229,0.02),transparent_45%)]" />

      {/* Glows sutis */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 max-w-2xl"
        >
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Método UPDO
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Crescimento não é evento.
            <br />
            É processo.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            Nosso método organiza o seu negócio em 5 etapas conectadas: da
            hipótese ao caixa. Cada uma com entregáveis, métricas e
            responsáveis claros.
          </p>
        </motion.div>

        {/* Timeline desktop */}
        <div className="relative hidden lg:block">
          {/* Linha conectora alinhada ao centro vertical do ícone (64px / 2 = 32px) */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-5 gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Ícone único, cobre a linha conectora */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-[#6575FF]/25 shadow-[0_4px_20px_rgba(101,117,255,0.18)] transition-transform duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:shadow-[0_8px_28px_rgba(101,117,255,0.22)]">
                  <step.icon className="h-6 w-6 text-[#6575FF]" />
                </div>

                {/* Número */}
                <span className="mt-5 font-heading text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                  Etapa {step.number}
                </span>

                {/* Título */}
                <h3 className="mt-2 font-heading text-xl font-black tracking-tight text-foreground">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stack mobile/tablet */}
        <div className="flex flex-col gap-6 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              className="flex items-start gap-5 rounded-3xl border border-border/60 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10">
                  <step.icon className="h-5 w-5 text-[#6575FF]" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/60">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-lg font-black tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
