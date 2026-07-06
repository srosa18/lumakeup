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
      <div data-comment-id="home.hero" data-comment-label="Home · Hero">
        <Hero />
      </div>
      <div data-comment-id="home.servicos-carrossel" data-comment-label="Home · Carrossel de serviços">
        <ServicesCarousel />
      </div>
      <div data-comment-id="home.beleza-discreta" data-comment-label="Home · A arte da beleza discreta">
        <BelezaDiscreta />
      </div>
      <div data-comment-id="home.be-bold" data-comment-label="Home · Be Bold">
        <BeBold />
      </div>
      <div data-comment-id="home.personalizados" data-comment-label="Home · Serviços personalizados">
        <PersonalizedServices />
      </div>
      <div data-comment-id="home.depoimentos" data-comment-label="Home · Depoimentos">
        <Testimonials />
      </div>
      <div data-comment-id="home.celebridades" data-comment-label="Home · Celebridades">
        <Celebridades />
      </div>
      <div data-comment-id="home.everbrow" data-comment-label="Home · Everbrow">
        <Everbrow />
      </div>
      <div data-comment-id="home.faq" data-comment-label="Home · Perguntas frequentes">
        <Faq />
      </div>
    </>
  );
}
