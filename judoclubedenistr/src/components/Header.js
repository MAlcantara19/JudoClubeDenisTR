"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest(".nav") && !e.target.closest(".menu-btn")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        {/* Logo + Título web */}
        <div className="logo-titulo">
          <Link href="/" className="nav-link">
            <Image
              src="/images/Logo_JudoClube.jpg"
              alt="Logo Judô Clube"
              width={110}
              height={110}
              className="logo"
            />
          </Link>
          <h1 className="titulo">
            <Link href="/" className="nav-link">
              Judô Clube Denis de Toledo Ribas
            </Link>
          </h1>
        </div>

        {/* Botão menu mobile */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        {/* Overlay mobile */}
        <div className={`overlay ${menuOpen ? "active" : ""}`} />

        {/* Navegação */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link href="/historia" className="nav-link" onClick={() => setMenuOpen(false)}>Nossa História</Link>
          <Link href="/galeria" className="nav-link" onClick={() => setMenuOpen(false)}>Galeria</Link>
          <Link href="/calendario" className="nav-link" onClick={() => setMenuOpen(false)}>Calendário</Link>
          <Link href="/contato" className="nav-link" onClick={() => setMenuOpen(false)}>Contato</Link>
          <Link href="/sugestoes" className="nav-link" onClick={() => setMenuOpen(false)}>Sugestões</Link>
        </nav>
      </div>

      <style jsx>{`
        .header {
          width: 100%;
          background-color: rgba(71, 80, 201, 1);
          color: white;
          box-shadow: 0 4px 6px #131946ff;
          position: relative;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-titulo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          border-radius: 9999px;
          border: 2px solid white;
        }

        .titulo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* Navbar web - compacta e flutuante */
        .nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          width: auto; 
          background-color: rgba(106, 131, 201, 1);
          padding: 0.3rem 1rem;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          color: black;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .nav a {
          color: black;
        }

        .nav a:hover {
          color: #ffd700;
          background-color: rgba(255,255,255,0.2);
          transform: scale(1.05);
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 2rem;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu-btn {
            display: block;
            align-self: flex-start;
          }

          .nav {
            position: fixed;
            top: 0;
            left: -250px;
            width: 250px;
            height: 100%;
            background-color: #7ac2f7; 
            flex-direction: column;
            padding: 0.5rem 0.5rem; /* vertical + horizontal reduzidos */
            gap: 0.6rem; /* menos espaço entre itens */
            border-radius: 0;
            box-shadow: none;
            transition: left 0.3s ease;
            z-index: 1000;
          }

          .nav.open {
            left: 0;
          }

          .overlay {
            display: ${menuOpen ? "block" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(41, 80, 151, 1);
            z-index: 900;
          }

          .nav a {
            padding: 0.5rem 0.3rem; /* padding reduzido nos links */
          }
        }
      `}</style>
    </header>
  );
}
