"use client";

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
    setCitacao(citacoes[Math.floor(Math.random() * citacoes.length)]);
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="space-y-4 animate-fadeIn">
          <h1 className="text-3xl font-bold text-center">Nossa História</h1>
          <p>
            O Judô Clube Denis de Toledo Ribas nasceu com o propósito de formar atletas e cidadãos,
            transmitindo valores como disciplina, respeito e superação.
          </p>
          <p>
            Continuando a tradição de nosso antecessor, Shihan Allan Kardec, nosso clube mantém os princípios
            do judô, incentivando alunos de todas as idades, desde iniciantes até aspirantes à faixa preta.
          </p>
        </section>

        <section className="text-center space-y-2 animate-fadeIn">
          <h3 className="text-xl font-semibold">Citação inspiradora do dia:</h3>
          <blockquote className="italic text-gray-600">{citacao}</blockquote>
        </section>
      </main>
      <Footer />
    </>
  );
}
