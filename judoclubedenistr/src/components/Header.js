"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
            /></Link>

          <h1 className="titulo"><Link href="/" className="nav-link">Judô Clube Denis de Toledo Ribas</Link></h1>
        </div>

        {/* Navegação */}
        <nav className="nav">
          <Link href="/" className="nav-link">Início</Link>
          <Link href="/historia" className="nav-link">Nossa História</Link>
          <Link href="/galeria" className="nav-link">Galeria</Link>
          <Link href="/calendario" className="nav-link">Calendário</Link>
          <Link href="/contato" className="nav-link">Contato</Link>
          <Link href="/sugestoes" className="nav-link">Sugestões</Link>
        </nav>

      </div>

      <style jsx>{`
        .header {
          width: 100%;
          background-color: #0c1631;
          color: white;
          box-shadow: 0 4px 6px #2231a2;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .logo-titulo {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .logo {
          border-radius: 9999px;
          border: 2px solid white;
        }

        .titulo {
          font-size: 1.5rem;
          font-weight: bold;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 1rem;
          flex: 1;
          min-width: 200px;
        }

        .nav a {
          text-decoration: none !important;
          color: white;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          display: inline-block; /* necessário para transform funcionar */
          transition: transform 0.3s ease, background-color 0.3s ease,
            color 0.3s ease;
        }

        .nav a:hover {
          color: #ffd700;
          background-color: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .nav a:active {
          transform: scale(0.95);
        }

        @media (max-width: 768px) {
          .titulo {
            font-size: 1.2rem;
          }
          .nav {
            justify-content: center;
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav {
            justify-content: flex-start;
            gap: 0.5rem;
            width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </header>
  );
}
