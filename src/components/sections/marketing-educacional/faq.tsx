"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Como poderei acompanhar o desempenho das campanhas?",
    answer:
      "Transparência é um dos nossos pilares. Além do acesso em tempo real ao Dashboard do seu Radar de Matrículas™, realizamos reuniões semanais de performance para alinhar métricas, ajustar rotas e garantir que a meta de captação esteja no caminho certo.",
  },
  {
    question: "A UPDO substitui o meu time de marketing ou agência atual?",
    answer:
      "Não necessariamente. Atuamos como uma camada de inteligência estratégica e alta performance. Podemos trabalhar em conjunto com seu time interno, fornecendo a engenharia de dados e o neuromarketing que muitas vezes as equipes generalistas não dominam.",
  },
  {
    question:
      "Quanto tempo leva para o sistema começar a gerar leads qualificados?",
    answer:
      "Nosso processo de on-boarding e setup leva, em média, de 10 a 15 dias. Após o 'go-live', é comum começarmos a ver os primeiros leads qualificados nas primeiras 48 a 72 horas de campanha ativa.",
  },
  {
    key: "faq-radar",
    question: "O Radar de Matrículas™ se integra ao meu CRM atual?",
    answer:
      "O Radar de Matrículas™ é um sistema próprio e exclusivo da UPDO, desenvolvido para funcionar de forma independente. Ele não depende da integração com o seu CRM para entregar o que propõe: um panorama estratégico e visual completo de todas as matrículas da sua instituição, permitindo uma tomada de decisão rápida que os CRMs convencionais não oferecem.",
  },
  {
    key: "faq-servicos",
    question:
      "Além da gestão de tráfego, quais outras entregas a UPDO realiza?",
    answer:
      "Nossa consultoria é 360º. Além da performance, entregamos o Treinamento de Neuromarketing para sua equipe comercial e o Desenvolvimento do Playbook de Vendas Educacional: um guia prático e replicável que padroniza o seu processo de matrículas para garantir escala.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-18 lg:py-28"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Dúvidas Frequentes
              </span>
              <h2 className="mt-6 font-heading text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
                Objeções matam <br />
                <span className="text-muted-foreground/20">
                  suas matrículas.
                </span>
              </h2>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-sm">
                Transparência e clareza são fundamentais para uma parceria de
                longo prazo. Aqui estão as respostas para os questionamentos
                mais comuns de nossos parceiros.
              </p>

              <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
                <p className="text-sm font-medium text-slate-500 italic">
                  "Ainda tem alguma dúvida específica? Nosso diagnóstico
                  gratuito serve justamente para sanar cada detalhe do seu
                  projeto."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group rounded-2xl border transition-all duration-300",
                  openIndex === index
                    ? "border-[#6575FF]/30 bg-[#6575FF]/[0.06] shadow-[0_14px_42px_rgba(101,117,255,0.14)]"
                    : "border-border/70 bg-white hover:border-[#6575FF]/30",
                )}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                >
                  <span
                    className={cn(
                      "text-lg font-bold tracking-tight transition-colors",
                      openIndex === index
                        ? "text-[#6575FF]"
                        : "text-foreground",
                    )}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full transition-all",
                      openIndex === index
                        ? "rotate-180 bg-[#6575FF] text-white"
                        : "bg-slate-100 text-slate-400 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]",
                    )}
                  >
                    {openIndex === index ? (
                      <Plus className="h-4 w-4 rotate-45" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
