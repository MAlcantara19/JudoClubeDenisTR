"use client";

import { useState } from "react";

export default function GaleriaCliente({ albuns }) {
  const [lightboxAtivo, setLightboxAtivo] = useState(false);
  const [albumAtual, setAlbumAtual] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const abrirLightbox = (album, indice) => {
    setAlbumAtual(album.imagens);
    setIndiceAtual(indice);
    setLightboxAtivo(true);
  };

  const fecharLightbox = () => setLightboxAtivo(false);
  const imagemAnterior = () =>
    setIndiceAtual((prev) => (prev - 1 + albumAtual.length) % albumAtual.length);
  const proximaImagem = () =>
    setIndiceAtual((prev) => (prev + 1) % albumAtual.length);

  return (
    <section className="galeria">
      {albuns.map((album, index) => (
        <div className="album" key={index}>
          <h2>{album.titulo}</h2>
          <div className="imagens-album">
            {album.imagens.map((imgSrc, idx) => (
              <img
                src={imgSrc}
                alt={`Foto ${idx + 1}`}
                key={idx}
                onClick={() => abrirLightbox(album, idx)}
                style={{ cursor: "pointer", maxWidth: "150px", margin: "5px" }}
              />
            ))}
          </div>
        </div>
      ))}

      {lightboxAtivo && (
        <div style={estiloLightbox}>
          <span onClick={fecharLightbox} style={estiloFechar}>&times;</span>
          <span onClick={imagemAnterior} style={estiloNav}>&#10094;</span>
          <img src={albumAtual[indiceAtual]} alt="Zoom" style={{ maxHeight: "80vh" }} />
          <span onClick={proximaImagem} style={estiloNav}>&#10095;</span>
          <div style={{ color: "#fff", marginTop: "10px" }}>
            {`${indiceAtual + 1} / ${albumAtual.length}`}
          </div>
        </div>
      )}
    </section>
  );
}

// Lightbox estilos
const estiloLightbox = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.9)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const estiloFechar = {
  position: "absolute",
  top: "20px",
  right: "35px",
  color: "#fff",
  fontSize: "40px",
  fontWeight: "bold",
  cursor: "pointer"
};

const estiloNav = {
  position: "absolute",
  top: "50%",
  color: "#fff",
  fontSize: "50px",
  fontWeight: "bold",
  cursor: "pointer",
  userSelect: "none",
  padding: "10px"
};
