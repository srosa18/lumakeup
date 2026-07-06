import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { BelezaDiscreta } from "@/components/sections/BelezaDiscreta";
import { BeBold } from "@/components/sections/BeBold";
import { PersonalizedServices } from "@/components/sections/PersonalizedServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { Celebridades } from "@/components/sections/Celebridades";
import { Everbrow } from "@/components/sections/Everbrow";
import { Faq } from "@/components/sections/Faq";

/**
 * Home (réplica do Figma, por módulos):
 *  S1 Hero · S2 Carrossel de serviços · S5 Personalizados (ainda P0 antigo).
 * Próximos módulos: "A arte da beleza discreta", S4 Olhar, S6 Fundadora, etc.
 */
export const metadata: Metadata = {
  title: {
    absolute:
      "Lu Make Up · Ateliê de Micropigmentação de Assinatura em São Paulo",
  },
  description:
    "Ateliê de micropigmentação de sobrancelhas, lábios e olhar, na técnica autoral de Lu Rodrigues desde 2002. Naturalidade que ninguém percebe. Agende sua avaliação, sem compromisso.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <BelezaDiscreta />
      <BeBold />
      <PersonalizedServices />
      <Testimonials />
      <Celebridades />
      <Everbrow />
      <Faq />
    </>
  );
}
