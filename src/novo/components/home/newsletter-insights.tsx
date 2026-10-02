'use client';

import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { CheckCircle2, Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';

const FORM_NAME = 'Newsletter Insights';

const campo =
  'text-tagline-1 h-16 w-full rounded-full border border-white/15 bg-white/5 px-6 text-white outline-none transition-colors placeholder:text-white/45 focus:border-primary-500';

const NewsletterInsights = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enviando) return;
    setEnviando(true);
    setErro('');

    const params = new URLSearchParams(window.location.search);
    const formData = {
      nome,
      email,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      companyWebsite: honeypot,
    };

    try {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'Lead', formName: FORM_NAME, location: 'home' });
    } catch {
      // Tracking nao pode bloquear o envio do lead para a RD.
    }

    try {
      const response = await fetch('/api/rd-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: FORM_NAME,
          pagePath: window.location.pathname,
          pageUrl: window.location.href,
          formData,
        }),
      });
      if (!response.ok) throw new Error('Falha ao enviar o formulario.');
      setEnviado(true);
    } catch {
      setErro('Não conseguimos enviar agora. Tente novamente em alguns segundos.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="bg-secondary relative overflow-hidden rounded-3xl p-7 md:p-10">
      <div className="bg-primary-500/15 pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-3xl" />
      <div className="relative grid grid-cols-12 items-center gap-y-8 lg:gap-x-10">
        <div className="col-span-12 space-y-3 lg:col-span-5">
          <span className="bg-primary-500 text-secondary flex size-11 items-center justify-center rounded-xl">
            <Mail className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h3 className="text-heading-5 font-normal text-white">
            Receba os artigos por <span className="whitespace-nowrap">e-mail</span>
          </h3>
          <p className="text-tagline-1 text-white/60">
            O que estamos aprendendo sobre marketing, vendas, CRM e IA, direto na sua caixa de
            entrada. Sem spam.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7">
          {enviado ? (
            <p className="text-tagline-1 flex items-center gap-3 text-white" role="status">
              <CheckCircle2 className="text-primary-500 size-6 shrink-0" aria-hidden="true" />
              Pronto! Você vai receber os próximos artigos no seu e-mail.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:flex-row">
              <label className="sr-only" htmlFor="newsletter-nome">
                Nome
              </label>
              <input
                id="newsletter-nome"
                type="text"
                required
                autoComplete="name"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={campo}
              />
              <label className="sr-only" htmlFor="newsletter-email">
                E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={campo}
              />
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />
              <ButtonPrimarySubmit
                text={enviando ? 'Enviando...' : 'Assinar'}
                disabled={enviando}
                className="shrink-0 border-white/15"
              />
            </form>
          )}
          {erro && <p className="text-tagline-2 mt-3 text-red-300">{erro}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsletterInsights;
