"use client";

import { motion } from "framer-motion";

export function VideoProof() {
  return (
    <section className="bg-white py-18 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center"
        >
          <div className="max-w-xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Depoimento
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Resultado real também precisa parecer real.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Veja como a UPDO estrutura a captação de alunos com parceiros do
              mercado educacional e transforma previsibilidade em rotina de
              performance.
            </p>
            <div className="mt-6 rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-5">
              <p className="text-sm font-medium italic leading-relaxed text-muted-foreground">
                Reconhecidos como destaque nacional pela RD Station com cases no
                segmento educacional.
              </p>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/2cE9ycBnLVg"
              title="Depoimento Cliente UPDO"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
