import sharp from "sharp";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/og-image.png");

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f6faf0"/>
      <stop offset="100%" stop-color="#edf6e1"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5EA500"/>
      <stop offset="100%" stop-color="#7dc22a"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Top accent bar -->
  <rect width="${W}" height="8" fill="url(#accent)"/>

  <!-- Decorative circles -->
  <circle cx="1100" cy="80" r="200" fill="#5EA500" opacity="0.06"/>
  <circle cx="1050" cy="580" r="150" fill="#5EA500" opacity="0.05"/>
  <circle cx="80" cy="550" r="120" fill="#5EA500" opacity="0.04"/>

  <!-- Logo badge -->
  <rect x="64" y="64" width="56" height="56" rx="16" fill="#5EA500"/>
  <text x="92" y="101" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif"
        font-size="28" text-anchor="middle" fill="white">🐄</text>

  <!-- Brand name -->
  <text x="136" y="103" font-family="Segoe UI, Arial, sans-serif"
        font-size="32" font-weight="700" fill="#1a1a1a" letter-spacing="0.5">Кароўка</text>

  <!-- Main heading -->
  <text x="64" y="240" font-family="Segoe UI, Arial, sans-serif"
        font-size="72" font-weight="800" fill="#1a1a1a" letter-spacing="-1">Все фермеры</text>
  <text x="64" y="328" font-family="Segoe UI, Arial, sans-serif"
        font-size="72" font-weight="800" fill="#5EA500" letter-spacing="-1">Беларуси</text>
  <text x="64" y="416" font-family="Segoe UI, Arial, sans-serif"
        font-size="72" font-weight="800" fill="#1a1a1a" letter-spacing="-1">здесь</text>

  <!-- Divider -->
  <rect x="64" y="450" width="80" height="4" rx="2" fill="#5EA500"/>

  <!-- Subtitle -->
  <text x="64" y="500" font-family="Segoe UI, Arial, sans-serif"
        font-size="26" font-weight="400" fill="#555" letter-spacing="0.2">
    Никаких посредников — только прямые продажи
  </text>

  <!-- Stats -->
  <g transform="translate(64, 545)">
    <rect width="180" height="56" rx="12" fill="white" opacity="0.8"/>
    <text x="90" y="24" font-family="Segoe UI, Arial, sans-serif"
          font-size="22" font-weight="700" fill="#5EA500" text-anchor="middle">1000+</text>
    <text x="90" y="44" font-family="Segoe UI, Arial, sans-serif"
          font-size="13" fill="#777" text-anchor="middle">покупателей</text>
  </g>
  <g transform="translate(260, 545)">
    <rect width="180" height="56" rx="12" fill="white" opacity="0.8"/>
    <text x="90" y="24" font-family="Segoe UI, Arial, sans-serif"
          font-size="22" font-weight="700" fill="#5EA500" text-anchor="middle">500+</text>
    <text x="90" y="44" font-family="Segoe UI, Arial, sans-serif"
          font-size="13" fill="#777" text-anchor="middle">фермеров</text>
  </g>
  <g transform="translate(456, 545)">
    <rect width="180" height="56" rx="12" fill="white" opacity="0.8"/>
    <text x="90" y="24" font-family="Segoe UI, Arial, sans-serif"
          font-size="22" font-weight="700" fill="#5EA500" text-anchor="middle">50+</text>
    <text x="90" y="44" font-family="Segoe UI, Arial, sans-serif"
          font-size="13" fill="#777" text-anchor="middle">районов</text>
  </g>

  <!-- Right illustration -->
  <circle cx="950" cy="315" r="220" fill="white" opacity="0.5"/>
  <circle cx="950" cy="315" r="170" fill="white" opacity="0.6"/>
  <text x="950" y="370" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif"
        font-size="160" text-anchor="middle" fill="#5EA500" opacity="0.9">🌿</text>
</svg>
`;

const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(OUT, pngBuffer);
console.log(`✓ og-image.png saved to ${OUT}`);
