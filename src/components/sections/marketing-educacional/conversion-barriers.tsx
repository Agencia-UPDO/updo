import { BarChart3, GraduationCap, UsersRound } from "lucide-react";

const barriers = [
  {
    icon: UsersRound,
    title: "Leads que não viram matrícula",
  },
  {
    icon: GraduationCap,
    title: "Turmas com baixa previsibilidade",
  },
  {
    icon: BarChart3,
    title: "Mídia sem leitura do funil",
  },
];

export function ConversionBarriers() {
  return (
    <section className="bg-white py-18 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-2xl border border-border/70 bg-[var(--surface-soft)] px-5 py-7 shadow-sm sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
            <div>
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Captação educacional
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight text-foreground md:text-5xl">
                O que costuma travar a captação.
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {barriers.map((barrier) => (
                <div
                  key={barrier.title}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                    <barrier.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-foreground">
                    {barrier.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
