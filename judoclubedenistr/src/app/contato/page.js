"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Contato() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Contato</h1>
        <h4 className="text-xl text-center">Sensei Denis</h4>

        {/* Telefone + WhatsApp + QR Code na mesma linha */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
          <span>📞 Telefone e WhatsApp: <a
            href="https://w.app/judoclubedenisdetoledoribas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:text-blue-700 transition"
            > (24) 9 8817-1660</a>
          </span>

          <div className="relative w-20 h-20">
            <Image
              src="/images/QR_Code_Wpp_Denis.png"
              alt="QR Code WhatsApp Sensei Denis"
              width={80}
              height={80}
            />

          </div>
        </div>

        <p className="text-center text-lg">
          📍 Endereço: R. Prefeito Samir Nasser, 357, Vila Isabel, Três Rios/RJ.
        </p>

        {/* Google Maps */}
        <div className="w-full aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.4734020420983!2d-43.19181482471309!3d-22.107919079825383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98f5ef2aa08349%3A0xf09f56b14b24c33!2sGrupo%20Dos%20Treze!5e0!3m2!1spt-BR!2sbr!4v1756237560936!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização"
          ></iframe>
        </div>
      </main>

      <Footer />
    </>
  );
}
