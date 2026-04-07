import { Hero } from "@/components/sections/marketing-educacional/hero";
import { Clients } from "@/components/sections/marketing-educacional/clients";
import { Neuromarketing } from "@/components/sections/marketing-educacional/neuromarketing";
import { Methodology } from "@/components/sections/marketing-educacional/methodology";
import { SystemPreview } from "@/components/sections/marketing-educacional/system-preview";
import { Services } from "@/components/sections/marketing-educacional/services";
import { Team } from "@/components/sections/marketing-educacional/team";
import { Cases } from "@/components/sections/marketing-educacional/cases";
import { Contact } from "@/components/sections/marketing-educacional/contact";
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
      <Neuromarketing />
      <Methodology />
      <SystemPreview />
      <Services />
      <Team />
      <Cases />
      <Contact />
    </div>
  );
}
