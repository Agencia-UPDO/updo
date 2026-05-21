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
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-2xl border border-border/70 bg-[#F7F9FF] px-5 py-7 shadow-sm sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-accent/80">
                Captação educacional
              </span>
              <h2 className="mt-4 font-heading text-2xl font-black leading-tight text-foreground md:text-3xl">
                O que costuma travar a captação.
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {barriers.map((barrier) => (
                <div
                  key={barrier.title}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-white p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/15 bg-accent/10 text-accent">
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
