'use client';

import ButtonPrimarySubmit from '@/novo/components/shared/ui/button/button-primary-submit';
import { CheckCircleIcon } from '@/novo/components/shared/icons';
import { useState, type FormEvent } from 'react';

export interface LeadFormSelect {
  id: string;
  label: string;
  options: string[];
}

interface LeadFormProps {
  formName: string;
  service: string;
  pagePath: string;
  selects: LeadFormSelect[];
  submitText?: string;
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
}: LeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
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
        <p className="text-heading-5 text-secondary">Formulário enviado com sucesso.</p>
        <p className="max-w-[420px]">
          Recebemos suas informações e vamos analisar o cenário para retornar com um direcionamento
          inicial.
        </p>
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

      {submitError && <p className="text-tagline-2 text-red-600">{submitError}</p>}

      <ButtonPrimarySubmit
        text={isSubmitting ? 'Enviando...' : submitText}
        disabled={isSubmitting}
        className="w-full md:w-auto"
      />
    </form>
  );
};

export default LeadForm;
