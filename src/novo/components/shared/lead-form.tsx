'use client';

import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import WhatsAppIcon from '@/novo/components/shared/whatsapp-icon';
import { CheckCircleIcon } from '@/novo/components/shared/icons';
import { useState, type FormEvent } from 'react';

export interface LeadFormSelect {
  id: string;
  label: string;
  options: string[];
  /** Nome curto usado na mensagem de WhatsApp. */
  curto?: string;
}

interface LeadFormProps {
  formName: string;
  service: string;
  pagePath: string;
  selects: LeadFormSelect[];
  submitText?: string;
  /** Campos fixos enviados junto com o lead, como o setor da página. */
  extraFields?: Record<string, string>;
  /** Frase exibida acima do botão de envio. */
  nota?: string;
  /** Texto de confirmação depois do envio. */
  sucesso?: string;
  /** Mostra o botão de WhatsApp depois do envio, com os dados preenchidos. */
  whatsapp?: { numero: string; intro: string; fim: string };
}

const inputClass =
  'border-stroke-3 text-tagline-1 text-secondary placeholder:text-secondary/40 focus:border-secondary w-full rounded-xl border bg-white px-4 py-3.5 outline-none transition-colors';

const labelClass = 'text-tagline-2 text-secondary mb-2 block font-medium';

const formatPhone = (value: string) => {
  const digits = value.replace(/[^\d]/g, '');
  if (digits.length < 3) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const LeadForm = ({
  formName,
  service,
  pagePath,
  selects,
  submitText = 'Enviar',
  extraFields,
  nota,
  sucesso,
  whatsapp,
}: LeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [formData, setFormData] = useState({ nome: '', empresa: '', email: '', telefone: '' });
  const [selected, setSelected] = useState<Record<string, string>>(
    Object.fromEntries(selects.map((select) => [select.id, '']))
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const honeypot = String(new FormData(event.currentTarget).get('companyWebsite') || '').trim();

    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const searchParams = new URLSearchParams(window.location.search);
    const payloadFormData = {
      ...formData,
      ...selected,
      ...extraFields,
      service,
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
      utm_content: searchParams.get('utm_content') || '',
      utm_term: searchParams.get('utm_term') || '',
      companyWebsite: honeypot,
    };

    try {
      const w = window as Window & { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'Lead',
        formName,
        location: pagePath.replace(/^\//, ''),
        formData: payloadFormData,
      });
    } catch {
      // Tracking nao pode bloquear o envio do lead para a RD.
    }

    if (whatsapp) {
      const linhas = [
        whatsapp.intro,
        `*Nome:* ${formData.nome}`,
        `*Empresa:* ${formData.empresa}`,
        `*E-mail:* ${formData.email}`,
        `*Telefone:* ${formData.telefone}`,
        ...selects.map((select) => `*${select.curto ?? select.label}:* ${selected[select.id]}`),
        whatsapp.fim,
      ];
      setWhatsAppUrl(`https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(linhas.join('\n'))}`);
    }

    try {
      const response = await fetch('/api/rd-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName,
          pagePath,
          pageUrl: window.location.href,
          formData: payloadFormData,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar o formulario.');
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError('Não conseguimos enviar agora. Tente novamente em alguns segundos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center">
        <CheckCircleIcon className="size-12" />
        <p className="font-titulo font-medium text-heading-5 text-secondary">Formulário enviado com sucesso.</p>
        <p className="max-w-[420px]">
          {sucesso ??
            'Recebemos suas informações e vamos analisar o cenário para retornar com um direcionamento inicial.'}
        </p>
        {whatsAppUrl && (
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-500 text-secondary text-tagline-1 mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon color="currentColor" className="size-5" />
            Falar agora pelo WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5 rounded-3xl bg-white p-6 md:p-9">
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${pagePath}-companyWebsite`}>Site da empresa</label>
        <input
          id={`${pagePath}-companyWebsite`}
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome
          </label>
          <input
            id="nome"
            required
            placeholder="Seu nome"
            value={formData.nome}
            onChange={(event) => setFormData((prev) => ({ ...prev, nome: event.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            id="empresa"
            required
            placeholder="Nome da empresa"
            value={formData.empresa}
            onChange={(event) => setFormData((prev) => ({ ...prev, empresa: event.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="voce@empresa.com.br"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telefone" className={labelClass}>
            Telefone
          </label>
          <input
            id="telefone"
            type="tel"
            required
            maxLength={15}
            placeholder="(41) 99999-9999"
            value={formData.telefone}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, telefone: formatPhone(event.target.value) }))
            }
            className={inputClass}
          />
        </div>

        {selects.map((select) => (
          <div key={select.id}>
            <label htmlFor={select.id} className={labelClass}>
              {select.label}
            </label>
            <select
              id={select.id}
              required
              value={selected[select.id]}
              onChange={(event) =>
                setSelected((prev) => ({ ...prev, [select.id]: event.target.value }))
              }
              className={`${inputClass} cursor-pointer appearance-none`}
            >
              <option value="" disabled>
                Selecione
              </option>
              {select.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {nota && <p className="text-tagline-2 text-secondary/60 border-stroke-3 border-t pt-5">{nota}</p>}

      {submitError && <p className="text-tagline-2 text-red-600">{submitError}</p>}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <ButtonPrimarySubmit
          text={isSubmitting ? 'Enviando...' : submitText}
          disabled={isSubmitting}
          className="max-md:text-tagline-2 h-auto min-h-16 w-full md:w-auto max-md:[&_[data-button-lower-text]]:hidden"
        />
        <ul className="text-tagline-3 text-secondary/55 flex flex-wrap gap-x-4 gap-y-1.5">
          {['Sem spam', 'Resposta em até 1 dia útil', 'Dados usados só no diagnóstico'].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="bg-primary-500 size-1.5 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default LeadForm;
