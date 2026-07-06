import type { Metadata } from "next";
import { Kicker } from "@/components/ui/Kicker";
import { SITE } from "@/lib/site";

/**
 * Política de Privacidade (§8/§11 P2). Estrutura alinhada à LGPD (Lei
 * 13.709/2018). ⚠️ TODO:CONFIRMAR dados do controlador (razão social, CNPJ,
 * endereço), contato do Encarregado (DPO) e ferramentas de cookies/analytics
 * em uso — antes de publicar. Texto-base, sujeito a revisão jurídica.
 */
export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Lu Make Up: como tratamos os seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

const ATUALIZACAO = "30 de junho de 2026"; // TODO:CONFIRMAR data de vigência

export default function PoliticaDePrivacidade() {
  return (
    <>
      <div data-comment-id="privacidade.hero" data-comment-label="Política de Privacidade · Hero">
        <header className="bg-ink pb-12 pt-28 lg:pt-36">
          <div className="mx-auto max-w-[760px] px-6 lg:px-8">
            <Kicker>Privacidade & LGPD</Kicker>
            <h1 className="mt-5 font-display text-[2.1rem] font-light leading-[1.12] text-text-on-ink lg:text-[3rem]">
              Política de Privacidade
            </h1>
            <p className="kicker mt-6 text-muted">Última atualização: {ATUALIZACAO}</p>
          </div>
        </header>
      </div>

      <div data-comment-id="privacidade.conteudo" data-comment-label="Política de Privacidade · Conteúdo">
        <div className="bg-bone py-20 lg:py-28">
          <div className="prose-lu mx-auto max-w-[760px] px-6 lg:px-8">
            <p>
              A {SITE.name} respeita a sua privacidade e está comprometida com a proteção dos
              seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados
              (Lei nº 13.709/2018 — LGPD). Esta política explica quais dados coletamos, como
              os utilizamos e quais são os seus direitos.
            </p>

            <h2>1. Quem é o controlador dos dados</h2>
            <p>
              O controlador dos dados pessoais é a {SITE.name}.{" "}
              {/* TODO:CONFIRMAR */}
              <em>(A confirmar: razão social, CNPJ e endereço completo do controlador.)</em>
            </p>

            <h2>2. Quais dados coletamos</h2>
            <ul>
              <li>
                <strong>Dados de contato</strong>, fornecidos por você ao falar com o ateliê
                (nome, telefone/WhatsApp, e-mail) para agendamento e atendimento.
              </li>
              <li>
                <strong>Dados de navegação</strong>, coletados automaticamente ao visitar o
                site (endereço IP, tipo de dispositivo e navegador, páginas acessadas), por
                meio de cookies e tecnologias semelhantes.
              </li>
              <li>
                <strong>Dados relativos a procedimentos</strong>, quando aplicável e sempre
                com a sua ciência, para a avaliação e a segurança do atendimento.
              </li>
            </ul>

            <h2>3. Para que utilizamos os seus dados</h2>
            <ul>
              <li>Responder a contatos, realizar agendamentos e prestar atendimento.</li>
              <li>Conduzir a avaliação personalizada e garantir a segurança do procedimento.</li>
              <li>Aprimorar o site e a experiência de navegação.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>
                Enviar comunicações sobre serviços, quando houver o seu consentimento — que
                pode ser revogado a qualquer momento.
              </li>
            </ul>

            <h2>4. Base legal do tratamento</h2>
            <p>
              Tratamos os seus dados com fundamento nas hipóteses previstas na LGPD,
              especialmente: o seu consentimento, a execução de procedimentos preliminares e
              do atendimento a seu pedido, o cumprimento de obrigação legal e o legítimo
              interesse, sempre respeitados os seus direitos e liberdades.
            </p>

            <h2>5. Compartilhamento de dados</h2>
            <p>
              Não vendemos os seus dados pessoais. O compartilhamento ocorre apenas quando
              necessário — por exemplo, com prestadores de serviço que nos apoiam (como
              ferramentas de comunicação e hospedagem) ou para cumprir obrigações legais —,
              sempre com salvaguardas adequadas.{" "}
              {/* TODO:CONFIRMAR */}
              <em>(A confirmar: lista de operadores/ferramentas, como WhatsApp, analytics e hospedagem.)</em>
            </p>

            <h2>6. Cookies</h2>
            <p>
              Utilizamos cookies para o funcionamento do site e para entender como ele é
              utilizado. Você pode gerenciar as preferências de cookies no seu navegador.{" "}
              {/* TODO:CONFIRMAR */}
              <em>(A confirmar: banner de consentimento e relação de cookies/analytics em uso.)</em>
            </p>

            <h2>7. Os seus direitos</h2>
            <p>Nos termos da LGPD, você pode, a qualquer momento, solicitar:</p>
            <ul>
              <li>Confirmação da existência de tratamento e acesso aos seus dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Portabilidade e informação sobre o compartilhamento.</li>
              <li>Revogação do consentimento e eliminação dos dados tratados com base nele.</li>
            </ul>

            <h2>8. Segurança e retenção</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger os seus dados contra
              acessos não autorizados e situações de perda ou alteração. Mantemos os dados
              apenas pelo tempo necessário às finalidades informadas ou ao cumprimento de
              obrigações legais.
            </p>

            <h2>9. Encarregado (DPO) e contato</h2>
            <p>
              Para exercer os seus direitos ou esclarecer dúvidas sobre esta política, fale
              com o nosso Encarregado pelo tratamento de dados pessoais.{" "}
              {/* TODO:CONFIRMAR */}
              <em>(A confirmar: nome e e-mail do Encarregado/DPO.)</em>
            </p>

            <h2>10. Alterações desta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A versão vigente estará
              sempre disponível nesta página, com a data da última atualização indicada acima.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
