import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <h1>Bem-vindo ao Judô Clube Denis de Toledo Ribas</h1>
          <p>Tradição, disciplina e respeito dentro e fora do tatame.</p>

          <h3>Treino Adulto</h3>
          <h4>Professor/Sensei Denis</h4>
          <p>Aulas todos os domingos de 10h às 12h.</p>
          <p>Local: Grupo dos Treze, R. Prefeito Samir Nasser, 357, Vila Isabel, Três Rios/RJ.</p>
          <p>Recomendado para adolescentes e adultos.</p>

          <h3>Treinos para Crianças</h3>
          <h4>Professor/Sensei Denis</h4>
          <p>Aulas de terça a sexta-feira, 17:30 às 19h.</p>
          <p>Entre em contato para verificar horários disponíveis.</p>
          <p>Local: Colégio Santa Clara, R. Sete de Setembro, 145 - Três Rios, RJ.</p>
          <p>Recomendado para crianças a partir de 5 anos.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
