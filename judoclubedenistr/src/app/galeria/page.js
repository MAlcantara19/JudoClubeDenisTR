"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PaginaGaleria() {
  const [albums, setAlbums] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Busca álbuns via API interna
  useEffect(() => {
    fetch("/api/albuns")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  const openLightbox = (album, index) => {
    setCurrentAlbum(album.images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    if (!currentAlbum.length) return;
    setCurrentIndex(
      (currentIndex - 1 + currentAlbum.length) % currentAlbum.length
    );
  };

  const nextImage = () => {
    if (!currentAlbum.length) return;
    setCurrentIndex((currentIndex + 1) % currentAlbum.length);
  };

  return (
    <>
      <Header />

      <main>
        <h1>Galeria</h1>
        <p>Confira nossos momentos registrados:</p>

        <section className="gallery">
          {albums.map((album, index) => (
            <div className="album" key={index}>
              <h2>{album.title}</h2>
              <div className="album-images">
                {album.images.map((imgSrc, idx) => (
                  <div
                    className="card"
                    key={idx}
                    onClick={() => openLightbox(album, idx)}
                  >
                    <img src={imgSrc} alt={`Foto ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {lightboxOpen && currentAlbum.length > 0 && (
          <div className="lightbox" onClick={closeLightbox}>
            <span
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              &times;
            </span>
            <span
              className="prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#10094;
            </span>
            <img src={currentAlbum[currentIndex]} alt="Zoom" />
            <span
              className="next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#10095;
            </span>
            <div className="caption">
              {currentIndex + 1} / {currentAlbum.length}
            </div>
          </div>
        )}
      </main>

      <Footer />

      <style jsx>{`
        main {
          padding: 2rem 2rem;
        }

        .gallery {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          padding: 2rem 0;
        }

        .album {
          background: #ffffffff;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.68);
        }

        .album h2 {
          margin-bottom: 1.1rem;
          color: #0d1b2a;
          text-transform: capitalize;
          text-align: center;
        }

        .album-images {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          justify-content: center;
        }

        .card img {
          display: block;
          width: 75%;
          height: auto;
          min-height: 100px;
          border-radius: 8px;
          cursor: pointer;
          object-fit: cover;
          transition: transform 0.3s, box-shadow 0.3s;
          max-width: 200px;
        }

        .lightbox {
          display: flex;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          justify-content: center;
          align-items: center;
          flex-direction: column;
          animation: fadeIn 0.3s ease-in-out;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 80%;
          border-radius: 10px;
          transition: transform 0.3s;
        }

        .lightbox .caption {
          color: #fff;
          margin-top: 1rem;
          font-size: 1rem;
          text-align: center;
        }

        .lightbox .close,
        .lightbox .prev,
        .lightbox .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #ffffff;
          font-size: 2rem;
          font-weight: bold;
          padding: 0.5rem 1rem;
          cursor: pointer;
          user-select: none;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5px;
          transition: background 0.3s;
        }

        .lightbox .close {
          top: 10%;
          right: 5%;
          transform: none;
        }

        .lightbox .prev {
          left: 5%;
        }

        .lightbox .next {
          right: 5%;
        }

        .lightbox .close:hover,
        .lightbox .prev:hover,
        .lightbox .next:hover {
          background: rgba(255, 215, 0, 0.8);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media screen and (max-width: 768px) {
          main {
            padding: 1.5rem;
          }
          .album-images {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (max-width: 480px) {
          .album-images {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
