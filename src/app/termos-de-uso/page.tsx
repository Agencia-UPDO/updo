import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | Regras do Site e Serviços",
  description:
    "Termos e condições de uso do site updo.com.br. Saiba quais são as regras e responsabilidades ao navegar e utilizar os serviços da UPDO.",
  alternates: {
    canonical: "https://updo.com.br/termos-de-uso",
  },
  openGraph: {
    title: "Termos de Uso | Regras do Site e Serviços | UPDO",
    description:
      "Termos e condições de uso do site updo.com.br. Saiba quais são as regras e responsabilidades ao navegar e utilizar os serviços da UPDO.",
    url: "https://updo.com.br/termos-de-uso",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Termos de Uso | Regras do Site e Serviços | UPDO",
    description:
      "Termos e condições de uso do site updo.com.br. Saiba quais são as regras e responsabilidades ao navegar e utilizar os serviços da UPDO.",
  },
};

export default function TermosDeUsoPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border/50 bg-[#F7F9FF] py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-accent transition-opacity hover:opacity-75"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a home
          </Link>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            Última atualização: maio de 2026
          </p>
          <h1 className="mt-3 font-heading text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Termos de Uso
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Ao acessar e utilizar o site <strong>updo.com.br</strong>, você
            concorda com os termos e condições descritos abaixo. Leia com
            atenção antes de prosseguir.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Prose>

              <h2>1. Sobre a UPDO</h2>
              <p>
                <strong>UPDO Agência de Marketing Ltda.</strong><br />
                CNPJ: 30.119.930/0001-20<br />
                Endereço: Rua Francisco Rocha, 198, Batel, Curitiba / PR<br />
                E-mail: <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>
              </p>
              <p>
                A UPDO é uma agência de marketing, vendas e inteligência
                artificial com sede em Curitiba (PR), atuante em todo o
                território nacional.
              </p>

              <h2>2. Aceitação dos termos</h2>
              <p>
                O acesso e uso deste site implicam a aceitação integral destes
                Termos de Uso. Caso não concorde com alguma condição, pedimos
                que não utilize o site. A UPDO pode modificar estes termos a
                qualquer momento, sendo responsabilidade do usuário verificar
                periodicamente a versão atualizada.
              </p>

              <h2>3. Finalidade do site</h2>
              <p>
                O site <strong>updo.com.br</strong> tem como finalidade:
              </p>
              <ul>
                <li>Apresentar os serviços de marketing, vendas e IA da UPDO;</li>
                <li>Disponibilizar conteúdo informativo sobre estratégias de crescimento empresarial;</li>
                <li>Receber solicitações de diagnóstico estratégico por meio de formulários de contato;</li>
                <li>Redirecionar interessados para atendimento via WhatsApp.</li>
              </ul>

              <h2>4. Uso permitido</h2>
              <p>Ao utilizar este site, você concorda em:</p>
              <ul>
                <li>Acessar o conteúdo apenas para fins lícitos e legítimos;</li>
                <li>Não reproduzir, copiar, distribuir ou explorar comercialmente qualquer conteúdo sem autorização prévia e por escrito da UPDO;</li>
                <li>Não utilizar o site para enviar spam, vírus, ou qualquer conteúdo malicioso;</li>
                <li>Fornecer informações verídicas nos formulários de contato;</li>
                <li>Não realizar engenharia reversa, scraping automatizado ou qualquer ação que prejudique o funcionamento do site.</li>
              </ul>

              <h2>5. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo deste site (incluindo textos, imagens,
                logotipos, layouts, marcas, vídeos e materiais gráficos) é de
                propriedade exclusiva da UPDO ou foi licenciado para uso pela
                empresa, e é protegido pelas leis de propriedade intelectual
                brasileiras (Lei nº 9.610/1998 e Lei nº 9.279/1996).
              </p>
              <p>
                É vedada qualquer reprodução, total ou parcial, sem
                autorização expressa e por escrito da UPDO. Solicitações de uso
                devem ser encaminhadas para{" "}
                <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>.
              </p>

              <h2>6. Formulários e dados pessoais</h2>
              <p>
                Ao preencher formulários neste site, você fornece dados
                pessoais que serão tratados conforme nossa{" "}
                <Link href="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
                , em conformidade com a LGPD (Lei nº 13.709/2018).
              </p>
              <p>
                O envio do formulário gera um redirecionamento ao WhatsApp para
                continuação do atendimento. A UPDO não se responsabiliza por
                falhas técnicas no aplicativo de terceiros.
              </p>

              <h2>7. Isenção de responsabilidade</h2>
              <p>A UPDO não se responsabiliza por:</p>
              <ul>
                <li>
                  <strong>Resultados específicos:</strong> as informações e
                  cases apresentados no site são exemplos reais, mas os
                  resultados variam conforme o contexto, setor, maturidade
                  digital e investimento de cada empresa.
                </li>
                <li>
                  <strong>Disponibilidade do site:</strong> o site pode passar
                  por manutenções, atualizações ou indisponibilidades
                  temporárias sem aviso prévio.
                </li>
                <li>
                  <strong>Links externos:</strong> o site pode conter links
                  para sites de terceiros (como LinkedIn, Instagram, YouTube,
                  WhatsApp e parceiros). A UPDO não controla o conteúdo desses
                  sites e não se responsabiliza por suas políticas.
                </li>
                <li>
                  <strong>Uso indevido:</strong> qualquer dano decorrente do
                  uso indevido ou inadequado do site pelo usuário.
                </li>
              </ul>

              <h2>8. Links para sites de terceiros</h2>
              <p>
                Este site pode conter links para sites externos, incluindo
                redes sociais, parceiros certificados (Google, Meta, Amazon,
                RD Station) e blog de conteúdo. Esses links são fornecidos
                apenas para conveniência do usuário. A UPDO não endossa nem
                garante o conteúdo de sites de terceiros e não se
                responsabiliza por eventuais danos decorrentes do acesso a
                eles.
              </p>

              <h2>9. Limitação de responsabilidade</h2>
              <p>
                Na máxima extensão permitida pela legislação brasileira, a UPDO
                não será responsável por danos diretos, indiretos, incidentais,
                especiais ou consequenciais decorrentes do uso ou
                impossibilidade de uso deste site, mesmo que tenha sido
                informada da possibilidade de tais danos.
              </p>

              <h2>10. Legislação aplicável e foro</h2>
              <p>
                Estes Termos de Uso são regidos pelas leis da República
                Federativa do Brasil. Para dirimir quaisquer controvérsias
                decorrentes destes termos, fica eleito o foro da comarca de{" "}
                <strong>Curitiba, Paraná</strong>, com exclusão de qualquer
                outro, por mais privilegiado que seja.
              </p>

              <h2>11. Contato</h2>
              <p>
                Para dúvidas, sugestões ou solicitações relacionadas a estes
                Termos de Uso:
              </p>
              <ul>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>
                </li>
                <li>
                  <strong>Endereço:</strong> Rua Francisco Rocha, 198, Batel,
                  Curitiba / PR
                </li>
              </ul>

            </Prose>
          </div>
        </div>
      </section>
    </main>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="
      [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:font-black [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4
      [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:text-sm [&>p]:mt-4
      [&>ul]:mt-3 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-5 [&>ul]:list-disc
      [&_li]:text-muted-foreground [&_li]:text-sm [&_li]:leading-relaxed
      [&_a]:text-accent [&_a]:font-semibold [&_a]:hover:underline
      [&_strong]:text-foreground [&_strong]:font-bold
    ">
      {children}
    </div>
  );
}
