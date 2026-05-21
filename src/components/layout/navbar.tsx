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
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const isEducationalPage =
    pathname === "/" ||
    pathname?.includes("/marketing-educacional") ||
    pathname?.includes("/cases/educacao");
  const navItems = isEducationalPage
    ? siteConfig.educationalNav
    : siteConfig.mainNav;

  // Icon mapping for educational menu
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "home":
        return Home;
      case "neuromarketing":
        return Brain;
      case "o método":
        return Target;
      case "radar":
        return Zap;
      case "serviços":
        return Blocks;
      case "especialistas":
        return Users;
      case "cases":
        return BarChart;
      default:
        return ChevronRight;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Imagens/Agência UPDO.svg"
            alt={siteConfig.name}
            width={360}
            height={120}
            className="h-12 w-auto object-contain transition-opacity hover:opacity-80"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {!isEducationalPage &&
            navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={cn(
                "transition-colors hover:text-primary/80",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
            ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={isEducationalPage ? "#contato" : "/diagnostico"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-6 transition-all duration-300 hover:scale-105 active:scale-95 h-10",
            )}
          >
            {isEducationalPage ? "Analisar minha captação" : "Agendar diagnóstico"}
          </Link>
        </div>

        {/* Mobile Navigation */}
        {!isEducationalPage && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 hover:bg-accent/10"
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
                  return (
                    <Link
                      key={item.href}
                      href={
                        isEducationalPage && item.href.startsWith("#")
                          ? item.href
                          : item.href
                      }
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center gap-4 rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-white/5",
                        pathname === item.href
                          ? "text-emerald-400 bg-white/[0.03]"
                          : "text-white/60 hover:text-white",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/5 transition-colors group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10",
                          pathname === item.href &&
                            "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
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
                href={isEducationalPage ? "#contato" : "/diagnostico"}
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
                    className="flex items-center gap-3 text-xs text-white/40 hover:text-emerald-400 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    contato@updo.com.br
                  </a>
                  <a
                    href="tel:+5541987112003"
                    className="flex items-center gap-3 text-xs text-white/40 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    (41) 98711-2003
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
          </Sheet>
        )}
        {isEducationalPage && (
          <Link
            href="#contato"
            className={cn(
              buttonVariants({ variant: "default" }),
              "md:hidden h-10 rounded-full px-4 text-xs font-bold",
            )}
          >
            Diagnóstico
          </Link>
        )}
      </div>
    </header>
  );
}
