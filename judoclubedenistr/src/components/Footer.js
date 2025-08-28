"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-titulo">
          <Link href="/" className="nav-link">
            <Image
              src="/images/Logo_JudoClube.jpg"
              alt="Logo Judô Clube"
              width={110}
              height={110}
              className="logo"
            /></Link>
          
        </div>
        <div className="redes">
          <Link href="https://www.facebook.com" target="_blank">Facebook</Link>
          <Link href="https://www.instagram.com" target="_blank">Instagram</Link>
          <span>📞 Telefone e WhatsApp: <a
            href="https://w.app/judoclubedenisdetoledoribas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold hover:text-blue-700 transition"
            > (24) 9 8817-1660</a>
          </span>
        </div>
        <div>
          &copy; 2025 Judô Clube Denis de Toledo Ribas. Todos os direitos reservados.
        </div>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          background-color: rgba(71, 80, 201, 1);
          color: white;
          padding: 1rem 1rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }
        .logo-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .redes {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .redes a {
          text-decoration: none !important;
          color: white;
          font-weight: 600;
          transition: all 0.3s;
        }
        .redes a:hover {
          color: gold;
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
