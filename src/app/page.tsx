import { Hero } from "@/components/sections/hero";
import { Methodology } from "@/components/sections/methodology";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Methodology />
      {/* Outras seções virão aqui */}
    </div>
  );
}
