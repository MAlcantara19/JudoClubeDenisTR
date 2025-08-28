import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Calendario() {
  return (
    <>
      <Header />

      <main
        style={{
          padding: "2rem 1rem", // mais espaço acima e abaixo
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem", // espaçamento entre todos os elementos
        }}
      >
        <h1 style={{ margin: 0 }}>Calendário de Aulas e Eventos</h1>

        <h2 style={{ textAlign: "center", margin: "0 0 1rem 0" }}>
          Calendário Judô Clube Denis de Toledo Ribas
        </h2>

        <div
          style={{
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&src=YjZiNzg5Y2ZhODFlYWFjZmNhMWUwN2ZmY2NhMjM3YWQ2NzJhYTM2M2M3ZWQ3YmQzM2ViNmQ0NGMxZjYzN2Y1NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%233f51b5&color=%23d50000"
            style={{
              border: "solid 1px #777",
              width: "95%",
              maxWidth: "1200px",
              minHeight: "350px",
              height: "600px",
            }}
            frameBorder="0"
            scrolling="auto"
            title="Calendário com Feriados"
          />
        </div>

        <h2 style={{ textAlign: "center", margin: "2rem 0 1rem 0" }}>
          Calendário Confederada Rio 2ª Edição
        </h2>

        <div
          style={{
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <iframe
            src="pdf/Calendario_Confederada_2025.pdf"
            style={{
              border: 0,
              width: "95%",
              maxWidth: "1200px",
              minHeight: "350px",
              height: "800px",
            }}
            title="Calendário Confederada Rio"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
