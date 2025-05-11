"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

export default function Menue() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const images = {
    logo: "./Image/logo.png",
    logoHover: "./Image/logo2.png",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white/85 w-[95%] mx-auto rounded-td-[30%] rounded-b-lg rounded-t-lg shadow-md sticky top-2 z-20">
      <div className="flex justify-center items-center py-2 px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 justify-center items-center w-full">
          <Link href="/" className="hover:text-blue-600 text-base lg:text-l font-medium">Accueil</Link>
          <Link href="/activite" className="hover:text-blue-600 text-base lg:text-l font-medium">Activités</Link>
          <Link href="/aderation" className="hover:text-blue-600 text-base lg:text-l font-medium">Adhésions</Link>
          <Link href="/">
            <Image
              src={isHovered ? images.logoHover : images.logo}
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Link>
          <Link href="/team" className="hover:text-blue-600 text-base lg:text-l font-medium">Team Buildings</Link>
          <Link href="/regate" className="hover:text-blue-600 text-base lg:text-l font-medium">Régates</Link>
          <Link href="/contact" className="hover:text-blue-600 text-base lg:text-l font-medium">Contact</Link>
          <a href="https://www.instagram.com/cnpr_rabat/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-black hover:text-blue-700" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between w-full relative">
  {/* Logo centré visuellement, même plan horizontal */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <Image
      src={images.logo}
      alt="Logo"
      width={50}
      height={50}
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  </div>

  {/* Spacer pour garder le plan horizontal */}
  <div className="w-12" /> {/* Peut être ajusté selon la taille du logo */}

  {/* Menu bouton à droite */}
  <button
    className="md:hidden ml-auto flex z-10"
    onClick={toggleMenu}
    aria-label="Toggle Menu"
  >
    {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
  </button>
</div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white/ px-6 pb-4 ">
          <div className="flex flex-col space-y-3 text-base text-center">
            <Link href="/" className="hover:text-blue-600" onClick={toggleMenu}>Accueil</Link>
            <Link href="/activite" className="hover:text-blue-600" onClick={toggleMenu}>Activités</Link>
            <Link href="/aderation" className="hover:text-blue-600" onClick={toggleMenu}>Adhésions</Link>
            <Link href="/team" className="hover:text-blue-600" onClick={toggleMenu}>Team Buildings</Link>
            <Link href="/regate" className="hover:text-blue-600" onClick={toggleMenu}>Régates</Link>
            <Link href="/contact" className="hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
            <a href="https://www.instagram.com/cnpr_rabat/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 text-black">
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
