import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { Problems } from "@/components/sections/problems";
import { Methodology } from "@/components/sections/methodology";
import { Services } from "@/components/sections/services";
import { Cases } from "@/components/sections/cases";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Clients />
      <Problems />
      <Methodology />
      <Services />
      <Cases />
      <Contact />
    </div>
  );
}
