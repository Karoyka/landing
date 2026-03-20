import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-lora",
  display: "swap",
});

// ─── SEO ──────────────────────────────────────────────────────────────────────
// TODO: замените placeholder-значения на реальные перед запуском
export const metadata: Metadata = {
  title: {
    default: "Кароўка — фермерская платформа Беларуси",
    template: "%s | Кароўка",
  },
  description:
    "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси. Никаких посредников, лучшие цены, сильное сообщество.",
  keywords: [
    "фермеры Беларусь",
    "натуральные продукты",
    "купить у фермера",
    "фермерский рынок",
    "Кароўка",
  ],
  authors: [{ name: "Кароўка" }],
  creator: "Кароўка",
  metadataBase: new URL("https://karowka.by"), // TODO: замените на реальный URL
  openGraph: {
    type: "website",
    locale: "ru_BY",
    url: "https://karowka.by", // TODO: замените на реальный URL
    siteName: "Кароўка",
    title: "Кароўка — фермерская платформа Беларуси",
    description:
      "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси.",
    images: [
      {
        url: "/og-image.png", // TODO: добавьте og-image (1200×630)
        width: 1200,
        height: 630,
        alt: "Кароўка — фермерская платформа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кароўка — фермерская платформа Беларуси",
    description:
      "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси.",
    images: ["/og-image.png"], // TODO: добавьте og-image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};
// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
