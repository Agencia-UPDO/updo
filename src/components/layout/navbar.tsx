"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Brain,
  Target,
  Zap,
  Blocks,
  Users,
  BarChart,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  ArrowRight,
  Database,
  Eye,
  GraduationCap,
  ShoppingBag,
  Store,
  Factory,
  Building2,
  Briefcase,
  Trophy,
} from "lucide-react";

/* ─── Sectors submenu data ─── */
const sectorItems = [
  {
    title: "Educação",
    description: "Captação previsível de alunos e matrículas",
    href: "/marketing-educacional",
    icon: GraduationCap,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "E-commerce",
    description: "Performance, conversão e LTV para escalar",
    href: "/marketing-para-ecommerce",
    icon: ShoppingBag,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Varejo",
    description: "Integração loja física, digital e recompra",
    href: "/marketing-para-varejo",
    icon: Store,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Indústria",
    description: "Demanda para venda complexa e ticket alto",
    href: "/marketing-para-industria",
    icon: Factory,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "B2B",
    description: "Processo comercial para serviços e tecnologia",
    href: "/marketing-para-b2b",
    icon: Building2,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Empresas de Serviços",
    description: "Lead qualificado para consultorias, seguros e outros serviços",
    href: "/marketing-para-servicos",
    icon: Briefcase,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
];

/* ─── Cases submenu data ─── */
const caseItems = [
  {
    title: "Educação",
    description: "ROAS 20x e +211% de leads gerados",
    href: "/cases/educacao",
    icon: GraduationCap,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
    metric: "ROAS 20x",
  },
  {
    title: "E-commerce",
    description: "+6.900% de vendas em 60 dias",
    href: "/cases/e-commerce",
    icon: ShoppingBag,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
    metric: "+6.900%",
  },
  {
    title: "Varejo",
    description: "+87% de faturamento em 2 anos",
    href: "/cases/varejo",
    icon: Store,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
    metric: "+87%",
  },
  {
    title: "Indústria",
    description: "ROI de 1.527% com R$ 21,5k de mídia",
    href: "/cases/industria",
    icon: Factory,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
    metric: "1.527% ROI",
  },
];

/* ─── Services submenu data ─── */
const serviceItems = [
  {
    title: "IA para Vendas",
    description: "Agentes de IA que qualificam leads e agendam reunioes",
    href: "/servicos/ia-para-vendas",
    icon: Brain,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Inside Sales",
    description: "Playbook, pipeline e treinamento comercial",
    href: "/servicos/inside-sales",
    icon: Users,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Inteligencia de Dados",
    description: "Dashboard unificado, atribuicao e KPIs em tempo real",
    href: "/servicos/inteligencia-de-dados",
    icon: Database,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Funil e Automacao",
    description: "Nutricao, lead scoring e automacao de WhatsApp",
    href: "/servicos/funil-e-automacao",
    icon: Zap,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "UX e CRO",
    description: "Otimizacao de conversao com teste A/B e dado",
    href: "/servicos/ux-cro",
    icon: Eye,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
  {
    title: "Geracao de Demanda",
    description: "Google, Meta, LinkedIn e SEO integrados",
    href: "/servicos/geracao-de-demanda",
    icon: Target,
    iconBg: "bg-[#6575FF]/10 text-[#6575FF]",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [sectorsOpen, setSectorsOpen] = React.useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = React.useState(false);
  const [casesOpen, setCasesOpen] = React.useState(false);
  const [mobileCasesOpen, setMobileCasesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha os dropdowns quando a rota muda
  React.useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setSectorsOpen(false);
    setMobileSectorsOpen(false);
    setCasesOpen(false);
    setMobileCasesOpen(false);
  }, [pathname]);

  const navItems = siteConfig.mainNav;

  // Icon mapping para itens do menu
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "home":
        return Home;
      case "neuromarketing":
        return Brain;
      case "o método":
      case "como trabalhamos":
        return Target;
      case "radar":
        return Zap;
      case "serviços":
        return Blocks;
      case "setores":
        return Blocks;
      case "especialistas":
      case "rodrigo bueno":
        return Users;
      case "cases":
        return BarChart;
      case "sobre":
        return Users;
      default:
        return ChevronRight;
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled
        ? "border-b border-border/60 bg-background shadow-sm"
        : "border-b border-transparent bg-background/0",
    )}>
      <div className="container flex h-20 items-center justify-between mx-auto px-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Imagens/Agencia-UPDO.svg"
            alt={siteConfig.name}
            width={360}
            height={120}
            className="h-12 w-auto object-contain transition-opacity hover:opacity-80"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-base font-medium">
          {navItems.map((item) => {
              if (item.title === "Serviços") {
                return (
                  <div
                    key="services-dropdown"
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {/* Trigger */}
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 transition-colors hover:text-[#6575FF]",
                        pathname?.startsWith("/servicos") || servicesOpen
                          ? "text-[#6575FF]"
                          : "text-muted-foreground",
                      )}
                    >
                      Serviços
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
                        servicesOpen
                          ? "pointer-events-auto translate-y-0 opacity-100 visible"
                          : "pointer-events-none translate-y-2 opacity-0 invisible",
                      )}
                    >
                      <div className="w-[540px] overflow-hidden rounded-2xl border border-border/50 bg-white p-2 shadow-2xl shadow-black/[0.10]">
                        <div className="grid grid-cols-2 gap-0.5">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-150 hover:bg-[#6575FF]/[0.06]"
                            >
                              <div
                                className={cn(
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                                  service.iconBg,
                                )}
                              >
                                <service.icon className="h-[18px] w-[18px]" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-[#6575FF]">
                                  {service.title}
                                </p>
                                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-1 border-t border-border/40 px-1 pt-2">
                          <Link
                            href="/#servicos"
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground transition-all hover:bg-[#6575FF]/[0.06] hover:text-[#6575FF]"
                          >
                            Ver visão geral dos serviços
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.title === "Setores") {
                return (
                  <div
                    key="sectors-dropdown"
                    className="relative"
                    onMouseEnter={() => setSectorsOpen(true)}
                    onMouseLeave={() => setSectorsOpen(false)}
                  >
                    {/* Trigger */}
                    <button
                      type="button"
                      aria-expanded={sectorsOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 transition-colors hover:text-[#6575FF]",
                        pathname?.includes("/marketing-para") || pathname?.includes("/marketing-educacional") || sectorsOpen
                          ? "text-[#6575FF]"
                          : "text-muted-foreground",
                      )}
                    >
                      Setores
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          sectorsOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
                        sectorsOpen
                          ? "pointer-events-auto translate-y-0 opacity-100 visible"
                          : "pointer-events-none translate-y-2 opacity-0 invisible",
                      )}
                    >
                      <div className="w-[520px] overflow-hidden rounded-2xl border border-border/50 bg-white p-2 shadow-2xl shadow-black/[0.10]">
                        <div className="grid grid-cols-2 gap-0.5">
                          {sectorItems.map((sector) => (
                            <Link
                              key={sector.href}
                              href={sector.href}
                              onClick={() => setSectorsOpen(false)}
                              className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-150 hover:bg-[#6575FF]/[0.06]"
                            >
                              <div
                                className={cn(
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                                  sector.iconBg,
                                )}
                              >
                                <sector.icon className="h-[18px] w-[18px]" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-[#6575FF]">
                                  {sector.title}
                                </p>
                                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                                  {sector.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-1 border-t border-border/40 px-1 pt-2">
                          <Link
                            href="/#setores"
                            onClick={() => setSectorsOpen(false)}
                            className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground transition-all hover:bg-[#6575FF]/[0.06] hover:text-[#6575FF]"
                          >
                            Ver todos os setores
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.title === "Cases") {
                return (
                  <div
                    key="cases-dropdown"
                    className="relative"
                    onMouseEnter={() => setCasesOpen(true)}
                    onMouseLeave={() => setCasesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={casesOpen}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 transition-colors hover:text-[#6575FF]",
                        pathname?.startsWith("/cases") || casesOpen
                          ? "text-[#6575FF]"
                          : "text-muted-foreground",
                      )}
                    >
                      Cases
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          casesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
                        casesOpen
                          ? "pointer-events-auto translate-y-0 opacity-100 visible"
                          : "pointer-events-none translate-y-2 opacity-0 invisible",
                      )}
                    >
                      <div className="w-[480px] overflow-hidden rounded-2xl border border-border/50 bg-white p-2 shadow-2xl shadow-black/[0.10]">
                        <div className="grid grid-cols-2 gap-0.5">
                          {caseItems.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              onClick={() => setCasesOpen(false)}
                              className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-150 hover:bg-[#6575FF]/[0.06]"
                            >
                              <div
                                className={cn(
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                                  c.iconBg,
                                )}
                              >
                                <c.icon className="h-[18px] w-[18px]" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-[#6575FF]">
                                  {c.title}
                                </p>
                                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                                  {c.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-1 border-t border-border/40 px-1 pt-2">
                          <Link
                            href="/cases"
                            onClick={() => setCasesOpen(false)}
                            className="group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground transition-all hover:bg-[#6575FF]/[0.06] hover:text-[#6575FF]"
                          >
                            Ver todos os cases
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "transition-colors hover:text-[#6575FF]",
                    pathname === item.href ? "text-[#6575FF]" : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/diagnostico"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-6 transition-all duration-300 hover:scale-105 active:scale-95 h-10",
            )}
          >
            Agendar diagnóstico
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 hover:bg-[#6575FF]/10"
              />
            }
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle de Menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex flex-col w-[300px] sm:w-[400px] border-l border-white/5 bg-[#0A1120] p-0 text-white font-sans overflow-hidden"
          >
            <div className="p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/Imagens/Logo UPDO 2024 Branca.svg"
                  alt="UPDO Logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <SheetTitle className="sr-only">{siteConfig.name}</SheetTitle>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                Navegação Estratégica
              </p>
            </div>

            <nav className="flex-1 overflow-y-auto pt-4">
              <div className="grid gap-1 px-4">
                {navItems.map((item) => {
                  const Icon = getIcon(item.title);

                  if (item.title === "Serviços") {
                    return (
                      <div key="mobile-services">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="group flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-colors group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10">
                            <Blocks className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">Serviços</span>
                          <ChevronDown
                            className={cn(
                              "ml-auto h-3.5 w-3.5 text-white/30 transition-transform duration-200",
                              mobileServicesOpen && "rotate-180",
                            )}
                          />
                        </button>

                        {/* Mobile services list */}
                        <div
                          className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-[52px] mt-1 flex flex-col gap-0.5 border-l border-white/[0.07] pl-4 pb-2">
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                  className={cn(
                                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all hover:bg-white/5",
                                    pathname === service.href
                                      ? "text-[#6575FF]"
                                      : "text-white/50 hover:text-white",
                                  )}
                                >
                                  <service.icon className="h-3.5 w-3.5 shrink-0" />
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (item.title === "Setores") {
                    return (
                      <div key="mobile-sectors">
                        <button
                          type="button"
                          onClick={() => setMobileSectorsOpen((v) => !v)}
                          className="group flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-colors group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10">
                            <Blocks className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">Setores</span>
                          <ChevronDown
                            className={cn(
                              "ml-auto h-3.5 w-3.5 text-white/30 transition-transform duration-200",
                              mobileSectorsOpen && "rotate-180",
                            )}
                          />
                        </button>

                        <div
                          className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            mobileSectorsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-[52px] mt-1 flex flex-col gap-0.5 border-l border-white/[0.07] pl-4 pb-2">
                              {sectorItems.map((sector) => (
                                <Link
                                  key={sector.href}
                                  href={sector.href}
                                  onClick={() => { setIsOpen(false); setMobileSectorsOpen(false); }}
                                  className={cn(
                                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all hover:bg-white/5",
                                    pathname === sector.href
                                      ? "text-[#6575FF]"
                                      : "text-white/50 hover:text-white",
                                  )}
                                >
                                  <sector.icon className="h-3.5 w-3.5 shrink-0" />
                                  {sector.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (item.title === "Cases") {
                    return (
                      <div key="mobile-cases">
                        <button
                          type="button"
                          onClick={() => setMobileCasesOpen((v) => !v)}
                          className="group flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-colors group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10">
                            <Trophy className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">Cases</span>
                          <ChevronDown
                            className={cn(
                              "ml-auto h-3.5 w-3.5 text-white/30 transition-transform duration-200",
                              mobileCasesOpen && "rotate-180",
                            )}
                          />
                        </button>

                        <div
                          className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            mobileCasesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-[52px] mt-1 flex flex-col gap-0.5 border-l border-white/[0.07] pl-4 pb-2">
                              {caseItems.map((c) => (
                                <Link
                                  key={c.href}
                                  href={c.href}
                                  onClick={() => { setIsOpen(false); setMobileCasesOpen(false); }}
                                  className={cn(
                                    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all hover:bg-white/5",
                                    pathname === c.href
                                      ? "text-[#6575FF]"
                                      : "text-white/50 hover:text-white",
                                  )}
                                >
                                  <c.icon className="h-3.5 w-3.5 shrink-0" />
                                  {c.title}
                                </Link>
                              ))}
                              <Link
                                href="/cases"
                                onClick={() => { setIsOpen(false); setMobileCasesOpen(false); }}
                                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/30 transition-all hover:bg-white/5 hover:text-white/60"
                              >
                                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                                Ver todos os cases
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center gap-4 rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-white/5",
                        pathname === item.href
                          ? "text-[#6575FF] bg-white/[0.03]"
                          : "text-white/60 hover:text-white",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-colors group-hover:border-[#6575FF]/35 group-hover:bg-[#6575FF]/10",
                          pathname === item.href &&
                            "border-[#6575FF]/35 bg-[#6575FF]/10 text-[#6575FF]",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold tracking-tight">
                        {item.title}
                      </span>
                      <ChevronRight className="ml-auto h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-40 group-hover:translate-x-0" />
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="p-8 bg-white/[0.02] border-t border-white/5 space-y-6">
              <Link
                href="/diagnostico"
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full rounded-2xl h-14 text-sm font-black uppercase tracking-wider bg-accent text-accent-foreground hover:opacity-90 shadow-xl shadow-accent/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2",
                )}
              >
                Agendar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="space-y-4 pt-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                  Contato Direto
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:contato@updo.com.br"
                    className="flex items-center gap-3 text-xs text-white/40 hover:text-[#6575FF] transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    contato@updo.com.br
                  </a>
                  <a
                    href="tel:+5541987112003"
                    className="flex items-center gap-3 text-xs text-white/40 hover:text-[#6575FF] transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (41) 98711-2003
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
