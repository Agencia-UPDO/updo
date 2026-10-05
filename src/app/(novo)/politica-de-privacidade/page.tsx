import type { Metadata } from "next";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import LegalPagina, { type SecaoLegal } from "@/novo/components/legal/legal-pagina";

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

const sections: SecaoLegal[] = [
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
    <LegalPagina
      badge="Privacidade e LGPD"
      title="Política de *Privacidade*"
      description="Como a UPDO coleta, usa e protege os dados informados nos formulários, ferramentas de analytics, CRM e campanhas."
      atualizacao="Junho de 2026"
      resumo="Esta página explica o tratamento de dados pessoais no site da UPDO."
      contatos={[
        { icon: Mail, text: "contato@updo.com.br" },
        { icon: MapPin, text: "Curitiba / PR" },
        { icon: ShieldCheck, text: "LGPD e dados pessoais" },
      ]}
      sections={sections}
    />
  );
}
