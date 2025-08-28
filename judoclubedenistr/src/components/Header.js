"use client"; // necessário para usar useState

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo-titulo">
          <Image
            src="/images/Logo_JudoClube.jpg"
            alt="Logo Judô Clube"
            width={80}
            height={80}
          />
          <h1>Judô Clube Denis de Toledo Ribas</h1>
        </div>

        <nav className={`nav ${menuAberto ? "aberto" : ""}`}>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/historia">Nossa História</Link></li>
            <li><Link href="/galeria">Galeria</Link></li>
            <li><Link href="/calendario">Calendário</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><Link href="/sugestoes">Sugestões</Link></li>
          </ul>
        </nav>

        <button
          className="botao-menu"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>
      </div>

      <style jsx>{`
        .header {
          background-color: #f8f8f8;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .logo-titulo {
          display: flex;
          align-items: center;
        }
        .logo-titulo h1 {
          margin-left: 10px;
          font-size: 1.5rem;
        }
        .nav ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav ul li {
          margin: 0 10px;
        }
        .nav ul li a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }
        .botao-menu {
          display: none;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav {
            width: 100%;
            display: none;
            flex-direction: column;
            margin-top: 10px;
          }
          .nav.aberto {
            display: flex;
          }
          .nav ul {
            flex-direction: column;
            align-items: center;
          }
          .nav ul li {
            margin: 5px 0;
          }
          .botao-menu {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
