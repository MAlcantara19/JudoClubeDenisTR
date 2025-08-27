"use client"; // necessário para links interativos

import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="topo-rodape">
        <div className="logo-rodape">
          <Image
            src="/images/Logo_JudoClube.jpg"
            alt="Logo Judô Clube"
            width={80}
            height={80}
          />
        </div>
        <div className="links-sociais">
          <Link href="https://www.facebook.com" target="_blank">Facebook</Link>
          <Link href="https://www.instagram.com" target="_blank">Instagram</Link>
          <Link href="https://wa.me/5599999999999" target="_blank">WhatsApp</Link>
        </div>
      </div>

      <p>&copy; 2025 Judô Clube Denis de Toledo Ribas. Todos os direitos reservados.</p>

      <style jsx>{`
        .rodape {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 20px;
          background-color: #e6d5b8;
          color: #333;
          text-align: center;
        }
        .topo-rodape {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
        }
        .logo-rodape {
          margin-bottom: 15px;
        }
        .links-sociais {
          display: flex;
          gap: 15px;
        }
        .links-sociais a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .links-sociais a:hover {
          color: #b53e3e;
        }
        .rodape p {
          margin: 0;
          font-size: 0.9rem;
          color: #555;
        }
        @media (max-width: 600px) {
          .links-sociais {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
}
