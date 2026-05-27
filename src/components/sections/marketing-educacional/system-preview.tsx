"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  BarChart3,
  Layers,
  Users2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Prioridade por Curso",
    description:
      "Identifique instantaneamente quais cursos e turmas precisam de maior esforço e prioridade estratégica para bater as metas de ocupação.",
  },
  {
    icon: Users2,
    title: "Ranking de Vendedores",
    description:
      "Acompanhe a performance individual e o ranking de conversão de cada consultor da sua equipe em tempo real.",
  },
  {
    icon: TrendingUp,
    title: "Projeção de Matrículas",
    description:
      "Saiba com antecedência se a sua turma será fechada ou se é necessário ajustar a estratégia para garantir a viabilidade do curso.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento Global",
    description:
      "Uma visão geral e operacionall focada no resultado final: controle total de vendas, turmas e do status real da sua instituição.",
  },
];

export function SystemPreview() {
  return (
    <section
      id="sistema"
      className="py-24 lg:py-40 bg-[#0A1529] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-20" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent cursor-pointer hover:bg-accent/20 transition-all">
              <Zap className="h-3 w-3 fill-accent" /> Exclusividade UPDO
            </span>
            <h2 className="mt-6 font-heading text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Radar de Matrículas™: <br />
              <span className="text-white/30">
                O Sistema por Trás do Resultado.
              </span>
            </h2>
            <p className="mt-8 text-white/40 text-base lg:text-lg leading-relaxed max-w-xl">
              Mais do que um dashboard, o Radar de Matrículas™ é um sistema
              próprio e exclusivo da UPDO. Ele funciona de forma independente
              para entregar um panorama estratégico real que o seu CRM não
              alcança.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-bold text-white tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/30 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Right (Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-[#0A0B10] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
              {/* Browser bar */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
              </div>

              <div className="relative aspect-video bg-muted overflow-hidden">
                <Image
                  src="/Imagens/radar de matrículas.jpeg"
                  alt="Interface do Sistema Radar de Matrículas"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />

                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center bg-foreground">
                  <div className="flex flex-col items-center gap-4 text-white/10">
                    <BarChart3 className="w-20 h-20" />
                    <span className="text-xs uppercase tracking-widest font-black italic">
                      Visualização do Sistema
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Float badges */}
            <div className="absolute -top-6 -right-6 h-32 w-32 bg-accent/20 rounded-full blur-[40px] pointer-events-none" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 p-5 rounded-2xl bg-white border border-border/10 shadow-2xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground/60 tracking-wider leading-none">
                    Status
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    Sistema em Operação
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="#contato"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-10 h-16 text-lg font-bold bg-accent text-accent-foreground border-none shadow-[0_0_20px_rgba(86,254,213,0.32)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(86,254,213,0.52)] active:scale-95 flex items-center justify-center gap-2",
            )}
          >
            Ver meu potencial de captação
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
