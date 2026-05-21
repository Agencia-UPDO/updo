import { Hero } from "@/components/sections/marketing-educacional/hero";
import { Clients } from "@/components/sections/marketing-educacional/clients";
import { ConversionBarriers } from "@/components/sections/marketing-educacional/conversion-barriers";
import { Services } from "@/components/sections/marketing-educacional/services";
import { Cases } from "@/components/sections/marketing-educacional/cases";
import { FAQ } from "@/components/sections/marketing-educacional/faq";
import { Contact } from "@/components/sections/marketing-educacional/contact";
import { VideoProof } from "@/components/sections/marketing-educacional/video-proof";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aumento de Matrículas | Estratégia e Marketing Educacional | UPDO",
  description: "Sistema previsível de captação de alunos para instituições de ensino. Consultoria em marketing educacional, processos comerciais e inteligência de dados.",
  openGraph: {
    title: "Aumento de Matrículas | UPDO",
    description: "Sistema previsível de captação de alunos para instituições de ensino.",
    images: [
      {
        url: "/Imagens/sala-cheia.jpg",
        width: 1200,
        height: 800,
        alt: "Estratégia de Marketing Educacional UPDO",
      },
    ],
  },
};

export default function MarketingEducacionalPage() {
  return (
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
  );
}
