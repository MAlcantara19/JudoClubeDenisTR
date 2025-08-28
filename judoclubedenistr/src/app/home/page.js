import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto p-6 flex flex-col gap-10">
        <section className="hero text-center space-y-4">
          <h1 className="text-4xl font-bold">Bem-vindo ao Judô Clube Denis de Toledo Ribas</h1>
          <p className="text-gray-700">Tradição, disciplina e respeito dentro e fora do tatame.</p>

          <div className="mt-6 space-y-3">
            <h3 className="text-2xl font-semibold">Treino Adulto</h3>
            <h4 className="text-lg text-gray-800">Professor/Sensei Denis</h4>
            <p>Aulas todos os domingos de 10h às 12h.</p>
            <p>Local: Grupo dos Treze, R. Prefeito Samir Nasser, 357, Vila Isabel, Três Rios/RJ.</p>
            <p>Recomendado para adolescentes e adultos.</p>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-2xl font-semibold">Treinos para Crianças</h3>
            <h4 className="text-lg text-gray-800">Professor/Sensei Denis</h4>
            <p>Aulas de terça a sexta-feira, 17:30 às 19h.</p>
            <p>Entre em contato para verificar horários disponíveis.</p>
            <p>Local: Colégio Santa Clara, R. Sete de Setembro, 145 - Três Rios, RJ.</p>
            <p>Recomendado para crianças a partir de 5 anos.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
