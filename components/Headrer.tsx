"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Menue from "@/components/Menue";

export default function Header() {
  const [images] = useState({
    logo: "./Image/logo.png",
    logoHover: "./Image/logo2.png",
    hero: "./Image/hero.jpg",
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="relative w-full bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${images.hero})` }}>
      {/* Header content */}

        {/* Menu Component (Mobile & Desktop) */}
        <Menue />
      

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-6xl text-blue-500 font-bold">CLUB NAUTIQUE PLAGE DE RABAT</h1>
          <p className="mt-4 text-xl">Sports Aquatiques et Sports de plage Sur la plage des Oudayas</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="bg-amber-400  hover:bg-blue-500">
              <Link href="/activite">Réserver Séance</Link>
            </Button>
            <Button className="bg-amber-400 hover:bg-blue-500">
              <Link href="/aderation">Devenir athlète</Link>
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
}
