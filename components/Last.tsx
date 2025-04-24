"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center ">
      {/* Copyright */}
      <p className="text-gray-700 text-sm">
        Copyright © - Designed by{" "}
        <Link href="https://www.linkedin.com/in/mouad-mouasseif-a5619a21a/" target="_blank" className="underline">
          Mouasseif Mouad
        </Link>
      </p>
    </footer>
  );
}
