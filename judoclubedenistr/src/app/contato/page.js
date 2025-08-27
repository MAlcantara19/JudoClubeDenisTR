import Cabecalho from "../../components/Header";
import Rodape from "../../components/Footer";
import Image from "next/image";

export default function PaginaContato() {
  return (
    <>
      <Cabecalho />

      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Contato</h1>
        <h4>Sensei Denis</h4>

        <p>
          📞 Telefone: (24) 9 8817-1660{" "}
          <a
            href="https://w.app/judoclubedenisdetoledoribas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "20px" }}
          >
            WhatsApp
          </a>{" "}
          <span style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "15px" }}>
            <Image
              src="/images/QR_Code_Wpp_Denis.png"
              alt="QR Code WhatsApp Sensei Denis"
              width={80}
              height={80}
            />
          </span>
        </p>

        <p>📍 Endereço: R. Prefeito Samir Nasser, 357, Vila Isabel, Três Rios/RJ.</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.4734020420983!2d-43.19181482471309!3d-22.107919079825383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98f5ef2aa08349%3A0xf09f56b14b24c33!2sGrupo%20Dos%20Treze!5e0!3m2!1spt-BR!2sbr!4v1756237560936!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0, marginTop: "20px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização"
        ></iframe>
      </main>

      <Rodape />
    </>
  );
}
