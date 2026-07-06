import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui/Kicker";
import { SITE } from "@/lib/site";

/**
 * Termos de Serviço / Uso (§11 P2). Texto-base institucional (uso do site +
 * agendamento + propriedade intelectual + disclaimer de resultados estéticos).
 * ⚠️ TODO:CONFIRMAR dados do controlador (razão social, CNPJ), foro/comarca e
 * revisão jurídica antes de publicar.
 */
export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Termos de Serviço e de Uso do site da Lu Make Up: condições de uso, agendamento por avaliação, propriedade intelectual e responsabilidades.",
  alternates: { canonical: "/termos-de-servico" },
  robots: { index: true, follow: true },
};

const ATUALIZACAO = "30 de junho de 2026"; // TODO:CONFIRMAR data de vigência

export default function TermosDeServico() {
  return (
    <>
      <header className="bg-ink pb-12 pt-28 lg:pt-36">
        <div className="mx-auto max-w-[760px] px-6 lg:px-8">
          <Kicker>Termos & Condições</Kicker>
          <h1 className="mt-5 font-display text-[2.1rem] font-light leading-[1.12] text-text-on-ink lg:text-[3rem]">
            Termos de Serviço
          </h1>
          <p className="kicker mt-6 text-muted">Última atualização: {ATUALIZACAO}</p>
        </div>
      </header>

      <div className="bg-bone py-20 lg:py-28">
        <div className="prose-lu mx-auto max-w-[760px] px-6 lg:px-8">
          <p>
            Estes Termos de Serviço regem o uso do site da {SITE.name} e o relacionamento
            entre você e a {SITE.name}. Ao navegar por este site e ao entrar em contato
            conosco, você concorda com as condições descritas abaixo. Recomendamos a
            leitura atenta.
          </p>

          <h2>1. Sobre a Lu Make Up</h2>
          <p>
            {SITE.boilerplate} O atendimento é realizado <strong>por avaliação</strong> e
            mediante agendamento prévio.{" "}
            {/* TODO:CONFIRMAR */}
            <em>(A confirmar: razão social, CNPJ e endereço do responsável pelo site.)</em>
          </p>

          <h2>2. Uso do site</h2>
          <p>
            O conteúdo deste site tem finalidade informativa e de apresentação dos serviços.
            Você se compromete a utilizá-lo de forma lícita, sem prejudicar o seu
            funcionamento, a sua segurança ou os direitos de terceiros. É vedado copiar,
            reproduzir ou distribuir o conteúdo sem autorização.
          </p>

          <h2>3. Agendamento e avaliação</h2>
          <ul>
            <li>
              Todo procedimento é precedido de uma <strong>avaliação personalizada</strong>,
              sem compromisso, na qual são orientadas as indicações e os cuidados.
            </li>
            <li>
              O contato para agendamento acontece pelos canais oficiais (WhatsApp e
              unidades indicadas na página de <Link href="/localizacoes">Localizações</Link>).
            </li>
            <li>
              Eventuais condições de remarcação, preparo e pós-procedimento são informadas
              no atendimento. {/* TODO:CONFIRMAR políticas de agendamento/remarcação. */}
            </li>
          </ul>

          <h2>4. Resultados dos procedimentos</h2>
          <p>
            Os resultados da micropigmentação e dos demais procedimentos{" "}
            <strong>variam de pessoa para pessoa</strong>, conforme o tipo de pele, a
            rotina, os cuidados pós-procedimento e características individuais. As imagens e
            os textos deste site são ilustrativos e não constituem garantia de resultado
            idêntico. Este site não substitui a avaliação profissional nem orientação médica.
          </p>

          <h2>5. Propriedade intelectual</h2>
          <p>
            A marca {SITE.name}, o seu logotipo, textos, imagens, layout e demais elementos
            deste site são protegidos por direitos de propriedade intelectual e pertencem à
            {" "}{SITE.name} ou a seus licenciadores. O uso não autorizado é proibido.
          </p>

          <h2>6. Conteúdo de terceiros e links</h2>
          <p>
            Este site pode conter links para plataformas de terceiros (como WhatsApp e
            redes sociais). Não nos responsabilizamos pelo conteúdo ou pelas práticas de
            privacidade desses serviços, regidos por seus próprios termos.
          </p>

          <h2>7. Privacidade e proteção de dados</h2>
          <p>
            O tratamento dos seus dados pessoais segue a nossa{" "}
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>, em
            conformidade com a LGPD (Lei nº 13.709/2018).
          </p>

          <h2>8. Limitação de responsabilidade</h2>
          <p>
            Empregamos esforços para manter as informações do site corretas e atualizadas,
            mas não garantimos que estejam sempre livres de imprecisões ou de indisponibilidade
            técnica. Na medida permitida pela lei, a {SITE.name} não se responsabiliza por
            danos decorrentes do uso do site.
          </p>

          <h2>9. Alterações destes termos</h2>
          <p>
            Estes termos podem ser atualizados a qualquer momento. A versão vigente estará
            sempre disponível nesta página, com a data da última atualização indicada acima.
          </p>

          <h2>10. Legislação aplicável e foro</h2>
          <p>
            Estes termos são regidos pela legislação brasileira. Fica eleito o foro do
            domicílio do consumidor para dirimir eventuais controvérsias, salvo disposição
            legal em contrário.{" "}
            {/* TODO:CONFIRMAR */}
            <em>(A confirmar: comarca/foro de eleição, se aplicável.)</em>
          </p>

          <h2>11. Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser encaminhadas pela nossa página de{" "}
            <Link href="/contato">Contato</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
