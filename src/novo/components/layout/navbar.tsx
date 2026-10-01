'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { ArrowDownIcon } from '@/novo/components/shared/icons';
import ButtonPrimaryV2 from '@/novo/components/shared/ui/button/button-primary-v2';
import { menuPrincipal, servicos, setores, type NavLink } from '@/novo/data/navegacao';
import { useNavbarScroll } from '@/novo/hooks/useScrollHeader';
import { cn } from '@/novo/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const isExternal = (href: string) => href.startsWith('http');

const MegaColumn = ({ title, links }: { title: string; links: NavLink[] }) => (
  <div>
    <p className="text-tagline-3 text-secondary/50 mb-3 px-3 font-medium">{title}</p>
    <ul className="grid grid-cols-2 gap-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="hover:bg-background-3 block rounded-xl px-3 py-2.5 transition-colors"
          >
            <span className="text-tagline-1 text-secondary block font-medium">{link.title}</span>
            {link.description && (
              <span className="text-tagline-3 text-secondary/55 mt-0.5 line-clamp-1 block">
                {link.description}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const { isScrolled } = useNavbarScroll(100);

  return (
    <header onMouseLeave={() => setMegaOpen(false)}>
      <div
        className={cn(
          'lp:max-w-[1290px]! fixed left-1/2 z-50 mx-auto w-full max-w-[calc(100%-32px)] -translate-x-1/2 transition-all duration-500 ease-in-out sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled ? 'top-2' : 'top-5'
        )}
      >
        <RevealAnimation direction="up" offset={100} instant>
          <div className="shadow-2 relative flex w-full items-center justify-between rounded-full bg-white px-2.5 py-2.5 xl:py-0">
            <Link href="/" className="pl-3">
              <span className="sr-only">UPDO, página inicial</span>
              <Image
                src="/Imagens/Agencia-UPDO.svg"
                alt="UPDO"
                width={250}
                height={90}
                priority
                className="h-9 w-auto"
              />
            </Link>

            <nav className="hidden items-center xl:flex" aria-label="Principal">
              <ul className="flex items-center">
                <li className="relative py-2.5" onMouseEnter={() => setMegaOpen(true)}>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    onClick={() => setMegaOpen((open) => !open)}
                    className="text-tagline-1 text-secondary/70 hover:border-stroke-2 hover:text-secondary flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 transition-all duration-200"
                  >
                    Soluções
                    <ArrowDownIcon
                      className={cn(
                        'size-4 translate-y-px stroke-current stroke-[1.5] transition-transform duration-300',
                        megaOpen && 'rotate-180'
                      )}
                    />
                  </button>
                </li>
                {menuPrincipal.map((item) => (
                  <li key={item.href} className="py-2.5" onMouseEnter={() => setMegaOpen(false)}>
                    <Link
                      href={item.href}
                      target={isExternal(item.href) ? '_blank' : undefined}
                      rel={isExternal(item.href) ? 'noopener noreferrer' : undefined}
                      className="text-tagline-1 text-secondary/70 hover:border-stroke-2 hover:text-secondary flex items-center rounded-full border border-transparent px-4 py-2 transition-all duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden xl:flex">
              <Link href="/diagnostico" className="inline-flex shrink-0">
                <ButtonPrimaryV2 text="Agendar diagnóstico" />
              </Link>
            </div>

            <button
              type="button"
              className="bg-background-4 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full xl:hidden"
              onClick={() => window.dispatchEvent(new Event('mobile-menu:open'))}
              aria-label="Abrir menu"
            >
              <span className="bg-secondary block h-0.5 w-6" />
              <span className="bg-secondary block h-0.5 w-6" />
              <span className="bg-secondary block h-0.5 w-6" />
            </button>

            <div
              className={cn(
                'absolute top-full left-0 hidden w-full pt-3 transition-all duration-300 xl:block',
                megaOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              )}
            >
              <div className="shadow-3 border-stroke-4 grid grid-cols-2 gap-8 rounded-3xl border bg-white p-6">
                <MegaColumn title="Serviços" links={servicos} />
                <MegaColumn title="Setores" links={setores} />
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </header>
  );
};

export default Navbar;
