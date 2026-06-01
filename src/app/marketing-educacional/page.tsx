import { Hero } from "@/components/sections/marketing-educacional/hero";
import { Clients } from "@/components/sections/marketing-educacional/clients";
import { ConversionBarriers } from "@/components/sections/marketing-educacional/conversion-barriers";
import { Services } from "@/components/sections/marketing-educacional/services";
import { Cases } from "@/components/sections/marketing-educacional/cases";
import { FAQ } from "@/components/sections/marketing-educacional/faq";
import { Contact } from "@/components/sections/marketing-educacional/contact";
import { VideoProof } from "@/components/sections/marketing-educacional/video-proof";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marketing Educacional | Captação de Alunos e Matrículas",
  description:
    "Marketing educacional para faculdades, pós-graduações e escolas. Estruturamos mídia, landing pages, CRM e comercial para gerar matrículas com previsibilidade.",
  alternates: {
    canonical: "https://updo.com.br/marketing-educacional",
  },
  openGraph: {
    title: "Marketing Educacional | Captação de Alunos e Matrículas",
    description:
      "Mídia, landing pages, CRM e processo comercial para faculdades, pós-graduações e escolas captarem alunos com previsibilidade.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Estratégia de Marketing Educacional UPDO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Educacional | Captação de Alunos e Matrículas",
    description:
      "Mídia, landing pages, CRM e processo comercial para faculdades, pós-graduações e escolas captarem alunos com previsibilidade.",
  },
};

export default function MarketingEducacionalPage() {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing Educacional",
    description:
      "Sistema previsível de captação de alunos para instituições de ensino superior e básico. Inclui gestão de mídia paga, CRM educacional, treinamento de equipe comercial e Radar de Matrículas.",
    provider: {
      "@type": "Organization",
      name: "UPDO",
      url: "https://updo.com.br",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Francisco Rocha, 198",
        addressLocality: "Curitiba",
        addressRegion: "PR",
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    serviceType: "Marketing Educacional",
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como poderei acompanhar o desempenho das campanhas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Transparência é um dos nossos pilares. Além do acesso em tempo real ao Dashboard do seu Radar de Matrículas, realizamos reuniões semanais de performance para alinhar métricas, ajustar rotas e garantir que a meta de captação esteja no caminho certo.",
        },
      },
      {
        "@type": "Question",
        name: "A UPDO substitui o meu time de marketing ou agencia atual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não necessariamente. Atuamos como uma camada de inteligência estratégica e alta performance. Podemos trabalhar em conjunto com seu time interno, fornecendo a engenharia de dados e o neuromarketing que muitas vezes as equipes generalistas não dominam.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para o sistema comecar a gerar leads qualificados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nosso processo de on-boarding e setup leva, em média, de 10 a 15 dias. Após o go-live, é comum começarmos a ver os primeiros leads qualificados nas primeiras 48 a 72 horas de campanha ativa.",
        },
      },
      {
        "@type": "Question",
        name: "O Radar de Matriculas se integra ao meu CRM atual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Radar de Matrículas é um sistema próprio e exclusivo da UPDO, desenvolvido para funcionar de forma independente. Ele não depende da integração com o seu CRM para entregar o que propõe: um panorama estratégico e visual completo de todas as matrículas da sua instituição.",
        },
      },
      {
        "@type": "Question",
        name: "Alem da gestao de trafego, quais outras entregas a UPDO realiza?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nossa consultoria é 360 graus. Além da performance, entregamos o Treinamento de Neuromarketing para sua equipe comercial e o Desenvolvimento do Playbook de Vendas Educacional: um guia prático e replicável que padroniza o seu processo de matrículas para garantir escala.",
        },
      },
    ],
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://updo.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marketing Educacional",
        item: "https://updo.com.br/marketing-educacional",
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-marketing-educacional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-marketing-educacional-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <Script
        id="schema-marketing-educacional-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <div className="flex flex-col">
        <Hero />
        <Clients />
        <ConversionBarriers />
        <Cases />
        <Contact />
        <VideoProof />
        <Services />
        <FAQ />
      </div>
    </>
  );
}
