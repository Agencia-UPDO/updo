"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Plus } from "lucide-react";

const faqItems = [
  {
    question: "O que é o método da UPDO e como ele garante crescimento previsível?",
    answer:
      "O método UPDO organiza a jornada de crescimento em 5 pilares conectados: Diagnóstico, Estratégia, Execução, Inteligência e Otimização. Em vez de focarmos em métricas de vaidade como curtidas ou tráfego sem intenção, estruturamos canais de mídia paga, funis de conversão de alta performance e automações comerciais. Isso conecta o marketing diretamente ao fechamento de vendas, gerando previsibilidade de receita e otimização constante de CAC e LTV.",
  },
  {
    question: "Como a Inteligência Artificial é integrada aos processos de marketing e vendas?",
    answer:
      "Integramos agentes de IA para automação inteligente e qualificação de leads em tempo real. Esses agentes conversam com leads que chegam dos anúncios via WhatsApp ou formulários, qualificam a intenção de compra e agendam reuniões automaticamente com os vendedores humanos. Isso acelera o tempo de resposta, aumentando as taxas de agendamento sem inflar a folha de pagamento comercial.",
  },
  {
    question: "O que é o Radar UPDO e qual a diferença para CRMs tradicionais?",
    answer:
      "O Radar UPDO é o nosso sistema de BI proprietário. Ele extrai e unifica dados de múltiplas origens: Google Ads, Meta Ads, CRM, ERP de vendas, em um único dashboard executivo em tempo real. Enquanto CRMs convencionais mostram apenas contatos e etapas comerciais de forma estática, o Radar correlaciona o investimento exato de marketing ao faturamento final no caixa por canal e produto, permitindo tomar decisões baseadas em ROI real.",
  },
  {
    question: "A UPDO atende quais setores e modelos de negócios?",
    answer:
      "Desenvolvemos estratégias adaptadas para educação, e-commerce, varejo, indústria, B2B e empresas de serviços. Em cada setor, o trabalho começa pelo diagnóstico de ICP, canal e processo comercial, não por execução genérica de anúncios.",
  },
  {
    question: "Como funciona o Diagnóstico Estratégico gratuito da UPDO?",
    answer:
      "O diagnóstico é uma sessão consultiva de cerca de 45 minutos com nossos especialistas. Analisamos a situação atual do marketing e do time de vendas, mapeando vazamentos de funil e gargalos operacionais. Ao final, entregamos uma análise de cenário com um plano de ações práticas para estruturar a aquisição de clientes, sem qualquer compromisso de contratação.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function HomeFAQ() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <section className="bg-white py-18 lg:py-28">
      {/* JSON-LD para indexação por motores de IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">

          {/* Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Dúvidas frequentes
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
              Respostas diretas sobre crescimento previsível.
            </h2>
            <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
              Tudo o que você precisa saber sobre o método, tecnologia proprietária e IA aplicada ao comercial.
            </p>

            <Link
              href="/diagnostico"
              className="group mx-auto mt-10 inline-flex h-13 w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-accent px-6 text-center text-sm font-bold text-accent-foreground shadow-[0_4px_16px_rgba(86,254,213,0.24)] transition-all duration-300 hover:scale-105 hover:bg-[#3eecc4] active:scale-95 sm:mx-0 sm:w-auto sm:max-w-none"
            >
              Fazer diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-12 hidden rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 lg:block">
              <p className="text-sm font-medium italic text-slate-500">
                "O diagnóstico separa problema de geração de demanda de problema de processo comercial, e os dois têm soluções bem diferentes."
              </p>
            </div>
          </motion.div>

          {/* Coluna direita */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-4 lg:col-span-7"
          >
            {faqItems.map((faq, index) => (
              <div
                key={faq.question}
                className={cn(
                  "group rounded-2xl border transition-all duration-300",
                  openFaq === index
                    ? "border-[#6575FF]/30 bg-[#6575FF]/[0.06] shadow-[0_14px_42px_rgba(101,117,255,0.14)]"
                    : "border-border/70 bg-white hover:border-[#6575FF]/30",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
                >
                  <span
                    className={cn(
                      "text-lg font-bold tracking-tight transition-colors",
                      openFaq === index ? "text-[#6575FF]" : "text-foreground",
                    )}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 min-w-8 items-center justify-center rounded-full transition-all",
                      openFaq === index
                        ? "rotate-180 bg-[#6575FF] text-white"
                        : "bg-slate-100 text-slate-400 group-hover:bg-[#6575FF]/10 group-hover:text-[#6575FF]",
                    )}
                  >
                    {openFaq === index ? (
                      <Plus className="h-4 w-4 rotate-45" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openFaq === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
