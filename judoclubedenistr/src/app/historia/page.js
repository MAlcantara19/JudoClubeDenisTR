"use client"; // necessário para useState e useEffect

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const citacoes = [
  "O judô é o caminho da gentileza e do autocontrole.",
  "Disciplina e respeito são os fundamentos do verdadeiro atleta.",
  "Cada queda é uma lição, cada vitória é uma conquista.",
  "O crescimento no tatame reflete o crescimento na vida."
];

export default function PaginaHistoria() {
  const [citacao, setCitacao] = useState("");

  useEffect(() => {
    const aleatoria = citacoes[Math.floor(Math.random() * citacoes.length)];
    setCitacao(aleatoria);
  }, []);

  return (
    <>
      <Header />

      <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Nossa História</h1>

        <section style={fadeIn}>
          <p>
            O Judô Clube Denis de Toledo Ribas nasceu com o propósito de formar atletas e cidadãos,
            transmitindo valores como disciplina, respeito e superação. Nossa missão é desenvolver o judô 
            como ferramenta de educação e transformação social.
          </p>
        </section>

        <section style={fadeIn}>
          <p>
            Continuando a tradição de nosso antecessor, Shihan Allan Kardec, nosso clube mantém os princípios
            do judô, incentivando alunos de todas as idades, desde iniciantes até aspirantes à faixa preta.
          </p>
        </section>

        <section style={fadeIn}>
          <h3>Citação inspiradora do dia:</h3>
          <blockquote style={{ fontStyle: "italic", color: "#555" }}>
            {citacao}
          </blockquote>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

// Estilo fade-in
const fadeIn = {
  animation: "fadeIn 1s ease-in",
  marginBottom: "20px"
};
