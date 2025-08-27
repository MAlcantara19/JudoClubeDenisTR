"use client"; // necessário se usar interatividade, mas aqui é opcional

import Cabecalho from "../../components/Header";
import Rodape from "../../components/Footer";

export default function PaginaSugestoes() {
  return (
    <>
      <Cabecalho />

      <main style={{
        minHeight: "80vh",
        backgroundColor: "#f4f6f8",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}>
          <h1 style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#1a202c",
            marginBottom: "30px",
          }}>
            Sugestões & Reclamações
          </h1>

          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSfFicticio/formResponse"
            method="post"
            target="_blank"
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            {/* Assunto */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="assunto" style={{ fontWeight: "600", marginBottom: "8px", color: "#333" }}>
                Assunto:
              </label>
              <select
                name="assunto"
                id="assunto"
                style={{
                  padding: "15px",
                  borderRadius: "15px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  color: "#333",
                  outline: "none",
                  transition: "0.3s",
                }}
                onFocus={(e) => e.target.style.borderColor = "#3182ce"}
                onBlur={(e) => e.target.style.borderColor = "#ccc"}
              >
                <option value="site">Sobre o Site</option>
                <option value="academia">Sobre a Academia/Aulas</option>
              </select>
            </div>

            {/* Mensagem */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="mensagem" style={{ fontWeight: "600", marginBottom: "8px", color: "#333" }}>
                Sua mensagem:
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                rows="6"
                required
                placeholder="Escreva sua sugestão ou reclamação..."
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                  resize: "vertical",
                  outline: "none",
                  transition: "0.3s",
                  color: "#333",
                }}
                onFocus={(e) => e.target.style.borderColor = "#3182ce"}
                onBlur={(e) => e.target.style.borderColor = "#ccc"}
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              style={{
                padding: "18px",
                borderRadius: "15px",
                backgroundColor: "#3182ce",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#2b6cb0"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#3182ce"}
            >
              Enviar
            </button>
          </form>
        </div>
      </main>

      <Rodape />
    </>
  );
}
