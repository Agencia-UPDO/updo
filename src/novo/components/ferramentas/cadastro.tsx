'use client';

import { siteConfig } from '@/config/site';
import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { Lock } from 'lucide-react';
import { type FormEvent, useState } from 'react';

// Cadastro das ferramentas gratuitas: quem se cadastra numa ferramenta não precisa se cadastrar de novo nas outras (mesmo navegador)
const CHAVE = 'updo-ferramentas-cadastro';
// Chave antiga, da primeira versão da calculadora de CAC
const CHAVE_ANTIGA = 'updo-calculadora-cac';

// enviadas: ferramentas cuja conversão já foi para a RD (cada uma vai uma vez por pessoa)
export type Cadastro = { nome?: string; email?: string; telefone?: string; enviadas?: string[] };

export function lerCadastro(): Cadastro {
  try {
    return JSON.parse(localStorage.getItem(CHAVE) ?? localStorage.getItem(CHAVE_ANTIGA) ?? '{}');
  } catch {
    return {};
  }
}

export function salvarCadastro(c: Cadastro) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify({ ...lerCadastro(), ...c, em: new Date().toISOString() }));
  } catch {
    // Sem localStorage: libera só nesta visita
  }
}

// Já cadastrado neste navegador, ou ?ver=1 no ambiente de desenvolvimento (para testar sem cadastrar)
export function jaLiberado() {
  try {
    if (process.env.NODE_ENV !== 'production' && new URLSearchParams(window.location.search).has('ver')) return true;
    return Boolean(lerCadastro().email);
  } catch {
    return false;
  }
}

const utms = () => {
  const q = new URLSearchParams(window.location.search);
  return Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].map((k) => [k, q.get(k) || '']));
};

function marcarLead(formName: string, local: string, formData?: Record<string, unknown>) {
  try {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: 'Lead', formName, location: local, formData });
  } catch {
    // Tracking não pode bloquear o envio
  }
}

// Conversão na RD Station pela mesma rota dos formulários do site
export async function enviarConversao(formName: string, pagePath: string, formData: Record<string, unknown>) {
  const res = await fetch('/api/rd-conversion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formName, pagePath, pageUrl: window.location.href, formData: { ...formData, ...utms() } }),
  });
  return res.ok;
}

// Marca a ferramenta como já enviada para a RD (o cadastro dela, ou o envio automático abaixo)
export function marcarEnviada(formName: string) {
  const c = lerCadastro();
  salvarCadastro({ enviadas: [...new Set([...(c.enviadas ?? []), formName])] });
}

// Quem já se cadastrou em outra ferramenta não preenche de novo: ao ver o resultado desta, a conversão dela vai sozinha
// para a RD com os dados salvos, uma vez só por ferramenta (assim a RD mostra todas as ferramentas que cada lead usou)
export function avisarFerramenta(formName: string, pagePath: string, formData: Record<string, unknown>) {
  const quem = lerCadastro();
  if (!quem.email || quem.enviadas?.includes(formName)) return;
  marcarEnviada(formName);
  enviarConversao(formName, pagePath, { nome: quem.nome ?? '', email: quem.email, telefone: quem.telefone ?? '', ...formData }).catch(() => {});
}

// "Quero ajuda no meu marketing": WhatsApp da UPDO com o resumo e, para quem tem cadastro, conversão na RD
export function pedirAjuda({ formName, pagePath, linhas, resumo }: { formName: string; pagePath: string; linhas: string[]; resumo: string }) {
  window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(linhas.join('\n'))}`, '_blank', 'noopener');
  marcarLead(formName, pagePath.split('/').pop() ?? pagePath);
  const quem = lerCadastro();
  if (quem.email) enviarConversao(formName, pagePath, { nome: quem.nome ?? '', email: quem.email, mainPain: resumo }).catch(() => {});
}

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3 outline-none transition-colors';

// Formulário que libera o resultado (nome, e-mail e WhatsApp) e vira conversão na RD
export function CadastroFerramenta({ formName, pagePath, extras, onLiberar }: { formName: string; pagePath: string; extras: () => Record<string, string>; onLiberar: () => void }) {
  const [dados, setDados] = useState({ nome: '', email: '', telefone: '' });
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  const enviar = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const honeypot = String(new FormData(ev.currentTarget).get('companyWebsite') || '').trim();
    if (honeypot) return onLiberar();
    setEnviando(true);
    setErro('');
    const formData = { ...dados, ...extras(), companyWebsite: honeypot };
    marcarLead(formName, pagePath.split('/').pop() ?? pagePath, formData);
    try {
      if (!(await enviarConversao(formName, pagePath, formData))) throw new Error();
      salvarCadastro({ nome: dados.nome, email: dados.email, telefone: dados.telefone });
      marcarEnviada(formName);
      onLiberar();
    } catch {
      setErro('Não conseguimos enviar agora. Tente novamente em alguns segundos.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={enviar} className="border-stroke-3 relative w-full space-y-4 rounded-3xl border bg-white p-6 shadow-[0_30px_80px_-30px_rgba(7,17,31,0.45)] md:p-7">
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>
      <span className="bg-lilas-50 text-lilas-700 flex size-11 items-center justify-center rounded-2xl">
        <Lock className="size-5" />
      </span>
      <div>
        <p className="font-titulo text-heading-6 text-secondary font-medium">Seu resultado está pronto</p>
        <p className="text-tagline-2 mt-1">Informe seus dados para ver o diagnóstico completo. Depois você pode voltar e mudar qualquer número.</p>
      </div>
      <input required placeholder="Seu nome" autoComplete="name" value={dados.nome} onChange={(ev) => setDados((d) => ({ ...d, nome: ev.target.value }))} className={inputClass} aria-label="Nome" />
      <input required type="email" placeholder="voce@empresa.com.br" autoComplete="email" value={dados.email} onChange={(ev) => setDados((d) => ({ ...d, email: ev.target.value }))} className={inputClass} aria-label="E-mail" />
      <input
        required
        type="tel"
        placeholder="WhatsApp com DDD"
        autoComplete="tel"
        pattern="[\d\s()+-]{10,}"
        title="Informe o WhatsApp com DDD"
        value={dados.telefone}
        onChange={(ev) => setDados((d) => ({ ...d, telefone: ev.target.value }))}
        className={inputClass}
        aria-label="WhatsApp"
      />
      {erro && <p className="text-tagline-2 text-red-600">{erro}</p>}
      <ButtonPrimarySubmit disabled={enviando} text={enviando ? 'Enviando…' : 'Ver meu resultado'} className="h-14 w-full cursor-pointer disabled:opacity-60 [&>span]:w-full" />
      <p className="text-tagline-3 text-secondary/55">
        Ao enviar, você concorda com a nossa{' '}
        <a href="/politica-de-privacidade" className="underline">
          Política de Privacidade
        </a>
        . Sem spam.
      </p>
    </form>
  );
}
