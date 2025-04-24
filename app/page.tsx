'use client'
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MeteoWidget from '@/components/Meteo';
import Activechose from '@/components/Activieter';
import Header from "@/components/Headrer";
import Contact from "@/components/Contact";
import Footer from "@/components/Last";
import { useState } from "react";
import Regates from "@/components/Regate";

const images = {
  hero: "../Image/hero.jpg",
  background: "../Image/background.jpg",
  hero2: "../Image/hero2.jpg",
  kayak: "../Image/kayak.jpg",
  surf: "../Image/surf.jpg",
  bodyboard: "../Image/bodyboard.jpg",
  paddle: "../Image/paddle.jpg",
  sailing: "../Image/Sailing.jpg",
};

export default function HOMEPage() {
  return (
    <div><Header />
    <div className="w-full h-screen text-gray-900" >
      {/* About Section */}
      <section className="py-16 px-6 text-center min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl text-blue-400 font-bold">SPORTS AQUATIQUE AND SURF IN RABAT</h2>
        <p className="mt-4 max-w-2xl text-amber-400 text-2xl mx-auto">
          Un grand club nautique au Rabat Maroc qui propose des cours de Surf, Bodyboard, Paddle, Voile, Aviron et de Kayak.
        </p>
      </section>

      {/* Classes Section */}
     
      
        <Activechose />
      
      {/* Opening Hours Card */}
      <section className="py-16 text-center justify-center">
        <Card className="w-full mx-auto shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-blue-400">Opening Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-600">Mardi - Vendredi</h1>
            <h2 className="text-xl text-amber-400">10h00 - 17h00</h2>
            <h1 className="text-2xl font-bold text-gray-600">Samedi - Dimanche</h1>
            <h2 className="text-xl text-amber-400">9h00 - 18h00</h2>
          </CardContent>
        </Card>
      </section>

      {/* Windguru Widget */}
      <section className="py-16 text-center">
        <MeteoWidget />
      </section>

      {/* Competition Section */}
      <section className="py-16 text-center">
        <Regates />
        <Button className="mt-4 bg-blue-500 hover:bg-blue-600">More</Button>
      </section>

      {/* Team Section */}
      <section className="py-16 text-center">
      <h2 className="text-5xl text-blue-400 font-bold">Team</h2>
      <p className="mt-4">Our Team In Your Service </p>
        <p className="mt-4">Pas disponible</p>

        <Button className="mt-4 bg-blue-400 hover:bg-blue-600">More</Button>
      </section>

      {/* Contact Section */}
      <Contact />
      <Footer />
      
    </div>
    </div>
  );
}
