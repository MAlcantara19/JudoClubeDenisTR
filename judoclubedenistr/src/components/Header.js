"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo + Título */}
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
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

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
          background-color: #0c1631;
          color: white;
          box-shadow: 0 4px 6px #2231a2;
          position: relative;
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
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .logo {
          border-radius: 9999px;
          border: 2px solid white;
        }

        .titulo {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }

        /* Navegação web */
        .nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .nav a {
          text-decoration: none !important;
          color: white;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          display: inline-block;
          transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }

        .nav a:hover {
          color: #ffd700;
          background-color: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .nav a:active {
          transform: scale(0.95);
        }

        /* Botão menu mobile */
        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 2rem;
          color: white;
          cursor: pointer;
        }

        /* Mobile drawer */
        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }

          .nav {
            position: fixed;
            top: 0;
            right: -250px;
            width: 250px;
            height: 100%;
            background-color: #0c1631;
            flex-direction: column;
            padding: 2rem 1rem;
            gap: 1rem;
            transition: right 0.3s ease;
            z-index: 1000;
          }

          .nav.open {
            right: 0;
          }

          .container {
            align-items: center;
          }

          .logo-titulo {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
}
