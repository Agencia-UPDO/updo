import RevealAnimation from '@/novo/components/animation/reveal-animation';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { rodapeColunas } from '@/novo/data/navegacao';
import { selosParceiros as selos } from '@/novo/data/home';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

const sociais = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { label: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { label: 'YouTube', href: siteConfig.social.youtube, icon: Youtube },
];

const Footer = () => {
  const telefone = siteConfig.contact.phone;

  return (
    <footer className="bg-secondary relative overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-14 pt-24 pb-14 lg:gap-x-10">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-4">
              <Image
                src="/Imagens/Logo UPDO 2024 Branca.svg"
                alt="UPDO"
                width={160}
                height={58}
                className="h-11 w-auto"
              />
              <p className="text-tagline-1 mt-6 max-w-[340px] text-white/60">
                Estruturamos marketing, vendas, CRM e dados para empresas que querem crescer
                com previsibilidade. Curitiba, atendendo todo o Brasil.
              </p>

              <ul className="text-tagline-1 mt-8 space-y-2 text-white/80">
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="footer-link">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="footer-link">
                    {telefone}
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-3">
                {sociais.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center bg-primary-500 text-secondary hover:bg-lilas-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:text-white"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </RevealAnimation>

          <div className="col-span-12 grid grid-cols-12 gap-y-10 xl:col-span-8">
            {rodapeColunas.map((coluna, index) => (
              <RevealAnimation key={coluna.title} delay={(index + 2) / 10}>
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-tagline-1 mb-6 font-medium text-white">{coluna.title}</p>
                  <ul className="space-y-3.5">
                    {coluna.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          className="footer-link text-white/65!"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-y-8 border-t border-white/10 py-10">
          <div className="col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {siteConfig.addresses.map((endereco) => (
              <p key={endereco.label} className="text-tagline-2 text-white/55">
                <span className="block font-medium text-white/85">{endereco.label}</span>
                {endereco.street}
                <br />
                {endereco.city}
              </p>
            ))}
          </div>
          <div className="col-span-12 flex flex-wrap items-center gap-3 lg:col-span-6 lg:justify-end">
            {selos.map((selo) => (
              <span
                key={selo.src}
                className="flex h-14 items-center rounded-xl bg-white px-3"
              >
                <Image
                  src={selo.src}
                  alt={selo.alt}
                  width={120}
                  height={48}
                  className="h-9 w-auto object-contain"
                />
              </span>
            ))}
          </div>
        </div>

        <div className="text-tagline-2 flex flex-col gap-3 border-t border-white/10 py-8 text-white/45 md:flex-row md:items-center md:justify-between">
          <p className="text-tagline-2 text-white/45">
            © {new Date().getFullYear()} UPDO · CNPJ {siteConfig.cnpj}
          </p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-white">
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
