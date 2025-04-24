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
    <header className="bg-white w-full shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isHovered ? images.logoHover : images.logo}
            alt="Logo"
            width={100}
            height={50}
            className="cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600 text-base lg:text-xl font-medium">Accueil</Link>
          <Link href="/activite" className="hover:text-blue-600 text-base lg:text-xl font-medium">Activités</Link>
          <Link href="/aderation" className="hover:text-blue-600 text-base lg:text-xl font-medium">Adhésions</Link>
          <Link href="/team" className="hover:text-blue-600 text-base lg:text-xl font-medium">Team Buildings</Link>
          <Link href="/regate" className="hover:text-blue-600 text-base lg:text-xl font-medium">Régates</Link>
          <Link href="/contact" className="hover:text-blue-600 text-base lg:text-xl font-medium">Contact</Link>
          <a href="https://www.instagram.com/cnpr_rabat/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-black hover:text-blue-700" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation (visible seulement en petit écran) */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col space-y-3 text-base">
            <Link href="/" className="hover:text-blue-600" onClick={toggleMenu}>Accueil</Link>
            <Link href="/activite" className="hover:text-blue-600" onClick={toggleMenu}>Activités</Link>
            <Link href="/aderation" className="hover:text-blue-600" onClick={toggleMenu}>Adhésions</Link>
            <Link href="/team" className="hover:text-blue-600" onClick={toggleMenu}>Team Buildings</Link>
            <Link href="/regate" className="hover:text-blue-600" onClick={toggleMenu}>Régates</Link>
            <Link href="/contact" className="hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
            <a href="https://www.instagram.com/cnpr_rabat/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500">
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
