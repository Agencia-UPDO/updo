import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Imagens/Agência UPDO.svg"
                alt={siteConfig.name}
                width={360}
                height={120}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="max-w-[300px] text-sm text-muted-foreground leading-relaxed">
              Elevando negócios através de diagnósticos estratégicos e soluções
              personalizadas em marketing e vendas.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <span className="font-semibold text-primary">E-mail:</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Navegação
            </h3>
            <nav className="flex flex-col gap-3 text-sm">
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Institutional (Example) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Institucional
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/cookies"
                className="hover:text-primary transition-colors"
              >
                Cookies
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Siga-nos
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                Twitter/X
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Design by{" "}
              <span className="font-medium text-foreground">UI UX Pro Max</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
