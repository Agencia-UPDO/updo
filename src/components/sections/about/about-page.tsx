"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  Bot,
  Briefcase,
  CheckCircle2,
  Database,
  FileSearch,
  Filter,
  Handshake,
  Megaphone,
  Mic,
  MousePointerClick,
  Palette,
  Brain,
  RefreshCcw,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

const stats = [
  { value: "+300", label: "empresas atendidas" },
  { value: "+R$ 750M", label: "em receita gerada" },
  { value: "+10", label: "anos de mercado" },
  { value: "3x", label: "finalista RD Station" },
];

const timeline = [
  {
    year: "2017",
    title: "A UPDO nasce em Curitiba",
    body: "Rodrigo Bueno e Juliana Scottini criaram uma agência para unir estratégia, criação e execução com uma leitura incomum no mercado: entender como o consumidor decide antes de comprar mídia.",
    icon: Briefcase,
  },
  {
    year: "Primeiros ciclos",
    title: "Comportamento aplicado à performance",
    body: "Rodrigo foi um dos pioneiros no Brasil ao aproximar comportamento do consumidor, neuromarketing e crescimento. A UPDO levou essa visão para páginas, anúncios, CRM e vendas.",
    icon: Brain,
  },
  {
    year: "Hoje",
    title: "Método, dados e IA no mesmo sistema",
    body: "Hoje essa leitura vira processo comercial: mídia, CRM, dados, automação e IA conectados para reduzir atrito entre clique, conversa, proposta e venda.",
    icon: Activity,
  },
];

const values = [
  {
    number: "01",
    title: "Diagnóstico antes da proposta",
    body: "Antes de falar em plano, olhamos mídia, página, CRM, atendimento e taxa de conversão. A proposta vem depois do mapa do gargalo.",
  },
  {
    number: "02",
    title: "Comportamento antes do layout",
    body: "Design, anúncio e automação precisam considerar como a pessoa decide. Bonito sem intenção clara vira enfeite caro.",
  },
  {
    number: "03",
    title: "Mídia olhando para venda",
    body: "Campanha não termina no lead. Acompanhamos oportunidade, reunião, proposta e fechamento para saber onde ajustar.",
  },
  {
    number: "04",
    title: "Senioridade no dia a dia",
    body: "Quem desenha a estratégia continua perto da operação. A leitura do projeto não some depois da reunião comercial.",
  },
  {
    number: "05",
    title: "Rotina para destravar",
    body: "Quando o número não anda, revisamos canal, mensagem, oferta, atendimento e processo. Sem empurrar mais verba como única resposta.",
  },
];

const partners = [
  {
    name: "Rodrigo Bueno",
    role: "CEO & Fundador",
    photo: "/Imagens/Rodrigo-Bueno-Fundador-UPDO.jpg",
    bio: "Estrategista de marketing e vendas há mais de uma década. Foi um dos primeiros profissionais no Brasil a levar comportamento do consumidor e neuromarketing para a rotina de mídia, páginas e processo comercial.",
    bio2: "Professor de educação executiva na PUCPR, professor de pós-graduação na PUCPR e Faculdade IBRATE, e professor de MBA na UFPR.",
    badges: [
      { icon: Briefcase, label: "+300 empresas atendidas" },
      { icon: Award, label: "3x finalista RD Station" },
      { icon: Mic, label: "Palestrante e professor" },
      { icon: Users, label: "+10 anos no mercado" },
    ],
  },
  {
    name: "Juliana Scottini",
    role: "Diretora de Criação & Sócia",
    photo: "/Imagens/Juliana-Scottini-Fundadora_UPDO.jpg",
    bio: "Especialista em design estratégico, identidade de marca e experiência do usuário. Lidera a criação para que página, campanha e peça tenham função dentro do funil.",
    bio2: "A leitura criativa passa por neurodesign, CRO e consistência de marca: menos peça solta, mais clareza para quem precisa decidir.",
    badges: [
      { icon: Palette, label: "Design estratégico" },
      { icon: MousePointerClick, label: "CRO e UX" },
      { icon: TrendingUp, label: "Marca e performance" },
      { icon: CheckCircle2, label: "Socia fundadora" },
    ],
  },
];

const services = [
  {
    icon: Megaphone,
    tag: "Atração",
    title: "Geração de demanda qualificada",
    body: "Google, Meta, LinkedIn, SEO e TikTok escolhidos pelo momento de compra, não por moda de canal.",
  },
  {
    icon: Filter,
    tag: "Conversão",
    title: "Funil, automação e CRM",
    body: "Landing pages, automações e segmentação para diminuir a perda entre clique, lead, conversa e oportunidade.",
  },
  {
    icon: Handshake,
    tag: "Vendas",
    title: "Inside Sales e processo comercial",
    body: "Playbook, pipeline, treinamento, neurovendas e rotina de cobrança para o time vender com menos improviso.",
  },
  {
    icon: MousePointerClick,
    tag: "Experiência",
    title: "UX, landing pages e CRO",
    body: "Páginas e testes pensados para remover dúvida, reduzir atrito e deixar a próxima ação óbvia.",
  },
  {
    icon: Database,
    tag: "Dados",
    title: "BI, dashboards e Radar UPDO",
    body: "Dashboards que mostram onde o dinheiro entrou, onde o lead parou e qual canal merece ajuste.",
  },
  {
    icon: Bot,
    tag: "IA aplicada",
    title: "IA para vendas e atendimento",
    body: "Agentes e automações para responder rápido, qualificar melhor e acionar o comercial no momento certo.",
  },
];

const manifestoCards = [
  {
    icon: FileSearch,
    title: "Antes de vender, entendemos o gargalo",
    body: "Campanha, página, CRM, atendimento ou oferta: cada problema pede uma decisão diferente.",
  },
  {
    icon: RefreshCcw,
    title: "O projeto roda em ciclos curtos",
    body: "Hipótese, execução, leitura e ajuste. Sem esperar o fim do mês para descobrir o que travou.",
  },
  {
    icon: TrendingUp,
    title: "Receita vale mais que volume",
    body: "Lead barato que não vira oportunidade não sustenta crescimento. A conta precisa fechar no caixa.",
  },
];

export function AboutPage() {
  return (
    <main className="bg-background">
      <section className="relative isolate overflow-hidden bg-[#07111F] pt-10 pb-16 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_20%,rgba(86,254,213,0.14),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(101,117,255,0.16),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-55" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="max-w-3xl"
            >
              <span className="updo-hero-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                Sobre a UPDO
              </span>

              <h1 className="mt-6 font-heading text-4xl font-black leading-[1.08] tracking-tight text-white md:text-6xl">
                A agência que conecta marketing, vendas e dados ao número.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
                Desde 2017, ajudamos empresas a ligar mídia, páginas, CRM,
                atendimento e dados em uma operação que mostra onde o cliente
                trava antes da venda.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/diagnostico"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-13 w-full rounded-full px-7 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-auto",
                  )}
                >
                  Agendar diagnóstico
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </Link>
                <Link
                  href="/cases"
                  className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-7 text-sm font-bold text-white/78 transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/45 hover:bg-[#6575FF]/14 hover:text-white active:scale-95 sm:w-auto"
                >
                  Ver cases
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="hidden grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/25 backdrop-blur-xl lg:grid"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="font-heading text-3xl font-black tracking-tight text-white md:text-4xl">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                    {stat.label}
                  </p>
                  {index === 0 && (
                    <div className="mt-4 h-1.5 w-16 rounded-full bg-accent" />
                  )}
                  {index !== 0 && (
                    <div className="mt-4 h-1.5 w-16 rounded-full bg-[#6575FF]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <motion.div {...fadeUp()} className="max-w-xl">
              <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                A historia
              </span>
              <h2 className="mt-6 font-heading text-4xl font-black leading-[1.08] tracking-tight text-foreground lg:text-[3rem]">
                A UPDO nasceu conectando comportamento do consumidor ao funil de vendas.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                A UPDO foi criada para resolver uma separação comum: marketing
                olhando para lead, vendas olhando para meta e diretoria olhando
                para caixa. Nosso trabalho é juntar as três leituras.
              </p>
            </motion.div>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(index * 0.08)}
                  className="group rounded-2xl border border-border/70 bg-[var(--surface-soft)] p-6 transition-all hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.04]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6575FF]">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-black tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#6575FF]/[0.08] blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp()} className="mb-14 max-w-2xl">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Quem lidera
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-white lg:text-5xl">
              Estratégia de quem também responde pela execução.
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {partners.map((partner, index) => (
              <motion.article
                key={partner.name}
                {...fadeUp(index * 0.12)}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={partner.photo}
                    alt={`${partner.name}, ${partner.role} da UPDO`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#07111F]/88 via-[#07111F]/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                      {partner.role}
                    </span>
                    <h3 className="mt-3 font-heading text-3xl font-black tracking-tight text-white">
                      {partner.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-sm leading-relaxed text-white/66">{partner.bio}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {partner.bio2}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {partner.badges.map((badge) => (
                      <div
                        key={badge.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF]">
                          <badge.icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-bold leading-snug text-white/72">
                          {badge.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(101,117,255,0.18),transparent_34%),radial-gradient(circle_at_10%_80%,rgba(86,254,213,0.10),transparent_32%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp()} className="mx-auto max-w-3xl text-center">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Manifesto
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-white lg:text-5xl">
              Marketing precisa continuar depois do lead.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/66">
              A UPDO acompanha o que acontece entre o clique e a venda:
              página, formulário, WhatsApp, CRM, atendimento, proposta e
              fechamento. É nesse caminho que aparecem os ajustes que realmente
              mudam o resultado.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {manifestoCards.map((card, index) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.12 + index * 0.06)}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/[0.08]"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/25 bg-[#6575FF]/12 text-[#6575FF] transition-transform group-hover:scale-105">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-black leading-tight tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/58">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp()} className="mx-auto mb-14 max-w-2xl text-center">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Valores
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
              O jeito UPDO de tocar projeto.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                {...fadeUp(index * 0.06)}
                className="group rounded-2xl border border-border/70 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#6575FF]/30 hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <span className="font-heading text-4xl font-black text-[#6575FF]/18">
                  {value.number}
                </span>
                <h3 className="mt-6 font-heading text-lg font-black leading-tight tracking-tight text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp()} className="mx-auto mb-14 max-w-2xl text-center">
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              O que fazemos
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-foreground lg:text-5xl">
              Marketing, vendas, dados e IA para corrigir o funil inteiro.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A UPDO atua onde a receita costuma escapar: aquisição,
              conversão da página, atendimento, CRM, processo comercial,
              dashboards e automações.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeUp(index * 0.05)}
                className="group rounded-2xl border border-border/70 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#6575FF]/30 hover:bg-[#6575FF]/[0.035] hover:shadow-[0_18px_44px_rgba(101,117,255,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6575FF]">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-black leading-tight tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="mt-12 flex justify-center">
            <Link
              href="/#servicos"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#6575FF] transition-opacity hover:opacity-80"
            >
              Ver detalhes de cada serviço
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111F] py-18 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(86,254,213,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(101,117,255,0.18),transparent_32%)] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp()}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
              Próximo passo
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.1] tracking-tight text-white lg:text-5xl">
              Vamos descobrir onde o funil está perdendo dinheiro?
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/66">
              O diagnóstico separa problema de canal, mensagem, página,
              atendimento, CRM e venda para priorizar o que muda resultado.
            </p>

            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/diagnostico"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-13 w-full rounded-full px-8 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 sm:w-auto",
                  )}
                >
                  Quero meu diagnóstico gratuito
                <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </Link>
              <Link
                href="/cases"
                className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-white/12 px-8 text-sm font-bold text-white/72 transition-all duration-300 hover:scale-105 hover:border-[#6575FF]/35 hover:bg-[#6575FF]/12 hover:text-white active:scale-95 sm:w-auto"
              >
                Ver cases de resultado
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
