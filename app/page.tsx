'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Meteo from "@/components/Meteo";
import Activechose from "@/components/Activieter";
import Header from "@/components/Headrer";
import Contact from "@/components/Contact";
import Footer from "@/components/Last";
import Regates from "@/components/Regate";

export default function HOMEPage() {
  return (
    <div className="w-full text-gray-900">
      {/* SEO META TAGS à ajouter dans le layout ou head */}
      {/*
        <title>Club Nautique Rabat – Surf, Kayak, Voile, Paddle & Aviron</title>
        <meta name="description" content="Découvrez nos activités nautiques à Rabat : surf, kayak, paddle, voile et aviron. Cours pour enfants et adultes sur la plage de Rabat." />
      */}

      {/* Header avec vidéo d’intro */}
      <Header />

      {/* Section présentation */}
      <section className="py-16 px-6 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl text-blue-600 font-bold mb-6">
          Activités nautiques à Rabat : Surf, Kayak, Voile, Paddle & Aviron
        </h1>
        <p className="max-w-3xl text-gray-800 text-lg sm:text-xl leading-relaxed">
          Bienvenue au <strong>Club Nautique de Plage de Rabat</strong> – votre destination idéale pour découvrir ou pratiquer des activités nautiques en famille ! Nous proposons des cours et locations de <strong>surf</strong>, <strong>kayak</strong>, <strong>stand-up paddle</strong>, <strong>voile</strong> et <strong>aviron</strong>. Que vous soyez débutant ou confirmé, venez vivre l’océan autrement, en toute sécurité.
        </p>
      </section>

      {/* Section Activités (avec maillage interne recommandé dans les composants) */}
      <Activechose />

      {/* Horaires */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Horaires d'ouverture</h2>
        <Card className="w-full max-w-md mx-auto shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Plage de Rabat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-600">Mardi - Vendredi</h3>
              <p className="text-lg text-blue-500">10h00 - 17h00</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-600">Samedi - Dimanche</h3>
              <p className="text-lg text-blue-500">9h00 - 18h00</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Météo */}
      <section className="py-16 text-center bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Prévisions météo à Rabat 🌊</h2>
      <Meteo />
      </section>

      {/* Régates et compétitions */}
      <section className="py-16 text-center ">
        <h2 className="text-4xl text-blue-600 font-bold mb-8">Régates et Évènements Nautiques</h2>
        <Regates />
        <Button className="mt-6 bg-blue-500 hover:bg-blue-600" >Voir plus</Button>
      </section>

      {/* Équipe */}
      <section className="py-16 text-center">
        <h2 className="text-3xl text-blue-600 font-bold">Rencontrez notre équipe</h2>
        <p className="mt-4 text-gray-700">Des professionnels passionnés à votre écoute</p>
        <p className="mt-2 text-gray-400 italic">Présentation à venir...</p>
        <Button className="mt-4 bg-blue-400 hover:bg-blue-600">Voir plus</Button>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
    </div>
  );
}
