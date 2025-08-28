import fs from "fs";
import path from "path";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GaleriaCliente from "./GaleriaCliente";

export default function PaginaGaleria() {
  const caminhoPublico = path.join(process.cwd(), "public", "images");

  const pastasAlbuns = fs.existsSync(caminhoPublico)
    ? fs.readdirSync(caminhoPublico, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    : [];

  const albuns = pastasAlbuns.map(pasta => {
    const caminhoPasta = path.join(caminhoPublico, pasta);
    const imagens = fs.readdirSync(caminhoPasta)
      .filter(arquivo => /\.(jpg|jpeg|png|webp)$/i.test(arquivo))
      .map(arquivo => `/images/${pasta}/${arquivo}`);
    return { titulo: pasta.replace(/_/g, " "), imagens };
  });

  return (
    <>
      <Header />
      <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h1>Galeria</h1>
        <p>Confira nossos momentos registrados:</p>
        <GaleriaCliente albuns={albuns} />
      </main>
      <Footer />
    </>
  );
}
