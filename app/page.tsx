import { Hero } from "@/components/sections/Hero";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { BelezaDiscreta } from "@/components/sections/BelezaDiscreta";
import { PersonalizedServices } from "@/components/sections/PersonalizedServices";

/**
 * Home (réplica do Figma, por módulos):
 *  S1 Hero · S2 Carrossel de serviços · S5 Personalizados (ainda P0 antigo).
 * Próximos módulos: "A arte da beleza discreta", S4 Olhar, S6 Fundadora, etc.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <BelezaDiscreta />
      <PersonalizedServices />
    </>
  );
}
