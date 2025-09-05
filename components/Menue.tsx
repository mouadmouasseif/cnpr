"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

export default function Menue() {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = {
    logo: "/Image/logo.png",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white/85 w-[95%] mx-auto rounded-t-lg rounded-b-lg shadow-md sticky top-2 z-10">
      <div className="flex items-center justify-between py-2 px-2 md:hidden relative">
        {/* Logo centré sur mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src={images.logo}
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Menu Toggle Button */}
        <button
          className="z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center items-center py-1 px-3">
  <div className="flex items-center gap-6">
    {/* Partie gauche */}
    <div className="flex gap-6 items-center">
      <Link href="/" className="hover:text-blue-400">Accueil</Link>
      <Link href="/activite" className="hover:text-blue-400">Activités</Link>
      <Link href="/aderation" className="hover:text-blue-400">Adhésions</Link>
    </div>

    {/* Logo au centre */}
    <Link href="/">
      <Image
        src={images.logo}
        alt="Logo"
        width={50}
        height={50}
        className="cursor-pointer"
      />
    </Link>

    {/* Partie droite */}
    <div className="flex gap-6 items-center">
      <Link href="/team" className="hover:text-blue-400">Team Buildings</Link>
      <Link href="/regate" className="hover:text-blue-400">Régates</Link>
      <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      <a href="https://www.instagram.com/cnprabat/" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 text-black hover:text-blue-700" />
      </a>
    </div>
  </div>
</nav>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <div className="flex flex-col space-y-3 text-center text-base">
            <Link href="/" onClick={toggleMenu}>Accueil</Link>
            <Link href="/activite" onClick={toggleMenu}>Activités</Link>
            <Link href="/aderation" onClick={toggleMenu}>Adhésions</Link>
            <Link href="/team" onClick={toggleMenu}>Team Buildings</Link>
            <Link href="/regate" onClick={toggleMenu}>Régates</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            <a href="https://www.instagram.com/yachtclubrabat/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2">
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
