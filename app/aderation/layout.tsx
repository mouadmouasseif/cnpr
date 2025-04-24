"use client";
import React from "react";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import Menue from "@/components/Menue";
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Club Nautique Plage de Rabat</title>
      </head>
      <body className={`${inter.className} flex flex-col items-center`} style={{ backgroundImage: `url(${images.background})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

        <main className="w-full mx-auto  flex-1">
         <Menue /> 
         {children}
        </main>
      </body>
    </html>
  );
}
