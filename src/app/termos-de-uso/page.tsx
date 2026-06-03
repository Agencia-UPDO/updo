import type { Metadata } from "next";
import type { ElementType, ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Regras do Site e Serviços",
  description:
    "Termos e condições de uso do site updo.com.br, incluindo responsabilidades, propriedade intelectual, formulários e limites de uso.",
  alternates: {
    canonical: "https://updo.com.br/termos-de-uso",
  },
  openGraph: {
    title: "Termos de Uso | Regras do Site e Serviços | UPDO",
    description:
      "Termos e condições de uso do site updo.com.br, incluindo responsabilidades, propriedade intelectual, formulários e limites de uso.",
    url: "https://updo.com.br/termos-de-uso",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Termos de Uso | Regras do Site e Serviços | UPDO",
    description:
      "Termos e condições de uso do site updo.com.br, incluindo responsabilidades, propriedade intelectual, formulários e limites de uso.",
  },
};

const sections = [
  {
    title: "1. Sobre a UPDO",
    content: (
      <>
        <p>
          A <strong>UPDO Agência de Marketing Ltda.</strong>, CNPJ
          30.119.930/0001-20, é uma empresa de marketing, vendas, dados e IA,
          com sede em Curitiba / PR e atuação em todo o Brasil.
        </p>
      </>
    ),
  },
  {
    title: "2. Aceitação dos termos",
    content: (
      <>
        <p>
          Ao acessar ou utilizar este site, você concorda com estes Termos de
          Uso. Caso não concorde com alguma condição, recomendamos que não
          utilize o site.
        </p>
        <p>
          A UPDO pode atualizar estes termos a qualquer momento. A versão mais
          recente estará sempre publicada nesta página.
        </p>
      </>
    ),
  },
  {
    title: "3. Finalidade do site",
    content: (
      <>
        <p>O site da UPDO tem como objetivo:</p>
        <ul>
          <li>Apresentar serviços, setores atendidos, cases e conteúdos;</li>
          <li>Receber solicitações de diagnóstico, contato e treinamento;</li>
          <li>Compartilhar informações sobre marketing, vendas, dados e IA;</li>
          <li>Mensurar campanhas e melhorar a experiência de navegação.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Uso permitido",
    content: (
      <>
        <p>Ao usar este site, você concorda em:</p>
        <ul>
          <li>Acessar o conteúdo apenas para fins lícitos e legítimos;</li>
          <li>Fornecer informações verdadeiras nos formulários;</li>
          <li>Não copiar, distribuir ou explorar conteúdos sem autorização;</li>
          <li>Não enviar spam, vírus, código malicioso ou tentativas de abuso;</li>
          <li>Não realizar scraping agressivo, engenharia reversa ou ataques.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Propriedade intelectual",
    content: (
      <>
        <p>
          Textos, layouts, marcas, imagens, gráficos, vídeos, metodologias,
          materiais e demais conteúdos do site pertencem à UPDO ou são usados
          mediante licença. É proibida a reprodução total ou parcial sem
          autorização prévia e por escrito.
        </p>
        <p>
          Solicitações de uso podem ser enviadas para{" "}
          <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>.
        </p>
      </>
    ),
  },
  {
    title: "6. Formularios e dados pessoais",
    content: (
      <>
        <p>
          Ao preencher formulários no site, você fornece dados pessoais que são
          tratados conforme a nossa{" "}
          <Link href="/politica-de-privacidade">
            Política de Privacidade
          </Link>
          .
        </p>
        <p>
          O envio de formulários pode registrar conversões em ferramentas de
          CRM, analytics e mídia, e permite que a equipe da UPDO entre em
          contato para responder à solicitação enviada.
        </p>
      </>
    ),
  },
  {
    title: "7. Resultados e informações do site",
    content: (
      <>
        <p>
          Cases, números, exemplos e conteúdos apresentados no site são
          informativos. Resultados podem variar conforme setor, investimento,
          maturidade digital, processo comercial, equipe, produto e contexto de
          mercado.
        </p>
        <p>
          Nenhum conteúdo do site deve ser interpretado como garantia de
          resultado específico.
        </p>
      </>
    ),
  },
  {
    title: "8. Links de terceiros",
    content: (
      <>
        <p>
          O site pode conter links para redes sociais, plataformas parceiras,
          ferramentas de marketing, conteúdos externos ou canais de atendimento.
          A UPDO não controla o conteúdo, disponibilidade ou políticas desses
          terceiros.
        </p>
      </>
    ),
  },
  {
    title: "9. Limitacao de responsabilidade",
    content: (
      <>
        <p>
          Na extensão permitida pela legislação brasileira, a UPDO não será
          responsável por danos diretos, indiretos, incidentais ou
          consequenciais decorrentes do uso do site, indisponibilidades
          temporárias, erros de terceiros ou uso indevido pelo usuário.
        </p>
      </>
    ),
  },
  {
    title: "10. Legislacao aplicavel e foro",
    content: (
      <>
        <p>
          Estes Termos de Uso são regidos pelas leis da República Federativa do
          Brasil. Para dirimir controvérsias, fica eleito o foro da comarca de{" "}
          <strong>Curitiba, Paraná</strong>, salvo disposição legal em
          contrário.
        </p>
      </>
    ),
  },
  {
    title: "11. Contato",
    content: (
      <>
        <p>
          Para dúvidas sobre estes termos, envie uma mensagem para{" "}
          <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>.
        </p>
      </>
    ),
  },
];

export default function TermosDeUsoPage() {
  return (
    <main className="bg-background">
      <LegalHero
        eyebrow="Regras do site"
        title="Termos de Uso"
        description="As condições para navegar no site da UPDO, preencher formulários, acessar conteúdos e utilizar nossas informações."
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
                  Estes termos definem o uso permitido do site e dos conteúdos
                  publicados pela UPDO.
                </p>
                <div className="mt-6 grid gap-3 border-t border-border/60 pt-5">
                  <ContactRow icon={FileText} text="Termos do site" />
                  <ContactRow icon={Mail} text="contato@updo.com.br" />
                  <ContactRow icon={MapPin} text="Curitiba / PR" />
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
    ">
      {children}
    </div>
  );
}
