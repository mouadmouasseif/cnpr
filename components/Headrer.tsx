"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Import, Instagram } from 'lucide-react';

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
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center py-4 px-6 relative z-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isHovered ? images.logoHover : images.logo}
            alt="Logo"
            width={80}
            height={50}
            className="cursor-pointer"
            onMouseEnter={() => setIsHovered(true)} // Change to logo2.png on hover
            onMouseLeave={() => setIsHovered(false)} // Revert to logo.png when mouse leaves
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8">
          <Link href="/" className=" hover:text-blue-600 text-xl font-medium">
            Accueil
          </Link>
          <Link href="/activite" className=" hover:text-blue-600 text-xl font-medium">
            Activités
          </Link>
          <Link href="/aderation" className=" hover:text-blue-600 text-xl font-medium">
            Adhésions
          </Link>
          <Link href="/team" className=" hover:text-blue-600 text-xl font-medium">
            Team Buildings
          </Link>
          <Link href="/regate" className=" hover:text-blue-600 text-xl font-medium">
            Régates
          </Link>
          <Link href="/contact" className=" hover:text-blue-600 text-xl font-medium">
            Contact
          </Link>
          <a href="https://www.instagram.com/cnpr_rabat/"><Instagram className="text-3xl hover:text-blue-600 " /></a> 

        </nav>
      </div>

      {/* Hero Section */}
       <section className="relative w-full h-screen">
             <div className="absolute inset-0 flex flex-col items-center justify-center text-balck-500">
               <h1 className="text-6xl text-blue-600 font-bold">CLUB NAUTIQUE PALGE DE RABAT</h1>
               <p className="mt-4 text-black text-xl">Sports Aquatiques et Sports de plage Sur la plage des Oudayas</p>
               <div className="flex gap-4 mt-6 space-x-3">
               <Button className="mt-6 bg-black hover:bg-blue-600" ><Link href="/activite">
    Réserver Séance
  </Link></Button>
               <Button className="mt-6 bg-black hover:bg-blue-600"><Link href="/aderation"> Devnir athlete </Link> </Button>
     </div>
             </div>
           </section>
    </header>
  );
}
