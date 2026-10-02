'use client';

import { CloseIcon } from '@/novo/components/shared/icons';
import ButtonPrimary from '@/novo/components/shared/ui/button/button-primary';
import { casesMenu, empresaMenu, servicos, setores, type NavLink } from '@/novo/data/navegacao';
import { useMediaQuery } from '@/novo/hooks/useMediaQuery';
import { cn } from '@/novo/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    const onOpen = () => setIsOpen(true);
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
  }, [aberto]);

  const close = () => setIsOpen(false);

  const renderGroup = (title: string, links: NavLink[]) => (
    <div className="space-y-3">
      <p className="text-tagline-3 text-secondary/50 font-medium">{title}</p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={close}
              className="text-tagline-1 text-secondary flex items-center gap-2.5"
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.icon && <link.icon className="text-lilas-500 size-4.5 shrink-0" strokeWidth={1.75} />}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Fechar menu"
        tabIndex={-1}
        onClick={close}
        className={cn(
          'bg-secondary/40 fixed inset-0 z-60 transition-opacity duration-300 xl:hidden',
          aberto ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      <aside
        aria-hidden={!aberto}
        className={cn(
          'fixed top-0 right-0 z-70 flex h-dvh w-full flex-col bg-white shadow-xl transition-transform duration-500 ease-in-out md:w-[min(100vw,24rem)] xl:hidden',
          aberto ? 'visible translate-x-0' : 'invisible translate-x-full'
        )}
      >
        <div className="border-stroke-1 flex items-center justify-between border-b px-6 py-5">
          <Link href="/" onClick={close}>
            <span className="sr-only">UPDO, página inicial</span>
            <Image
              src="/Imagens/Agencia-UPDO.svg"
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
            className="text-secondary hover:bg-background-4 flex size-9 cursor-pointer items-center justify-center rounded-md"
          >
            <CloseIcon className="size-5 stroke-current" />
          </button>
        </div>

        <nav
          className="flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto overscroll-contain p-6"
          aria-label="Menu"
        >
          {renderGroup('Serviços', servicos)}
          {renderGroup('Setores', setores)}
          {renderGroup('Cases', casesMenu)}
          {renderGroup('A UPDO', [
            ...empresaMenu,
            { title: 'Insights', href: 'https://insights.updo.com.br' },
          ])}
        </nav>

        <div className="border-stroke-1 border-t p-6">
          <Link href="/diagnostico" onClick={close} className="block">
            <ButtonPrimary text="Agendar diagnóstico" className="w-full" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
