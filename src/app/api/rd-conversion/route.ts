import { NextResponse } from "next/server";

type ConversionPayload = {
  formName?: string;
  pagePath?: string;
  pageUrl?: string;
  formData?: Record<string, unknown>;
};

const fieldMappings: Record<string, string> = {
  sector: "cf_setor_de_empresa",
  challenge: "cf_principal_desafio",
  investment: "cf_investimento_em_marketing",
  platform: "cf_plataforma_atual",
  revenue: "cf_faturamento_mensal",
  storeType: "cf_tipo_de_operacao",
  businessType: "cf_tipo_de_negocio",
  leadVolume: "cf_volume_de_leads",
  crm: "cf_crm_atual",
  mainPain: "cf_principal_dor",
  service: "cf_servico_de_interesse",
  teamSize: "cf_tamanho_do_time",
  baseSize: "cf_tamanho_da_base",
  channels: "cf_canais_ativos",
  currentTool: "cf_ferramenta_atual",
  pageType: "cf_tipo_de_pagina",
  traffic: "cf_trafego_mensal",
  currentRate: "cf_taxa_de_conversao_atual",
  budget: "cf_budget_mensal",
  companySize: "cf_tamanho_da_empresa",
  format: "cf_formato_de_interesse",
  topic: "cf_tema_principal",
  industryType: "cf_segmento_industrial",
  ticket: "cf_ticket_medio_da_venda",
  salesCycle: "cf_ciclo_medio_da_venda",
  segment: "cf_segmento_de_servico",
};

const reservedFields = new Set([
  "nome",
  "name",
  "email",
  "telefone",
  "phone",
  "empresa",
  "company",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
]);

const normalizeCustomField = (field: string) =>
  `cf_${field
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase()}`;

const toText = (value: unknown) => {
  if (value === undefined || value === null) return "";
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return String(value).trim();
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

async function parseRdResponse(response: Response) {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RD_STATION_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RD_STATION_API_KEY nao configurada." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ConversionPayload;
  const formData = body.formData ?? {};
  const email = toText(formData.email);

  if (!email) {
    return NextResponse.json(
      { error: "E-mail e obrigatorio para enviar a conversao." },
      { status: 400 },
    );
  }

  const formName = body.formName || "Formulario UPDO";
  const name = toText(formData.nome || formData.name);
  const phone = toText(formData.telefone || formData.phone);
  const companyName = toText(formData.empresa || formData.company);

  const cf: Record<string, string> = {};

  Object.entries(formData).forEach(([key, value]) => {
    const text = toText(value);
    if (!text || reservedFields.has(key)) return;

    const rdField = fieldMappings[key] || normalizeCustomField(key);
    cf[rdField] = text;
  });

  const pageTag = body.pagePath ? slugify(body.pagePath) : "site";
  const payload = {
    event_type: "CONVERSION",
    event_family: "CDP",
    payload: {
      conversion_identifier: formName,
      email,
      name,
      personal_phone: phone,
      mobile_phone: phone,
      company_name: companyName,
      website: body.pageUrl || "https://www.updo.com.br",
      tags: ["site-updo", slugify(formName), pageTag],
      traffic_source: toText(formData.utm_source) || "Site UPDO",
      traffic_medium: toText(formData.utm_medium) || "formulario",
      traffic_campaign: toText(formData.utm_campaign),
      traffic_value: toText(formData.utm_content),
      ...cf,
    },
  };

  const response = await fetch(
    `https://api.rd.services/platform/conversions?api_key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const rdResponse = await parseRdResponse(response);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Falha ao enviar conversao para RD Station.", rdResponse },
      { status: response.status },
    );
  }

  return NextResponse.json({ ok: true, rdResponse });
}
