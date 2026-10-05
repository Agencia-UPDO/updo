'use client';

import { siteConfig } from '@/config/site';
import { CloseIcon } from '@/novo/components/shared/icons';
import { casesMenu, empresaMenu, servicos, setores, type NavLink } from '@/novo/data/navegacao';
import { useMediaQuery } from '@/novo/hooks/useMediaQuery';
import { cn } from '@/novo/utils/cn';
import { ArrowUpRight, ChevronDown, House } from 'lucide-react';
import WhatsAppIcon from '@/novo/components/shared/whatsapp-icon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type GrupoId = 'servicos' | 'setores' | 'cases' | 'empresa';

const grupos: { id: GrupoId; titulo: string; links: NavLink[]; tone: 'menta' | 'lilas' }[] = [
  { id: 'servicos', titulo: 'Serviços', links: servicos, tone: 'menta' },
  { id: 'setores', titulo: 'Setores', links: setores, tone: 'lilas' },
  { id: 'cases', titulo: 'Cases', links: casesMenu, tone: 'menta' },
  { id: 'empresa', titulo: 'Sobre', links: empresaMenu, tone: 'lilas' },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [grupoAberto, setGrupoAberto] = useState<GrupoId | null>(null);
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const pathname = usePathname();

  useEffect(() => {
    // Abre já o grupo da página atual.
    const onOpen = () => {
      const atual = grupos.find((grupo) =>
        grupo.links.some((link) => link.href === window.location.pathname)
      );
      setGrupoAberto(atual?.id ?? null);
      setIsOpen(true);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('mobile-menu:open', onOpen);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('mobile-menu:open', onOpen);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const aberto = isOpen && !isDesktop;

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    document.body.classList.toggle('menu-aberto', aberto);
  }, [aberto]);

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label="Fechar menu"
        tabIndex={-1}
        onClick={close}
        className={cn(
          'bg-secondary/40 fixed inset-0 z-60 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden',
          aberto ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      <aside
        aria-hidden={!aberto}
        className={cn(
          'bg-secondary isolate fixed top-0 right-0 z-70 flex h-dvh overflow-hidden w-full flex-col shadow-xl transition-transform duration-500 ease-in-out md:w-[min(100vw,26rem)] xl:hidden',
          aberto ? 'visible translate-x-0' : 'invisible translate-x-full'
        )}
      >
        {/* Fundo: textura de pontos discreta no topo */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,255,255,0.09)_1px,transparent_1.5px)] bg-size-[22px_22px] mask-[linear-gradient(to_bottom,#000,transparent_45%)]"
          aria-hidden="true"
        />

        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <Link href="/" onClick={close}>
            <span className="sr-only">UPDO, página inicial</span>
            <Image
              src="/Imagens/Logo UPDO 2024 Branca.svg"
              alt="UPDO"
              width={250}
              height={90}
              className="h-8 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={close}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white"
          >
            <CloseIcon className="size-5 stroke-current" />
          </button>
        </div>

        <nav
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain px-4 py-3"
          aria-label="Menu"
        >
          <Link
            href="/"
            onClick={close}
            className={cn(
              'font-titulo text-heading-6 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4 font-medium text-white',
              pathname === '/' && 'border-primary-500/60'
            )}
          >
            Home
            <House className="size-5 text-white/40" strokeWidth={1.75} aria-hidden="true" />
          </Link>

          {grupos.map((grupo) => {
            const expandido = grupoAberto === grupo.id;
            return (
              <div key={grupo.id} className="rounded-2xl border border-white/8 bg-white/[0.04]">
                <button
                  type="button"
                  aria-expanded={expandido}
                  onClick={() => setGrupoAberto(expandido ? null : grupo.id)}
                  className="font-titulo text-heading-6 flex w-full cursor-pointer text-white items-center justify-between px-5 py-4 text-left font-medium"
                >
                  {grupo.titulo}
                  <span
                    className={cn(
                      'flex size-8 items-center justify-center rounded-full transition-colors duration-300',
                      expandido ? 'bg-primary-500 text-secondary' : 'bg-white/10 text-white'
                    )}
                  >
                    <ChevronDown
                      className={cn('size-4 transition-transform duration-300', expandido && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    expandido ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <ul className="min-h-0 overflow-hidden px-2">
                    {grupo.links.map((link, index) => {
                      const externo = link.href.startsWith('http');
                      const ativo = pathname === link.href;
                      return (
                        <li key={link.href} className={cn(index === grupo.links.length - 1 && 'pb-2')}>
                          <Link
                            href={link.href}
                            onClick={close}
                            target={externo ? '_blank' : undefined}
                            tabIndex={expandido ? undefined : -1}
                            className={cn(
                              'flex items-center gap-3 rounded-xl px-3 py-2.5',
                              ativo ? 'bg-white/10' : 'active:bg-white/10'
                            )}
                          >
                            {link.icon && (
                              <span
                                className={cn(
                                  'flex size-9 shrink-0 items-center justify-center rounded-lg',
                                  'text-primary-500 bg-white/8'
                                )}
                              >
                                <link.icon className="size-4.5" strokeWidth={1.75} aria-hidden="true" />
                              </span>
                            )}
                            <span className="min-w-0">
                              <span className="text-tagline-1 block font-medium text-white">
                                {link.title}
                              </span>
                              {link.description && (
                                <span className="text-tagline-3 block truncate text-white/50">
                                  {link.description}
                                </span>
                              )}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          <a
            href="https://insights.updo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="font-titulo text-heading-6 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4 font-medium text-white"
          >
            Insights
            <ArrowUpRight className="size-5 text-white/40" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </nav>

        <div className="space-y-2.5 border-t border-white/10 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Link
            href="/diagnostico"
            onClick={close}
            className="bg-primary-500 text-secondary text-tagline-1 flex h-13 items-center justify-center rounded-full font-medium"
          >
            Agendar diagnóstico gratuito
          </Link>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="text-secondary text-tagline-1 flex h-13 items-center justify-center gap-2 rounded-full bg-white font-medium"
          >
            <WhatsAppIcon className="size-5" />
            Falar no WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
