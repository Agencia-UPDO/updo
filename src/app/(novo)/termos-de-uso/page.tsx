import type { Metadata } from "next";
import { imagemOg } from "@/novo/utils/og";
import { FileText, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import LegalPagina, { type SecaoLegal } from "@/novo/components/legal/legal-pagina";

export const metadata: Metadata = {
  title: "Termos de Uso | Regras do Site e Serviços",
  description:
    "Termos e condições de uso do site updo.com.br, incluindo responsabilidades, propriedade intelectual, formulários e limites de uso.",
  alternates: {
    canonical: "https://updo.com.br/termos-de-uso",
  },
  openGraph: {
    images: [imagemOg("Termos de Uso", "Regras do site")],
    title: "Termos de Uso | Regras do Site e Serviços | UPDO",
    description:
      "Termos e condições de uso do site updo.com.br, incluindo responsabilidades, propriedade intelectual, formulários e limites de uso.",
    url: "https://updo.com.br/termos-de-uso",
    siteName: "UPDO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    images: [imagemOg("Termos de Uso", "Regras do site").url],
    card: "summary_large_image",
    title: "Termos de Uso | Regras do Site e Serviços | UPDO",
    description:
      "Termos e condições de uso do site updo.com.br, incluindo responsabilidades, propriedade intelectual, formulários e limites de uso.",
  },
};

const sections: SecaoLegal[] = [
  {
    title: "1. Sobre a UPDO",
    content: (
      <>
        <p>
          A <strong>UPDO Agência de Marketing Ltda.</strong>, CNPJ
          30.119.930/0001-20, é uma empresa especializada em estruturação de
          marketing, vendas, CRM, dados e IA, com sede em Curitiba / PR e
          atuação em todo o Brasil.
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
          <li>
            Compartilhar informações sobre marketing, vendas, CRM, dados e IA;
          </li>
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
    title: "6. Formulários e dados pessoais",
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
    title: "9. Limitação de responsabilidade",
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
    title: "10. Legislação aplicável e foro",
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
    <LegalPagina
      badge="Regras do site"
      title="Termos de *Uso*"
      description="As condições para navegar no site da UPDO, preencher formulários, acessar conteúdos e utilizar nossas informações."
      atualizacao="Junho de 2026"
      resumo="Estes termos definem o uso permitido do site e dos conteúdos publicados pela UPDO."
      contatos={[
        { icon: FileText, text: "Termos do site" },
        { icon: Mail, text: "contato@updo.com.br" },
        { icon: MapPin, text: "Curitiba / PR" },
      ]}
      sections={sections}
    />
  );
}
