"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
  "/": "UPDO | Estruturação de Marketing, Vendas, CRM e Dados",
  "/sobre": "Sobre | Consultoria de Crescimento, CRM e Inteligência Comercial | UPDO",
  "/o-que-fazemos": "Como Trabalhamos | Método de Marketing e Vendas | UPDO",
  "/diagnostico": "Diagnóstico de Marketing e Vendas | UPDO",
  "/treinamentos-corporativos": "Treinamentos Corporativos | Vendas, Neurovendas e IA | UPDO",
  "/cases": "Cases de Marketing e Vendas | Resultados por Setor | UPDO",
  "/cases/educacao": "Case de Marketing Educacional | ROAS 20x e +211% de Leads | UPDO",
  "/cases/e-commerce": "Case de Marketing para E-commerce | +6.900% em Vendas | UPDO",
  "/cases/varejo": "Case de Marketing para Varejo | +87% de Faturamento | UPDO",
  "/cases/industria": "Case de Marketing Industrial | ROI 1.527% em Mídia Paga | UPDO",
  "/marketing-educacional": "Marketing Educacional | Captação de Alunos e Matrículas | UPDO",
  "/marketing-para-ecommerce": "Marketing para E-commerce | Google Ads, CRO, ROAS e Recompra | UPDO",
  "/marketing-para-varejo": "Marketing para Varejo | Tráfego Local, WhatsApp e Recompra | UPDO",
  "/marketing-para-industria": "Marketing para Indústria | Demanda B2B e Vendas Complexas | UPDO",
  "/marketing-para-b2b": "Marketing B2B | LinkedIn Ads, ICP e Pipeline Comercial | UPDO",
  "/marketing-para-servicos": "Marketing para Empresas de Serviços | Leads e Processo Comercial | UPDO",
  "/servicos/ia-para-vendas": "IA para Vendas e Atendimento | Agentes para WhatsApp e CRM | UPDO",
  "/servicos/inside-sales": "Inside Sales e Processo Comercial | Playbook, Pipeline e Treinamento | UPDO",
  "/servicos/inteligencia-de-dados": "Inteligência de Dados e Dashboards | BI, Atribuição e KPIs | UPDO",
  "/servicos/funil-e-automacao": "Funil e Automação de Marketing | Lead Scoring, CRM e WhatsApp | UPDO",
  "/servicos/ux-cro": "UX e CRO | Otimização de Landing Pages e Conversão | UPDO",
  "/servicos/geracao-de-demanda": "Geração de Demanda | Google Ads, Meta, LinkedIn, SEO e GEO | UPDO",
  "/politica-de-privacidade": "Política de Privacidade | LGPD e Dados Pessoais | UPDO",
  "/termos-de-uso": "Termos de Uso | Regras do Site e Serviços | UPDO",
};

export function TitleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const title = titles[pathname];
    if (!title) return;

    const syncTitle = () => {
      if (document.title !== title) {
        document.title = title;
      }
    };

    syncTitle();

    const timers = [
      window.setTimeout(syncTitle, 0),
      window.setTimeout(syncTitle, 60),
      window.setTimeout(syncTitle, 180),
    ];

    const frame = window.requestAnimationFrame(syncTitle);

    window.addEventListener("focus", syncTitle);
    window.addEventListener("pageshow", syncTitle);
    document.addEventListener("visibilitychange", syncTitle);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.cancelAnimationFrame(frame);
      window.removeEventListener("focus", syncTitle);
      window.removeEventListener("pageshow", syncTitle);
      document.removeEventListener("visibilitychange", syncTitle);
    };
  }, [pathname]);

  return null;
}
