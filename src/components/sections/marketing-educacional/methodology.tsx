"use client";

import { motion } from "framer-motion";
import { RefreshCcw, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="py-24 lg:py-40 bg-[#0A1120] relative overflow-hidden text-white font-sans"
    >
      {/* Blueprint/Grid Texture Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mb-16 lg:mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400 mb-6 font-sans">
              Ecossistema UPDO
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Não é sobre marketing. <br className="hidden md:block" />
              <span className="text-white/10 font-black">
                É sobre processo.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Part 1: The Cycle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto bg-white/5 rounded-full p-8 backdrop-blur-xl border border-white/5 shadow-2xl shadow-cyan-500/5">
              <Image
                src="/Imagens/Infografico-Metodlogia-Updo.png"
                alt="Metodologia UPDO"
                fill
                className="object-contain p-4"
              />
            </div>
            {/* Glow beneath the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-black text-white font-heading">
                O Círculo de Execução
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-relaxed font-sans">
                Nossa metodologia foi desenhada para garantir que cada centavo
                investido retorne em matrículas. Não aceitamos o "ponto de
                vista", aceitamos os **dados.**
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { t: "Planejamento", d: "Alinhamento de metas e rotas." },
                  { t: "Método", d: "Aplicação do Radar de Matrículas™." },
                  { t: "Execução", d: "Performance em canais de tração." },
                  { t: "Feedback", d: "Otimização semanal de rota." },
                ].map((item) => (
                  <div key={item.t} className="flex flex-col gap-1.5">
                    <span className="text-sm font-black text-white uppercase tracking-widest font-sans">
                      {item.t}
                    </span>
                    <span className="text-sm text-white/40 leading-snug">
                      {item.d}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex justify-center lg:justify-start">
                <Link
                  href="#contato"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-8 h-16 text-lg font-bold bg-accent text-accent-foreground border-none shadow-[0_0_20px_rgba(86,254,213,0.32)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(86,254,213,0.52)] active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto",
                  )}
                >
                  Quero este processo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
