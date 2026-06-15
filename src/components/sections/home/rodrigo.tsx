"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Mic,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";

const achievements = [
  { icon: Briefcase, label: "+300 empresas atendidas" },
  { icon: Award, label: "3x finalista RD Station" },
  { icon: Mic, label: "Palestrante em eventos do setor" },
  { icon: Users, label: "+1 década no mercado" },
];

export function HomeRodrigo() {
  return (
    <section
      id="rodrigo"
      className="py-18 lg:py-28 bg-[#07111F] relative overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#6575FF]/[0.055] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <Image
                src="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                alt="Rodrigo Bueno, Fundador da UPDO"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/42 via-transparent to-transparent pointer-events-none" />

              {/* Badge sobre a foto */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                <span className="updo-badge inline-flex items-center self-start rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] backdrop-blur-md">
                  Fundador · Estrategista
                </span>
                <h3 className="font-heading text-2xl font-black text-white tracking-tight">
                  Rodrigo Bueno
                </h3>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-[#6575FF]/15 blur-2xl opacity-60" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col"
          >
            <span className="updo-badge inline-flex items-center self-start rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Quem lidera a UPDO
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Estratégia de quem já fez acontecer.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/72 max-w-xl">
              Rodrigo Bueno é fundador da UPDO e estrategista de marketing e
              vendas há mais de uma década. Estruturou a captação de
              instituições de ensino, varejistas, e-commerces e empresas B2B
              em todo o Brasil, sempre como ponte entre estratégia, dados e
              execução, sem terceirizar a inteligência do projeto.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/68 max-w-xl">
              É professor de educação executiva e de pós-graduação na PUCPR,
              professor de pós-graduação na Faculdade IBRATE, professor de MBA
              na UFPR, e na Universidade Positivo.
            </p>

            <div className="mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-black leading-tight tracking-tight text-white">
                      Treinamentos corporativos
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/58">
                      Vendas, neurovendas, IA e atendimento comercial para times que precisam aplicar o método na rotina.
                    </p>
                  </div>
                </div>
                <Link
                  href="/treinamentos-corporativos"
                  className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-5 text-sm font-bold text-[#6575FF] transition-all duration-300 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/16 hover:text-white"
                >
                  Conhecer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Chips de conquista */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition-colors hover:border-[#6575FF]/40"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/30 bg-[#6575FF]/10 text-[#6575FF]">
                    <a.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-white/75 leading-snug">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="https://www.linkedin.com/company/agencia-updo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto inline-flex h-13 w-full max-w-xs items-center justify-center gap-3 rounded-full bg-white px-6 text-center text-sm font-bold text-foreground shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white hover:text-[#6575FF] hover:shadow-[0_16px_36px_rgba(101,117,255,0.24)] active:scale-95 sm:mx-0 sm:w-auto sm:max-w-none"
              >
                Conectar no LinkedIn
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/diagnostico"
                className="group mx-auto inline-flex h-13 w-full max-w-xs items-center justify-center gap-2 rounded-full border border-[#6575FF]/25 bg-[#6575FF]/10 px-6 text-center text-sm font-bold text-[#6575FF] transition-opacity hover:opacity-80 sm:mx-0 sm:h-auto sm:w-auto sm:max-w-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
              >
                Quero falar direto com a equipe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
