"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  GraduationCap,
  ShoppingBag,
  Store,
  Briefcase,
  Factory,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const sectors = [
  {
    title: "Educação",
    description:
      "Captação previsível de alunos para faculdades, pós-graduações e cursos livres.",
    href: "/marketing-educacional",
    icon: GraduationCap,
    iconBg: "bg-[#6575FF]/10 border-[#6575FF]/25",
    iconColor: "text-[#6575FF]",
    metric: "+R$ 450M em matrículas",
  },
  {
    title: "E-commerce",
    description:
      "Performance, conversão e LTV para lojas que querem escalar sem queimar margem.",
    href: "/marketing-para-ecommerce",
    icon: ShoppingBag,
    iconBg: "bg-[#6575FF]/10 border-[#6575FF]/25",
    iconColor: "text-[#6575FF]",
    metric: "ROAS 4-8x em operações estruturadas",
  },
  {
    title: "Varejo",
    description:
      "Tráfego, integração loja física e digital, atendimento e recompra para marcas de varejo.",
    href: "/marketing-para-varejo",
    icon: Store,
    iconBg: "bg-[#6575FF]/10 border-[#6575FF]/25",
    iconColor: "text-[#6575FF]",
    metric: "Aumento de fluxo + recompra",
  },
  {
    title: "Indústria",
    description:
      "Geração de demanda para venda complexa, ciclo longo e ticket alto na indústria.",
    href: "/marketing-para-industria",
    icon: Factory,
    iconBg: "bg-[#6575FF]/10 border-[#6575FF]/25",
    iconColor: "text-[#6575FF]",
    metric: "Pipeline previsível em B2B industrial",
  },
  {
    title: "B2B",
    description:
      "Estruturação comercial, qualificação e processo de vendas para serviços e tecnologia B2B.",
    href: "/marketing-para-b2b",
    icon: Building2,
    iconBg: "bg-[#6575FF]/10 border-[#6575FF]/25",
    iconColor: "text-[#6575FF]",
    metric: "Funil comercial previsível",
  },
  {
    title: "Empresas de Serviços",
    description:
      "Lead qualificado e canal previsível para consultorias, seguros, planos de saúde e mais.",
    href: "/marketing-para-servicos",
    icon: Briefcase,
    iconBg: "bg-[#6575FF]/10 border-[#6575FF]/25",
    iconColor: "text-[#6575FF]",
    metric: "Crescimento sem depender de indicação",
  },
];

export function HomeSectors() {
  return (
    <section
      id="setores"
      className="py-18 lg:py-28 bg-gradient-to-b from-[var(--surface-soft)] to-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 max-w-2xl"
        >
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            Setores que dominamos
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Estratégia desenhada para o seu negócio.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed font-medium">
            Cada setor tem dinâmica própria de funil, ticket, ciclo e canal.
            Nosso método se adapta à realidade do seu mercado, não o contrário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href={sector.href}
                className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/35 hover:shadow-[0_24px_70px_rgba(101,117,255,0.13)]"
              >
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105",
                    sector.iconBg,
                  )}
                >
                  <sector.icon className={cn("h-6 w-6", sector.iconColor)} />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-xl font-black tracking-tight text-foreground">
                    {sector.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-auto flex items-end justify-between border-t border-border/40 pt-4">
                  <p className="max-w-[60%] text-[10px] font-bold uppercase leading-tight tracking-wider text-muted-foreground/70">
                    {sector.metric}
                  </p>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 transition-all duration-300 group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10">
                    <ArrowUpRight className="h-4 w-4 text-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6575FF]" />
                  </div>
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
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>Serviços sob demanda para negócios que precisam estruturar aquisição, funil e vendas.</span>
          <Link href="/diagnostico" className="font-bold text-[#6575FF] hover:underline">
            Fale com a gente →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
