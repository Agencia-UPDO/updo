"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Imagens/Agência UPDO.svg"
            alt={siteConfig.name}
            width={360}
            height={120}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {siteConfig.mainNav.map((item) => (
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
          <Button
            variant="default"
            className="rounded-full px-6 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Agendar diagnóstico
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle de Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-6 pt-12">
            <SheetTitle className="text-left">{siteConfig.name}</SheetTitle>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                className="mt-4 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Agendar diagnóstico
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
