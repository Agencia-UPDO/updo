import type { Metadata } from "next";
import type { ElementType, ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | LGPD e Dados Pessoais",
  description:
    "Saiba como a UPDO coleta, usa e protege dados pessoais em formulários, analytics e campanhas, em conformidade com a LGPD.",
  alternates: {
    canonical: "https://updo.com.br/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | LGPD e Dados Pessoais | UPDO",
    description:
      "Como a UPDO coleta, usa e protege dados pessoais em formulários, analytics e campanhas, em conformidade com a LGPD.",
    url: "https://updo.com.br/politica-de-privacidade",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade | LGPD e Dados Pessoais | UPDO",
    description:
      "Como a UPDO coleta, usa e protege dados pessoais em formulários, analytics e campanhas, em conformidade com a LGPD.",
  },
};

const sections = [
  {
    title: "1. Quem somos",
    content: (
      <>
        <p>
          A <strong>UPDO Agência de Marketing Ltda.</strong>, CNPJ
          30.119.930/0001-20, com sede em Curitiba / PR, é a controladora dos
          dados pessoais coletados por meio deste site e dos formulários da
          UPDO.
        </p>
        <p>
          Para assuntos relacionados a privacidade e LGPD, fale com a nossa
          equipe pelo e-mail{" "}
          <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>.
        </p>
      </>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    content: (
      <>
        <p>Quando você preenche um formulário, podemos coletar:</p>
        <ul>
          <li>Nome, e-mail, telefone e empresa;</li>
          <li>
            Informacoes de contexto, como setor, desafio, investimento,
            faturamento, ticket medio, ciclo de venda, CRM, canais ativos ou
            tema de interesse, conforme o formulario preenchido;
          </li>
          <li>
            Dados de origem de campanha, como UTM source, medium, campaign,
            content e term, quando disponiveis.
          </li>
        </ul>
        <p>
          Tambem coletamos dados de navegacao de forma agregada por ferramentas
          como Google Analytics, Google Tag Manager e pixels de midia, incluindo
          páginas visitadas, eventos, origem de acesso e desempenho de
          campanhas.
        </p>
      </>
    ),
  },
  {
    title: "3. Para que usamos seus dados",
    content: (
      <>
        <p>Usamos os dados coletados para:</p>
        <ul>
          <li>Responder solicitações de diagnóstico, contato ou treinamento;</li>
          <li>Personalizar o atendimento conforme o contexto informado;</li>
          <li>Registrar conversoes em ferramentas de marketing e CRM;</li>
          <li>Mensurar campanhas, desempenho do site e qualidade dos leads;</li>
          <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
        </ul>
        <p>
          <strong>
            A UPDO não vende nem aluga dados pessoais para terceiros.
          </strong>
        </p>
      </>
    ),
  },
  {
    title: "4. Base legal",
    content: (
      <>
        <p>
          O tratamento dos dados pessoais ocorre com base no consentimento
          fornecido ao enviar formulários, no legítimo interesse para melhoria
          dos nossos serviços e na necessidade de cumprimento de obrigações
          legais ou regulatórias.
        </p>
      </>
    ),
  },
  {
    title: "5. Compartilhamento de dados",
    content: (
      <>
        <p>Seus dados podem ser compartilhados com fornecedores usados pela UPDO para operacao do site, marketing, CRM e atendimento, como:</p>
        <ul>
          <li>RD Station e outras ferramentas de CRM ou automacao;</li>
          <li>Google Analytics, Google Tag Manager e Google Ads;</li>
          <li>Meta Ads e outros pixels de mensuracao;</li>
          <li>Plataformas de hospedagem, infraestrutura e seguranca.</li>
        </ul>
        <p>
          Esses fornecedores tratam os dados apenas para as finalidades
          contratadas e conforme suas proprias politicas de privacidade.
        </p>
      </>
    ),
  },
  {
    title: "6. Tempo de armazenamento",
    content: (
      <>
        <p>
          Dados de contato e formulario podem ser armazenados por ate 5 anos
          apos o ultimo contato, ou enquanto houver relacao comercial ativa.
          Dados de navegacao e analytics seguem os prazos configurados nas
          respectivas ferramentas.
        </p>
      </>
    ),
  },
  {
    title: "7. Direitos do titular",
    content: (
      <>
        <p>Nos termos da LGPD, você pode solicitar:</p>
        <ul>
          <li>Confirmacao de tratamento e acesso aos dados;</li>
          <li>Correcao de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimizacao, bloqueio ou eliminacao de dados desnecessarios;</li>
          <li>Portabilidade, quando aplicavel;</li>
          <li>Informacoes sobre compartilhamento;</li>
          <li>Revogacao do consentimento.</li>
        </ul>
        <p>
          Para exercer seus direitos, envie um e-mail para{" "}
          <a href="mailto:contato@updo.com.br">contato@updo.com.br</a> com o
          assunto <em>"Solicitacao LGPD"</em>.
        </p>
      </>
    ),
  },
  {
    title: "8. Cookies e tecnologias de rastreamento",
    content: (
      <>
        <p>
          Utilizamos cookies e tecnologias semelhantes para funcionamento do
          site, analise de trafego, mensuracao de campanhas e melhoria da
          experiencia. Voce pode bloquear cookies nas configuracoes do
          navegador, mas isso pode afetar algumas funcionalidades.
        </p>
      </>
    ),
  },
  {
    title: "9. Seguranca",
    content: (
      <>
        <p>
          Adotamos medidas tecnicas e organizacionais para proteger dados
          pessoais contra acesso não autorizado, perda, uso indevido,
          alteração ou divulgação indevida. O site utiliza HTTPS com
          criptografia SSL/TLS.
        </p>
      </>
    ),
  },
  {
    title: "10. Atualizacoes desta politica",
    content: (
      <>
        <p>
          Esta política pode ser atualizada periodicamente. A versão mais
          recente estará sempre disponível em{" "}
          <Link href="/politica-de-privacidade">
            updo.com.br/politica-de-privacidade
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="bg-background">
      <LegalHero
        eyebrow="Privacidade e LGPD"
        title="Política de Privacidade"
        description="Como a UPDO coleta, usa e protege os dados informados nos formulários, ferramentas de analytics, CRM e campanhas."
      />

      <section className="bg-[var(--surface-soft)] py-18 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm">
                <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Atualizacao
                </span>
                <p className="mt-4 font-heading text-2xl font-black tracking-tight text-foreground">
                  Junho de 2026
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Esta página explica o tratamento de dados pessoais no site da
                  UPDO.
                </p>
                <div className="mt-6 grid gap-3 border-t border-border/60 pt-5">
                  <ContactRow icon={Mail} text="contato@updo.com.br" />
                  <ContactRow icon={MapPin} text="Curitiba / PR" />
                  <ContactRow icon={ShieldCheck} text="LGPD e dados pessoais" />
                </div>
              </div>
            </aside>

            <div className="grid gap-4">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm md:p-8"
                >
                  <h2 className="font-heading text-2xl font-black tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-4">
                    <Prose>{section.content}</Prose>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LegalHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111F] pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-[560px] w-[560px] rounded-full bg-[#6575FF]/[0.12] blur-[140px]" />
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a home
        </Link>
        <div className="max-w-3xl">
          <span className="updo-badge inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  text,
}: {
  icon: ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6575FF]/20 bg-[#6575FF]/10 text-[#6575FF]">
        <Icon className="h-4 w-4" />
      </span>
      {text}
    </div>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="
      [&>p]:mt-4 [&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-muted-foreground
      [&>p:first-child]:mt-0
      [&>ul]:mt-4 [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-5
      [&_li]:text-sm [&_li]:leading-relaxed [&_li]:text-muted-foreground
      [&_a]:font-semibold [&_a]:text-[#6575FF] [&_a]:hover:underline
      [&_strong]:font-bold [&_strong]:text-foreground
      [&_em]:text-foreground
    ">
      {children}
    </div>
  );
}
