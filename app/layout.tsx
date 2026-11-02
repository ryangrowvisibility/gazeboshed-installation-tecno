import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-hanken" });

export const metadata: Metadata = {
  title: "Gazebo & Shed Installation in Toronto, the GTA & Southern Ontario | Tecno | (647) 613-9522",
  description:
    "Gazebo and shed assembly across Toronto, the GTA and Southern Ontario. Store-bought gazebos built in about 2 to 3 hours, often the next day. 4.9 stars from 33 Google reviews. Call or text (647) 613-9522.",
  openGraph: {
    title: "Tecno Gazebo & Shed Installation | Toronto, GTA & Southern Ontario",
    description: "Next-day gazebo and shed installs. 4.9 stars from 33 Google reviews. Call or text (647) 613-9522.",
    type: "website",
    images: ["/images/p6.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${archivo.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
