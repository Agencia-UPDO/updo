"use client";

import { motion } from "framer-motion";

// ─── Placeholder client list ─────────────────────────────────────────────────
// Replace `name` with your real client names / swap the div for <img> when
// logos are ready.
const clients = [
  { id: 1, name: "Cliente 01" },
  { id: 2, name: "Cliente 02" },
  { id: 3, name: "Cliente 03" },
  { id: 4, name: "Cliente 04" },
  { id: 5, name: "Cliente 05" },
  { id: 6, name: "Cliente 06" },
  { id: 7, name: "Cliente 07" },
  { id: 8, name: "Cliente 08" },
  { id: 9, name: "Cliente 09" },
  { id: 10, name: "Cliente 10" },
];

// Duplicate list so the infinite scroll looks seamless
const track = [...clients, ...clients];

export function Clients() {
  return (
    <section className="py-16 lg:py-20 bg-background border-y border-border/40 relative overflow-hidden">
      {/* subtle gradient edges to fade the track */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center text-center gap-3"
        >
          <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
            Clientes
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Empresas que crescem{" "}
            <span className="text-muted-foreground/30">com estrutura.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Não com sorte. Não com verba infinita. Com método, dados e execução.
          </p>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {track.map((client, i) => (
            <LogoSlot key={i} name={client.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LogoSlot({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-36 h-12 grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300">
      {/* ── swap the content below for <img src={...} alt={name} className="max-h-10 w-auto object-contain" /> when logos arrive ── */}
      <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground select-none">
        {name}
      </span>
    </div>
  );
}
