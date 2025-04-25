"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Menue from "@/components/Menue";

export default function Header() {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      {/* Menu */}
      <Menue />

      {/* Contenu Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <p className="mt-4 text-gray-300 text-lg sm:text-xl">Bienvenue chez</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl">
          CLUB NAUTIQUE PLAGE DE RABAT
        </h1>
        <p className="mt-4 text-amber-100 text-base sm:text-xl">
          Sport et Famille sur la plage des Oudayas
        </p>

        {/* Boutons côte à côte */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-6">
          <Button className="bg-amber-400 hover:bg-blue-500">
            <Link href="/activite">Réserver Séance</Link>
          </Button>
          <Button className="bg-amber-400 hover:bg-blue-500">
            <Link href="/aderation">Devenir athlète</Link>
          </Button>
        </div>
      </section>
    </header>
  );
}
