"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PaginaSugestoes() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-start min-h-[80vh] p-8 bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-2xl p-10 shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Sugestões & Reclamações</h1>
          <form className="flex flex-col gap-6" action="https://docs.google.com/forms/d/e/1FAIpQLSfFicticio/formResponse" method="post" target="_blank">
            <div className="flex flex-col">
              <label htmlFor="assunto" className="font-semibold mb-2 text-gray-700">Assunto:</label>
              <select name="assunto" id="assunto" className="p-4 rounded-xl border border-gray-300 focus:border-blue-600 outline-none transition">
                <option value="aulas"> Aulas</option>
                <option value="academia">Judô Clube </option>
                <option value="site">Site</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="mensagem" className="font-semibold mb-2 text-gray-700">Sua mensagem:</label>
              <textarea name="mensagem" id="mensagem" rows={6} required placeholder="Escreva sua sugestão ou reclamação..." className="p-5 rounded-xl border border-gray-300 focus:border-blue-600 outline-none resize-vertical transition"/>
            </div>
            <button type="submit" className="p-5 rounded-xl bg-blue-600 hover:bg-blue-800 text-white font-semibold transition">Enviar</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
