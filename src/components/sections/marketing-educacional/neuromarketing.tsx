"use client";

import { motion } from "framer-motion";
import { Brain, Target, Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const pillars = [
  {
    icon: Users,
    title: "Pertencimento",
    description:
      "O ser humano tem uma necessidade biológica de fazer parte de algo maior. Não vendemos disciplinas, vendemos o ingresso em uma comunidade de elite.",
  },
  {
    icon: Target,
    title: "Poder & Status",
    description:
      "A educação é a ferramenta de ascensão social mais poderosa. Ativamos o desejo inconsciente de autoridade e reconhecimento profissional.",
  },
  {
    icon: Zap,
    title: "Projeção de Futuro",
    description:
      "O cérebro decide pela emoção e justifica pela razão. Mostramos ao aluno quem ele será, não apenas o que ele vai estudar.",
  },
];

export function Neuromarketing() {
  return (
    <section
      id="neuromarketing"
      className="relative py-24 lg:py-40 bg-white overflow-hidden"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Brain className="h-3 w-3" />A Ciência da Conversão
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1] mb-8">
              Vender curso é projetar o aluno para o{" "}
              <span className="italic">futuro.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
              Instituições de ensino que focam apenas no "preço" ou na "grade
              curricular" estão perdendo a batalha pela atenção. Nós aplicamos
              Neuromarketing para tocar no que realmente importa: o desejo
              inconsciente de transformação.
            </p>

            <div className="flex flex-col gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl border border-border/50 bg-slate-50/50 overflow-hidden shadow-2xl shadow-primary/5">
              <Image
                src="/Imagens/sala-cheia.jpg"
                alt="Estrategista Rodrigo Bueno em ação"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge - Insight */}
            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-primary text-white p-6 rounded-2xl shadow-xl shadow-primary/30 max-w-[200px] animate-bounce-subtle z-10 cursor-pointer hover:scale-105 transition-transform">
              <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-60">
                Estratégia
              </p>
              <p className="text-sm font-bold leading-tight underline decoration-accent/40 underline-offset-4 decoration-2">
                Decisões de matrícula acontecem por impulso.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="#contato"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-10 h-16 text-lg font-bold bg-accent text-accent-foreground border-none shadow-[0_0_20px_rgba(86,254,213,0.32)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(86,254,213,0.52)] active:scale-95 flex items-center justify-center gap-2",
            )}
          >
            Quero aplicar isso na minha captação
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
