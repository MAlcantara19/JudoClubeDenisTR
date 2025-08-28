"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PaginaCalendario() {
  return (
    <>
      <Header />

      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Calendário de Aulas e Eventos</h1>

        <h2 style={{ textAlign: "center" }}>
          Calendário Judô Clube Denis de Toledo Ribas
        </h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&src=YjZiNzg5Y2ZhODFlYWFjZmNhMWUwN2ZmY2NhMjM3YWQ2NzJhYTM2M2M3ZWQ3YmQzM2ViNmQ0NGMxZjYzN2Y1NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%233f51b5&color=%23d50000"
          width="100%"
          height="600"
          style={{ border: "solid 1px #777", marginTop: "20px" }}
          frameBorder="0"
          scrolling="no"
          title="Calendário com Feriados"
        />

        <br /><br /><br />

        <h2 style={{ textAlign: "center" }}>
          Calendário Confederada Rio 2ª Edição
        </h2>
        <iframe
          src="/pdf/Calendario_Confederada_2025.pdf"
          width="100%"
          height="600"
          style={{ border: 0, marginTop: "10px" }}
          title="Calendário Confederada Rio"
        />
      </main>

      <Footer />
    </>
  );
}
