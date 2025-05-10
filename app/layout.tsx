// "use client" doit être utilisé uniquement pour les composants côté client
"use client";
import { Inter } from "next/font/google";
import "./globals.css";  // Assurez-vous que ce fichier existe
import Footer from "@/components/Last";
import { useState } from "react";
import { metadata } from "./metadata";  // Importation du fichier metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/Image/logo.png" type="image/png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-1 w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
