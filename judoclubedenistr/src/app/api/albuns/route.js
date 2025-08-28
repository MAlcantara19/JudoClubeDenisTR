import fs from "fs";
import path from "path";

export async function GET() {
  const imagesPath = path.join(process.cwd(), "public", "images");
  const folders = fs.readdirSync(imagesPath, { withFileTypes: true }).filter(d => d.isDirectory());

  const albums = folders.map(folder => {
    const folderPath = path.join(imagesPath, folder.name);
    const images = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map(f => `/images/${folder.name}/${f}`);
    return { title: folder.name.replace(/_/g, " "), images };
  });

  return new Response(JSON.stringify(albums), { headers: { "Content-Type": "application/json" } });
}
