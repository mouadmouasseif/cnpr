"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Footer from "@/components/Last";
import Image from "next/image";
import Sidebar from "@/components/Menue";

const images = {
  hero: "./Image/hero.jpg",
  background: "./Image/background.jpg",
  hero2: "./Image/hero2.jpg",
  kayak: "./Image/kayak.jpg",
  surf: "./Image/surf.jpg",
  bodyboard: "./Image/bodyboard.jpg",
  paddle: "./Image/paddle.jpg",
  sailing: "./Image/Sailing.jpg",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Club Nautique Plage de Rabat</title>
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
        style={{
          backgroundImage: `url(${images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Main content that grows */}
        <main className="flex-1 w-full mx-auto">
          {children}
        </main>

        {/* Footer collé en bas */}
        <Footer />
      </body>
    </html>
  );
}
