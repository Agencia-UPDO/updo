import { NextResponse } from "next/server";

type ConversionPayload = {
  formName?: string;
  pagePath?: string;
  pageUrl?: string;
  formData?: Record<string, unknown>;
};

const rateLimitWindowMs = 60_000;
const maxRequestsPerWindow = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

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
  "companyWebsite",
  "website",
]);

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
};

const isRateLimited = (request: Request) => {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return current.count > maxRequestsPerWindow;
};

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
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);
};

const normalizeEmail = (value: unknown) =>
  toText(value).toLowerCase().slice(0, 254);

const normalizePhone = (value: unknown) => {
  const phone = toText(value);
  const digits = phone.replace(/\D/g, "").slice(0, 15);
  return digits || phone.slice(0, 30);
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em alguns instantes." },
      { status: 429 },
    );
  }

  let body: ConversionPayload;

  try {
    body = (await request.json()) as ConversionPayload;
  } catch {
    return NextResponse.json(
      { error: "Payload invalido." },
      { status: 400 },
    );
  }

  const formData = body.formData ?? {};
  const honeypot = toText(formData.companyWebsite || formData.website);

  if (honeypot) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const email = normalizeEmail(formData.email);

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "E-mail valido e obrigatorio para enviar a conversao." },
      { status: 400 },
    );
  }

  const formName = toText(body.formName) || "Formulario UPDO";
  const name = toText(formData.nome || formData.name);
  const phone = normalizePhone(formData.telefone || formData.phone);
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
