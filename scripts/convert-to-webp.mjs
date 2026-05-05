import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");

const SKIP = new Set(["og-image.png", "Favicon 32x32.png"]);

const QUALITY = {
  default: 82,
  avatar: 80,
  img: 85,
};

async function findPngs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findPngs(full)));
    } else if (extname(entry.name).toLowerCase() === ".png" && !SKIP.has(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const pngs = await findPngs(PUBLIC_DIR);

for (const src of pngs) {
  const dest = src.replace(/\.png$/i, ".webp");
  const name = basename(src);
  const quality = name.startsWith("avatar") ? QUALITY.avatar
    : name === "img.png" || name === "img_mobile.png" ? QUALITY.img
    : QUALITY.default;

  const before = (await stat(src)).size;
  await sharp(src).webp({ quality }).toFile(dest);
  const after = (await stat(dest)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);

  console.log(`${name} → ${basename(dest)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);
}
