'use client';

import RevealAnimation from '@/novo/components/animation/reveal-animation';
import IconChip, { type IconChipTone } from '@/novo/components/shared/icon-chip';
import { ArrowDownIcon, ArrowRightIcon } from '@/novo/components/shared/icons';
import ButtonPrimaryV2 from '@/novo/components/shared/ui/button/button-primary-v2';
import { casesMenu, empresaMenu, servicos, setores, type NavLink } from '@/novo/data/navegacao';
import { useNavbarScroll } from '@/novo/hooks/useScrollHeader';
import { cn } from '@/novo/utils/cn';
import { CheckCircle2, Funnel } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';

type MenuId = 'servicos' | 'setores' | 'cases' | 'empresa';

const ListaMenu = ({
  links,
  tone,
  colunas = 2,
}: {
  links: NavLink[];
  tone: IconChipTone;
  colunas?: 1 | 2;
}) => (
  <ul className={cn('grid gap-1', colunas === 2 && 'grid-cols-2')}>
    {links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="hover:bg-background-3 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors"
        >
          {link.icon && <IconChip icon={link.icon} tone={tone} size="sm" />}
          <span className="min-w-0">
            <span className="text-tagline-1 text-secondary block font-medium">{link.title}</span>
            {link.description && (
              <span className="text-tagline-3 text-secondary/55 mt-0.5 line-clamp-1 block">
                {link.description}
              </span>
            )}
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

const CardDestaque = ({
  href,
  imagem,
  imagemAlt,
  imagemPosicao = 'object-[center_25%]',
  rotulo,
  titulo,
  texto,
  cta,
}: {
  href: string;
  imagem?: string;
  imagemAlt?: string;
  imagemPosicao?: string;
  rotulo: string;
  titulo: string;
  texto: string;
  cta: string;
}) => (
  <Link href={href} className="group bg-secondary flex flex-col overflow-hidden rounded-2xl">
    {imagem ? (
      <span className="relative block h-32 overflow-hidden">
        <Image
          src={imagem}
          alt={imagemAlt ?? ''}
          fill
          sizes="300px"
          className={cn(
            'object-cover transition-transform duration-700 group-hover:scale-105',
            imagemPosicao
          )}
        />
      </span>
    ) : (
      <span className="bg-primary-500 relative flex h-32 items-center justify-between overflow-hidden px-5">
        <span className="space-y-1.5">
          {['Funil', 'Canais', 'Comercial'].map((item) => (
            <span
              key={item}
              className="text-tagline-3 text-secondary flex items-center gap-1.5 font-medium"
            >
              <CheckCircle2 className="size-3.5" strokeWidth={2} aria-hidden="true" />
              {item}
            </span>
          ))}
        </span>
        <span className="bg-secondary text-primary-500 flex size-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6">
          <Funnel className="size-8" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </span>
    )}
    <span className="flex flex-1 flex-col gap-1.5 p-5">
      <span className="text-tagline-3 text-primary-500 font-medium">{rotulo}</span>
      <span className="font-titulo text-tagline-1 font-medium text-white">{titulo}</span>
      <span className="text-tagline-3 text-white/60">{texto}</span>
      <span className="text-tagline-3 text-primary-500 mt-2 flex items-center gap-1.5 font-medium">
        {cta}
        <ArrowRightIcon className="size-3.5 stroke-current transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </span>
  </Link>
);

const Painel = ({
  aberto,
  children,
  className,
}: {
  aberto: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'absolute top-full left-0 hidden w-full pt-3 transition-all duration-300 xl:block',
      className,
      aberto
        ? 'pointer-events-auto translate-y-0 opacity-100'
        : 'pointer-events-none invisible -translate-y-2 opacity-0'
    )}
  >
    <div className="shadow-3 border-stroke-4 rounded-3xl border bg-white p-5">{children}</div>
  </div>
);

const itensMenu: { id: MenuId; titulo: string }[] = [
  { id: 'servicos', titulo: 'Serviços' },
  { id: 'setores', titulo: 'Setores' },
  { id: 'cases', titulo: 'Cases' },
  { id: 'empresa', titulo: 'Sobre' },
];

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState<MenuId | null>(null);
  const { isScrolled } = useNavbarScroll(100);

  const casoDestaque = casesMenu[1];

  return (
    <header onMouseLeave={() => setMenuAberto(null)}>
      <div
        className={cn(
          'lp:max-w-[1290px]! fixed left-1/2 z-50 mx-auto w-full max-w-[calc(100%-32px)] -translate-x-1/2 transition-all duration-500 ease-in-out sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled ? 'top-2' : 'top-5'
        )}
      >
        <RevealAnimation direction="up" offset={100} instant>
          <div className="shadow-2 relative flex w-full items-center justify-between rounded-full bg-white px-2.5 py-2.5 xl:py-0">
            <Link href="/" className="pl-3" onMouseEnter={() => setMenuAberto(null)}>
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
                <li className="py-2.5" onMouseEnter={() => setMenuAberto(null)}>
                  <Link
                    href="/"
                    className="text-tagline-1 text-secondary/70 hover:border-stroke-2 hover:text-secondary flex items-center rounded-full border border-transparent px-4 py-2 transition-all duration-200"
                  >
                    Início
                  </Link>
                </li>
                {itensMenu.map((item) => (
                  <li
                    key={item.id}
                    className="py-2.5"
                    onMouseEnter={() => setMenuAberto(item.id)}
                  >
                    <button
                      type="button"
                      aria-expanded={menuAberto === item.id}
                      onClick={() => setMenuAberto((atual) => (atual === item.id ? null : item.id))}
                      className={cn(
                        'text-tagline-1 hover:text-secondary flex cursor-pointer items-center gap-1 rounded-full border px-4 py-2 transition-all duration-200',
                        menuAberto === item.id
                          ? 'border-stroke-2 text-secondary'
                          : 'text-secondary/70 border-transparent'
                      )}
                    >
                      {item.titulo}
                      <ArrowDownIcon
                        className={cn(
                          'size-4 translate-y-px stroke-current stroke-[1.5] transition-transform duration-300',
                          menuAberto === item.id && 'rotate-180'
                        )}
                      />
                    </button>
                  </li>
                ))}
                <li className="py-2.5" onMouseEnter={() => setMenuAberto(null)}>
                  <a
                    href="https://insights.updo.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tagline-1 text-secondary/70 hover:border-stroke-2 hover:text-secondary flex items-center rounded-full border border-transparent px-4 py-2 transition-all duration-200"
                  >
                    Insights
                  </a>
                </li>
              </ul>
            </nav>

            <div className="hidden xl:flex" onMouseEnter={() => setMenuAberto(null)}>
              <Link href="/diagnostico" className="inline-flex shrink-0">
                <ButtonPrimaryV2 text="Agendar diagnóstico" />
              </Link>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="/diagnostico"
                className="bg-primary-500 text-secondary text-tagline-2 hidden h-11 items-center rounded-full px-4 font-medium min-[360px]:inline-flex"
              >
                Diagnóstico
              </Link>
              <button
                type="button"
                className="bg-secondary flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full"
                onClick={() => window.dispatchEvent(new Event('mobile-menu:open'))}
                aria-label="Abrir menu"
              >
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-3.5 translate-x-[3px] rounded-full bg-white" />
              </button>
            </div>

            <Painel aberto={menuAberto === 'servicos'}>
              <div className="grid grid-cols-[1fr_280px] gap-5">
                <div>
                  <p className="text-tagline-3 text-secondary/50 mb-2 px-3 font-medium">
                    Do anúncio ao caixa
                  </p>
                  <ListaMenu links={servicos} tone="menta" />
                </div>
                <CardDestaque
                  href="/diagnostico"
                  rotulo="Gratuito"
                  titulo="Diagnóstico estratégico"
                  texto="45 minutos para mapear onde seu marketing e seu comercial perdem vendas."
                  cta="Agendar diagnóstico"
                />
              </div>
            </Painel>

            <Painel aberto={menuAberto === 'setores'}>
              <div className="grid grid-cols-[1fr_280px] gap-5">
                <div>
                  <p className="text-tagline-3 text-secondary/50 mb-2 px-3 font-medium">
                    Estratégias por mercado
                  </p>
                  <ListaMenu links={setores} tone="lilas" />
                </div>
                <Link
                  href={casoDestaque.href}
                  className="group bg-lilas-700 flex flex-col justify-between rounded-2xl p-5"
                >
                  <span className="flex items-center gap-2">
                    {casoDestaque.icon && (
                      <span className="text-primary-500 flex size-8 items-center justify-center rounded-lg bg-white/10">
                        <casoDestaque.icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    )}
                    <span className="text-tagline-3 font-medium text-white/80">
                      Case em destaque
                    </span>
                  </span>
                  <span className="mt-6 block">
                    <span className="text-tagline-2 block font-medium text-white/80">
                      {casoDestaque.title}
                    </span>
                    <span className="font-titulo text-heading-3 block font-medium text-white">
                      {casoDestaque.metrica}
                    </span>
                    <span className="text-tagline-2 mt-1 block text-white/75">
                      {casoDestaque.description}
                    </span>
                  </span>
                  <span className="text-tagline-3 text-primary-500 mt-6 flex items-center gap-1.5 font-medium">
                    Ver o case
                    <ArrowRightIcon className="size-3.5 stroke-current transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </Painel>

            <Painel aberto={menuAberto === 'cases'}>
              <div className="grid grid-cols-4 gap-3">
                {casesMenu.map((caso, index) => (
                  <Link
                    key={caso.href}
                    href={caso.href}
                    className={cn(
                      'group flex flex-col justify-between gap-6 rounded-2xl p-5 transition-colors',
                      index % 2 === 0
                        ? 'bg-lilas-50 hover:bg-lilas-100'
                        : 'bg-primary-50 hover:bg-primary-100'
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {caso.icon && (
                        <IconChip
                          icon={caso.icon}
                          tone={index % 2 === 0 ? 'lilas' : 'menta'}
                          size="sm"
                        />
                      )}
                      <span className="text-tagline-2 text-secondary font-medium">{caso.title}</span>
                    </span>
                    <span>
                      <span className="font-titulo text-heading-4 text-secondary block font-medium">
                        {caso.metrica}
                      </span>
                      <span className="text-tagline-3 text-secondary/60 block">
                        {caso.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/cases"
                className="text-tagline-2 text-secondary hover:text-lilas-700 mt-4 flex items-center justify-center gap-2 font-medium"
              >
                Ver todos os cases
                <ArrowRightIcon className="size-4 stroke-current" />
              </Link>
            </Painel>

            <Painel aberto={menuAberto === 'empresa'} className="left-[300px] w-[700px]">
              <div className="grid grid-cols-[1fr_280px] gap-5">
                <div>
                  <p className="text-tagline-3 text-secondary/50 mb-2 px-3 font-medium">
                    Conheça a UPDO
                  </p>
                  <ListaMenu links={empresaMenu} tone="lilas" colunas={1} />
                </div>
                <CardDestaque
                  href="/sobre"
                  imagem="/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg"
                  imagemAlt="Rodrigo Bueno, fundador da UPDO"
                  rotulo="Quem lidera"
                  titulo="Rodrigo Bueno"
                  texto="Fundador e estrategista, professor na PUCPR, UFPR e Universidade Positivo."
                  cta="Conhecer a história"
                />
              </div>
            </Painel>
          </div>
        </RevealAnimation>
      </div>
    </header>
  );
};

export default Navbar;
