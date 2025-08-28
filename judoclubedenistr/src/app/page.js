import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <section className="hero">
          <h1>Bem-vindo ao Judô Clube Denis de Toledo Ribas</h1>
          <p>Tradição, disciplina e respeito dentro e fora do tatame.</p>

          <div style={{ margin: "40px 0" }}>
            <h3>Treino Adulto</h3>
            <h4>Professor/Sensei Denis</h4>
            <p>Aulas todos os domingos de 10h às 12h.</p>
            <p>
              Local: Grupo dos Treze, R. Prefeito Samir Nasser, 357, Vila Isabel,
              Três Rios/RJ. (Verificar aba Contato acima).
            </p>
            <p>Recomendado para adolescentes e adultos.</p>
          </div>

          <div style={{ margin: "40px 0" }}>
            <h3>Treinos para Crianças</h3>
            <h4>Professor/Sensei Denis</h4>
            <p>Aulas de terça-feira à sexta-feira, entre 17:30 e 19h.</p>
            <p>
              Entre em contato conosco pelo telefone/Whatsapp na aba Contato
              para verificar o melhor horário disponível para a criança.
            </p>
            <p>
              Local: Colégio Santa Clara, R. Sete de Setembro, 145 - Três Rios, RJ.
            </p>
            <p>Recomendado para crianças a partir de 5 anos.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
