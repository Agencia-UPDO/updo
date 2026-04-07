import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-[#0A1120] pt-24 pb-12 text-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center gap-12">
          {/* Logo Centralizado */}
          <Link href="/" className="mb-4">
            <Image
              src="/Imagens/Logo UPDO 2024 Branca.svg"
              alt="UPDO Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Slogan e Contato */}
          <div className="max-w-md space-y-6">
            <p className="text-sm text-white/40 leading-relaxed font-medium">
              Especialistas em neuromarketing e inteligência de dados para captação de alunos. Elevando o padrão de resultados no mercado educacional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Fale Conosco</p>
                <a href="mailto:contato@updo.com.br" className="text-base text-white/60 hover:text-emerald-400 transition-all font-medium">contato@updo.com.br</a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">WhatsApp Oficial</p>
                <a href="tel:+5541987112003" className="text-lg text-white/60 hover:text-emerald-400 transition-all font-black tracking-tight">(41) 98711-2003</a>
              </div>
            </div>

            {/* Endereços */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-6">
              <div className="space-y-1 max-w-[240px]">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Unidade Batel I</p>
                <p className="text-[11px] text-white/40 leading-relaxed">Rua Francisco Rocha, 198 • Batel<br/>Curitiba / PR</p>
              </div>
              <div className="space-y-1 max-w-[240px]">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Unidade Batel II</p>
                <p className="text-[11px] text-white/40 leading-relaxed">Al. Presidente Taunay, 130 • Batel<br/>Curitiba / PR</p>
              </div>
            </div>
          </div>

          {/* Grid de Certificações Centralizado */}
          <div className="w-full max-w-4xl pt-16 border-t border-white/5">
            <h3 className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Certificações de Performance</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
              <a href="https://marketplace.rdstation.com/parceiro/agencia-updo/" target="_blank" rel="noopener noreferrer">
                <Image src="/Imagens/logo-rd-gold-UPDO-2025.png" alt="RD Station Gold" width={120} height={45} className="h-9 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </a>
              <a href="https://www.google.com/partners/agency?id=9809168976" target="_blank" rel="noopener noreferrer">
                <Image src="/Imagens/Google-Partner-UPDO.png" alt="Google Partner" width={120} height={45} className="h-9 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </a>
              <a href="https://www.google.com/partners/agency?id=9809168976" target="_blank" rel="noopener noreferrer">
                <Image src="/Imagens/Google-Search-UPDO.png" alt="Google Search Certified" width={120} height={45} className="h-9 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </a>
              <Image src="/Imagens/meta-ads-partner.webp" alt="Meta Ads Partner" width={120} height={45} className="h-9 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              <a href="https://advertising.amazon.com/partners/directory/details/amzn1.ads1.ma1.7aaj1wwfi8l8vb0xldp0lng5z" target="_blank" rel="noopener noreferrer">
                <Image src="/Imagens/Parceiro-oficial-Amazon-ADS-UPDO.png" alt="Amazon Ads Official" width={120} height={45} className="h-9 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </a>
              <a href="https://marketplace.rdstation.com/parceiro/agencia-updo/" target="_blank" rel="noopener noreferrer">
                <Image src="/Imagens/Certificado-Parceiro-RD-Conversas-UPDO-e1749235307557.png" alt="RD Station Conversas" width={120} height={45} className="h-9 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </a>
            </div>
          </div>

          {/* Copyright Final */}
          <div className="mt-12 flex flex-col items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Performance Agency Certified</span>
             </div>
             <p className="text-[10px] font-medium text-white/10 tracking-widest">
                © {currentYear} UPDO. TODOS OS DIREITOS RESERVADOS.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
