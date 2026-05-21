"use client";

import { motion } from "framer-motion";

// ─── Placeholder client list ─────────────────────────────────────────────────
// Replace `name` with your real client names / swap the div for <img> when
// logos are ready.
import Image from "next/image";

const clients = [
  { id: 1, name: "PUCPR", src: "/Imagens/PUCPRcwb.png" },
  { id: 2, name: "CNA", src: "/Imagens/CNA-Ingles-Definitivo.png" },
  { id: 3, name: "Faculdade IBRATE", src: "/Imagens/Faculdade-Ibrate.png" },
  { id: 4, name: "Instituto EQUILIBRA", src: "/Imagens/Instituto-Equilibra.png" },
  { id: 5, name: "Veta Pós-graduação", src: "/Imagens/veta.svg" },
];

// Triple the list to ensure seamless looping on all screen sizes
const track = [...clients, ...clients, ...clients];

export function Clients() {
  return (
    <section className="py-14 lg:py-16 bg-background border-y border-border/40 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
            Autoridade Educacional
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight text-foreground leading-[1.1]">
            Instituições que confiam{" "}
            <span className="text-muted-foreground/30">na UPDO.</span>
          </h2>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-xl font-black text-foreground">
                +1.2M
              </span>
              <span className="font-medium">leads gerados</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-xl font-black text-foreground">
                +R$ 450M
              </span>
              <span className="font-medium">em matrículas geradas</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-20 items-center justify-start py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {track.map((client, i) => (
            <LogoSlot key={i} name={client.name} src={client.src} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LogoSlot({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-40 h-14 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
      <div className="relative w-full h-full p-2">
        <Image
          src={src}
          alt={`Logo ${name}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
