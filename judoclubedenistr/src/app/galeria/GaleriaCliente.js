"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Exemplo de álbuns, você pode substituir por props ou fetch
const albumsExemplo = [
  {
    titulo: "Treinos 2025",
    imagens: [
      "/images/album1/foto1.jpg",
      "/images/album1/foto2.jpg",
      "/images/album1/foto3.jpg"
    ]
  },
  {
    titulo: "Eventos",
    imagens: [
      "/images/album2/foto1.jpg",
      "/images/album2/foto2.jpg"
    ]
  }
];

export default function Galeria() {
  const [lightboxVisivel, setLightboxVisivel] = useState(false);
  const [albumAtual, setAlbumAtual] = useState([]);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const abrirLightbox = (album, indice) => {
    setAlbumAtual(album.imagens);
    setIndiceAtual(indice);
    setLightboxVisivel(true);
  };

  const fecharLightbox = () => setLightboxVisivel(false);
  const prevImage = () => setIndiceAtual((i) => (i - 1 + albumAtual.length) % albumAtual.length);
  const nextImage = () => setIndiceAtual((i) => (i + 1) % albumAtual.length);

  return (
    <>
      <Header />

      <main style={{ padding: "20px" }}>
        <h1>Galeria</h1>
        <p>Confira nossos momentos registrados:</p>

        {albumsExemplo.map((album, idx) => (
          <div key={idx}>
            <h2>{album.titulo}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {album.imagens.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Foto ${i + 1}`}
                  width={150}
                  height={150}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                  onClick={() => abrirLightbox(album, i)}
                />
              ))}
            </div>
          </div>
        ))}

        {lightboxVisivel && (
          <div style={lightboxStyles}>
            <span style={fecharBtnStyle} onClick={fecharLightbox}>&times;</span>
            <span style={navBtnStyle} onClick={prevImage}>&#10094;</span>
            <Image
              src={albumAtual[indiceAtual]}
              alt="Zoom"
              width={800}
              height={600}
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            <span style={navBtnStyle} onClick={nextImage}>&#10095;</span>
            <div style={{ color: "#fff", marginTop: "10px" }}>
              {indiceAtual + 1} / {albumAtual.length}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

// Estilos do lightbox
const lightboxStyles = {
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

const fecharBtnStyle = {
  position: "absolute",
  top: "20px",
  right: "35px",
  color: "#fff",
  fontSize: "40px",
  fontWeight: "bold",
  cursor: "pointer"
};

const navBtnStyle = {
  position: "absolute",
  top: "50%",
  color: "#fff",
  fontSize: "50px",
  fontWeight: "bold",
  cursor: "pointer",
  userSelect: "none",
  padding: "10px"
};
