import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Кароўка — фермерская платформа Беларуси",
    short_name: "Кароўка",
    description:
      "Первая платформа для фермеров и покупателей натуральных продуктов Беларуси",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#5EA500",
    lang: "ru",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
