import type { Metadata } from "next";
import Link from "next/link";
import "./(novo)/novo.css";
import { SiteHead, GtmNoscript } from "@/components/layout/site-tracking";
import Navbar from "@/novo/components/layout/navbar";
import MobileMenu from "@/novo/components/layout/mobile-menu";
import Footer from "@/novo/components/layout/footer";
import HeroFundo from "@/novo/components/home/hero-fundo";
import { realce } from "@/novo/components/shared/realce";
import Badge from "@/novo/components/shared/ui/badge/badge";
import ButtonPrimary from "@/novo/components/shared/ui/button/button-primary";
import ButtonWhite from "@/novo/components/shared/ui/button/button-white";
import { fontVariables } from "@/novo/utils/font";
import { balance } from "@/novo/utils/balance";
import { ArrowRight, BookOpen, Compass, House, Layers, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada | UPDO",
  robots: { index: false },
  icons: { icon: "/Imagens/favicon agencia updo.png" },
};

const caminhos = [
  { href: "/", title: "Início", description: "Visão geral da UPDO e do método.", icon: House },
  { href: "/servicos", title: "Serviços", description: "Do anúncio ao caixa, frente por frente.", icon: Layers },
  { href: "/setores", title: "Setores", description: "Estratégia por mercado: educação, varejo, B2B e mais.", icon: Compass },
  { href: "/cases", title: "Cases", description: "Resultados com nome de setor, período e número.", icon: Trophy },
  { href: "https://insights.updo.com.br", title: "Insights", description: "Artigos sobre marketing, vendas, CRM e IA.", icon: BookOpen },
];

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <SiteHead />
      <body className={`${fontVariables} antialiased`}>
        <GtmNoscript />
        <Navbar />
        <MobileMenu />
        <main>
          <section className="relative isolate overflow-x-clip pt-32 pb-18 md:pt-40 lg:pt-48 xl:pb-28">
            <HeroFundo />
            <div className="main-container">
              <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
                <div className="col-span-12 space-y-6 lg:col-span-6">
                  <div>
                    <Badge text="Erro 404" />
                  </div>
                  <p className="font-mono text-secondary/45 text-xs tracking-[0.14em] uppercase">
                    [ <span className="text-lilas-500 font-medium">404</span> ] · rota não encontrada
                  </p>
                  <h1 style={balance}>{realce("Esta página saiu do *funil*.")}</h1>
                  <p className="max-w-[520px]">
                    O endereço que você tentou acessar não existe mais ou mudou de lugar. Os caminhos ao lado
                    levam para as partes mais procuradas do site.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/diagnostico" className="inline-flex w-full sm:w-auto">
                      <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
                    </Link>
                    <Link href="/" className="inline-flex w-full sm:w-auto">
                      <ButtonWhite text="Voltar para o início" className="w-full" />
                    </Link>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                  <div className="bg-secondary shadow-6 rounded-3xl p-5 md:p-7">
                    <p className="text-tagline-3 text-white/50">Caminhos mais acessados</p>
                    <ul className="mt-4 space-y-2.5">
                      {caminhos.map(({ href, title, description, icon: Icon }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4 transition-colors hover:border-primary-500/40 hover:bg-white/[0.07]"
                          >
                            <span className="bg-primary-500/15 text-primary-500 flex size-10 shrink-0 items-center justify-center rounded-xl">
                              <Icon className="size-4.5" strokeWidth={1.75} aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="text-tagline-1 block font-medium text-white">{title}</span>
                              <span className="text-tagline-2 block text-white/55">{description}</span>
                            </span>
                            <ArrowRight
                              className="group-hover:text-primary-500 size-4 shrink-0 text-white/40 transition-all group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
