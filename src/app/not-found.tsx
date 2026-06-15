import Link from "next/link";
import { ArrowRight, Compass, FileSearch, Home, Layers3 } from "lucide-react";

const quickLinks = [
  {
    href: "/",
    title: "Voltar para a home",
    description: "Veja a visao geral da UPDO e os principais caminhos do site.",
    icon: Home,
  },
  {
    href: "/diagnostico",
    title: "Agendar diagnostico",
    description: "Ir direto para a pagina de diagnostico estrategico.",
    icon: Compass,
  },
  {
    href: "/cases",
    title: "Explorar cases",
    description: "Abrir os resultados e projetos organizados por setor.",
    icon: FileSearch,
  },
];

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(86,254,213,0.16),transparent_56%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-72 w-72 rounded-full bg-[#2457e6]/10 blur-[110px]" />
      <div className="pointer-events-none absolute left-[-80px] bottom-10 h-64 w-64 rounded-full bg-accent/12 blur-[110px]" />

      <section className="container mx-auto flex min-h-[calc(100vh-10rem)] flex-col justify-center px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-3xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Erro 404
            </span>

            <h1 className="mt-6 font-heading text-4xl font-black leading-[1.02] tracking-tight text-foreground md:text-6xl">
              Esta pagina saiu da rota, mas a proxima acao esta logo aqui.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              O endereco que voce tentou acessar nao existe mais ou mudou de
              lugar. Organizamos abaixo os caminhos mais uteis para voce seguir
              sem perder contexto.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/diagnostico"
                className="group/button relative isolate inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent bg-accent bg-clip-padding px-6 text-sm font-bold whitespace-nowrap text-accent-foreground shadow-[0_10px_24px_rgba(86,254,213,0.22)] transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:scale-105 hover:bg-[#3eecc4] hover:shadow-[0_14px_34px_rgba(86,254,213,0.34)] active:scale-95 sm:w-auto"
              >
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#56FED5]" />
                Agendar diagnostico
                <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Link>
              <Link
                href="/cases"
                className="group/button inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border-2 border-border/80 bg-white/40 px-6 text-sm font-bold text-foreground whitespace-nowrap transition-all duration-300 outline-none select-none backdrop-blur-xs focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/10 active:scale-95 sm:w-auto"
              >
                Ver todos os cases
                <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-[#07111F]/8 bg-[#07111F] p-6 text-white shadow-[0_24px_80px_rgba(7,17,31,0.14)] md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-accent/90">
                  Mapa sugerido
                </p>
                <p className="mt-1 font-heading text-xl font-black tracking-tight">
                  Caminhos mais acessados
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-200 hover:border-accent/30 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-accent">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading text-base font-black tracking-tight text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/52">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
