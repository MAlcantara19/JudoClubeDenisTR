"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Contato() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: "99%", margin: "0 auto", padding: "2rem", gap: "2rem", display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center" }}>Contato</h1>
        <h2 style={{ textAlign: "center" }}>Sensei Denis</h2>

        {/* Telefone + WhatsApp + QR Code */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1.5rem" }}>
          <span>📞 Telefone e WhatsApp: <a href="https://w.app/judoclubedenisdetoledoribas" target="_blank" rel="noopener noreferrer">(24) 9 8817-1660</a></span>
          <Image src="/images/QR_Code_Wpp_Denis.png" alt="QR Code WhatsApp Sensei Denis" width={80} height={80} />
        </div>

        {/* Endereços e mapas */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          {/* Endereço 1 - Grupo dos Treze */}
          <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
            <h3 style={{ textAlign: "center" }}>Grupo dos Treze:</h3>
            <p style={{ textAlign: "center" }}>R. Prefeito Samir Nasser, 357, Vila Isabel, Três Rios/RJ</p>
            <iframe
              title="Endereço Grupo dos 13"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.4734020420983!2d-43.19181482471309!3d-22.107919079825383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98f5ef2aa08349%3A0xf09f56b14b24c33!2sGrupo%20Dos%20Treze!5e0!3m2!1spt-BR!2sbr!4v1756237560936!5m2!1spt-BR!2sbr"
              width="95%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Endereço 2 - Colégio Santa Clara */}
          <div style={{ flex: "1 1 400px", minWidth: "300px" }}>
            <h3 style={{ textAlign: "center" }}>Colégio Santa Clara:</h3>
            <p style={{ textAlign: "center" }}>R. Sete de Setembro, 145, Centro, Três Rios/RJ</p>
            <iframe
              title="Endereço Colégio Santa Clara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.2091232043745!2d-43.20665359999999!3d-22.118001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98f67973ad2335%3A0x2b2133233bfb2181!2sCol%C3%A9gio%20Santa%20Clara%20de%20Tr%C3%AAs%20Rios!5e0!3m2!1spt-BR!2sbr!4v1732285449197!5m2!1spt-BR!2sbr"
              width="95%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
