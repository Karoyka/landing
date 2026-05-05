import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

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

const SITE_URL = "https://karowka.by";
const SITE_NAME = "Кароўка";

export const metadata: Metadata = {
  title: {
    default: "Кароўка — фермерская платформа Беларуси",
    template: "%s | Кароўка",
  },
  description:
    "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси. Никаких посредников, лучшие цены, сильное сообщество. 1000+ покупателей, 500+ фермеров, 50+ районов.",
  keywords: [
    "фермеры Беларусь",
    "натуральные продукты Беларусь",
    "купить у фермера",
    "фермерский рынок онлайн",
    "Кароўка",
    "karowka",
    "фермерские продукты",
    "экопродукты Беларусь",
    "продукты напрямую от фермера",
    "свежие продукты Беларусь",
    "фермерская платформа",
    "натуральное молоко Беларусь",
    "фермерское мясо",
    "органические продукты",
    "список ожидания фермеры",
    "купить мясо у фермера",
    "купить молоко у фермера",
    "фермерский рынок Минск",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_BY",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Кароўка — фермерская платформа Беларуси",
    description:
      "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси. Никаких посредников — только прямые продажи.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Кароўка — фермерская платформа Беларуси",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кароўка — фермерская платформа Беларуси",
    description:
      "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "yandex-verification": "1daf7d34dbe3796e",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        width: 32,
        height: 32,
      },
      description:
        "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси. Связываем производителей напрямую с покупателями.",
      sameAs: ["https://t.me/karoyka"],
      foundingLocation: {
        "@type": "Place",
        name: "Беларусь",
        addressCountry: "BY",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Первая фермерская платформа Беларуси — покупайте натуральные продукты напрямую у фермеров.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "ru",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Кароўка — фермерская платформа Беларуси",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      description:
        "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси.",
      inLanguage: "ru",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${lora.variable}`} style={{ scrollBehavior: "smooth" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieBanner />
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109051548', 'ym');
              ym(109051548, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/109051548" style={{position:"absolute", left:"-9999px"}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
