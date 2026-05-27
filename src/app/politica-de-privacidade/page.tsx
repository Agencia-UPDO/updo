import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a UPDO coleta, usa e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
  alternates: {
    canonical: "https://updo.com.br/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | UPDO",
    description:
      "Saiba como a UPDO coleta, usa e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
    url: "https://updo.com.br/politica-de-privacidade",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade | UPDO",
    description:
      "Saiba como a UPDO coleta, usa e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
  },
};

export default function PoliticaDePrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A UPDO respeita sua privacidade e está comprometida com a proteção
            dos seus dados pessoais em conformidade com a Lei Geral de Proteção
            de Dados (LGPD, Lei nº 13.709/2018).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Prose>

              <h2>1. Quem somos</h2>
              <p>
                <strong>UPDO Agência de Marketing Ltda.</strong><br />
                CNPJ: 30.119.930/0001-20<br />
                Endereço: Rua Francisco Rocha, 198, Batel, Curitiba / PR<br />
                E-mail de contato: <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>
              </p>
              <p>
                A UPDO é a controladora dos dados pessoais coletados por meio
                deste site (<strong>updo.com.br</strong>) e de seus formulários.
              </p>

              <h2>2. Quais dados coletamos</h2>
              <p>Coletamos os seguintes dados pessoais quando você preenche um formulário em nosso site:</p>
              <ul>
                <li><strong>Nome</strong></li>
                <li><strong>Nome da empresa</strong></li>
                <li><strong>Endereço de e-mail</strong></li>
                <li><strong>Número de telefone / WhatsApp</strong></li>
                <li><strong>Informações de contexto</strong> (setor, desafio atual, investimento em marketing, faturamento, ticket médio, ciclo de venda conforme o formulário preenchido)</li>
              </ul>
              <p>
                Também podemos coletar automaticamente dados de navegação por
                meio de ferramentas de análise (Google Analytics / Google Tag
                Manager), como páginas visitadas, tempo de permanência e
                origem de acesso. Esses dados são coletados de forma agregada
                e não permitem identificação direta do usuário.
              </p>

              <h2>3. Para que usamos seus dados</h2>
              <p>Os dados coletados são utilizados exclusivamente para:</p>
              <ul>
                <li>Entrar em contato para agendamento do diagnóstico estratégico solicitado;</li>
                <li>Enviar informações relacionadas aos serviços da UPDO que você solicitou;</li>
                <li>Personalizar o atendimento com base no contexto informado no formulário;</li>
                <li>Cumprir obrigações legais ou regulatórias aplicáveis.</li>
              </ul>
              <p>
                <strong>Não vendemos, alugamos nem compartilhamos seus dados
                com terceiros para fins comerciais.</strong>
              </p>

              <h2>4. Base legal do tratamento</h2>
              <p>
                O tratamento dos seus dados pessoais é fundamentado nas
                seguintes bases legais previstas no art. 7º da LGPD:
              </p>
              <ul>
                <li>
                  <strong>Consentimento (art. 7º, I):</strong> ao preencher e
                  enviar o formulário, você consente com o tratamento dos dados
                  para as finalidades descritas nesta política.
                </li>
                <li>
                  <strong>Legítimo interesse (art. 7º, IX):</strong> para
                  melhoria dos nossos serviços e análise de desempenho do site,
                  de forma que não prejudique seus direitos e liberdades
                  fundamentais.
                </li>
              </ul>

              <h2>5. Compartilhamento de dados</h2>
              <p>Seus dados podem ser compartilhados com:</p>
              <ul>
                <li>
                  <strong>WhatsApp / Meta Platforms:</strong> ao clicar em
                  &quot;Enviar&quot;, você é redirecionado ao WhatsApp para continuação
                  do atendimento. Os dados são transmitidos via link com
                  parâmetros pré-preenchidos e passam a ser regidos também
                  pela política de privacidade do WhatsApp.
                </li>
                <li>
                  <strong>Google (Analytics e Tag Manager):</strong> para
                  análise de tráfego e desempenho do site, com dados
                  anonimizados conforme os termos do Google.
                </li>
                <li>
                  <strong>Ferramentas de CRM e automação de marketing</strong>
                  {" "}utilizadas internamente pela equipe UPDO para gestão do
                  relacionamento com clientes.
                </li>
              </ul>
              <p>
                Todos os fornecedores são contratados com cláusulas de
                confidencialidade e tratam os dados apenas para as finalidades
                contratadas.
              </p>

              <h2>6. Por quanto tempo armazenamos seus dados</h2>
              <p>
                Seus dados são armazenados pelo tempo necessário para cumprir
                as finalidades descritas nesta política, observados os
                seguintes prazos:
              </p>
              <ul>
                <li>
                  <strong>Dados de contato e formulário:</strong> até 5 anos
                  após o último contato, ou enquanto houver relação comercial
                  ativa.
                </li>
                <li>
                  <strong>Dados de navegação (Analytics):</strong> conforme
                  configuração da ferramenta, em geral até 26 meses.
                </li>
                <li>
                  <strong>Obrigações legais:</strong> quando exigido por lei,
                  pelo prazo determinado na legislação aplicável.
                </li>
              </ul>

              <h2>7. Seus direitos como titular</h2>
              <p>
                Nos termos da LGPD, você tem os seguintes direitos em relação
                aos seus dados pessoais:
              </p>
              <ul>
                <li>Confirmar se realizamos o tratamento dos seus dados;</li>
                <li>Acessar os dados que temos sobre você;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
                <li>Solicitar a portabilidade dos seus dados a outro fornecedor;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Solicitar informações sobre com quem compartilhamos seus dados.</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo
                e-mail{" "}
                <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>{" "}
                com o assunto <em>&quot;Solicitação LGPD&quot;</em>. Responderemos em
                até 15 dias úteis.
              </p>

              <h2>8. Cookies</h2>
              <p>
                Utilizamos cookies para melhorar sua experiência de navegação e
                coletar dados analíticos. Os cookies podem ser:
              </p>
              <ul>
                <li>
                  <strong>Essenciais:</strong> necessários para o funcionamento
                  básico do site.
                </li>
                <li>
                  <strong>Analíticos:</strong> Google Analytics, para entender
                  como os visitantes utilizam o site.
                </li>
                <li>
                  <strong>De marketing:</strong> pixels do Google Ads e Meta
                  Ads para mensuração de campanhas.
                </li>
              </ul>
              <p>
                Você pode configurar seu navegador para recusar cookies. Isso
                pode afetar algumas funcionalidades do site.
              </p>

              <h2>9. Segurança dos dados</h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger seus dados pessoais contra acesso não autorizado,
                alteração, divulgação ou destruição. Nosso site utiliza
                protocolo HTTPS com criptografia SSL/TLS.
              </p>

              <h2>10. Alterações nesta política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente.
                A versão mais recente estará sempre disponível em{" "}
                <Link href="/politica-de-privacidade">
                  updo.com.br/politica-de-privacidade
                </Link>
                . Recomendamos que você revise esta página periodicamente.
              </p>

              <h2>11. Contato e Encarregado de Dados (DPO)</h2>
              <p>
                Para dúvidas, solicitações ou reclamações relacionadas ao
                tratamento de dados pessoais:
              </p>
              <ul>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:contato@updo.com.br">contato@updo.com.br</a>
                </li>
                <li>
                  <strong>Assunto:</strong> &quot;Privacidade de Dados / LGPD&quot;
                </li>
                <li>
                  <strong>Endereço:</strong> Rua Francisco Rocha, 198, Batel,
                  Curitiba / PR
                </li>
              </ul>
              <p>
                Você também pode apresentar reclamação à Autoridade Nacional de
                Proteção de Dados (ANPD) em{" "}
                <a
                  href="https://www.gov.br/anpd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gov.br/anpd
                </a>
                .
              </p>

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
