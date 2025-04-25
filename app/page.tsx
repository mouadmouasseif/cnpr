'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MeteoWidget from "@/components/Meteo";
import Activechose from "@/components/Activieter";
import Header from "@/components/Headrer";
import Contact from "@/components/Contact";
import Footer from "@/components/Last";
import Regates from "@/components/Regate";

export default function HOMEPage() {
  return (
    <div className="w-full  text-gray-900">
      {/* Header avec vidéo */}
      <Header />

      {/* About Section */}
      <section className="py-16 px-6 text-center min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl sm:text-5xl text-blue-400 font-bold mb-6">
          SPORTS AQUATIQUES ET SURF À RABAT
        </h2>
        <p className="max-w-2xl text-gray-800 text-xl leading-relaxed">
          Découvrez le Club Nautique de Plage de Rabat : Le Paradis des Sports Nautiques pour Toute la Famille !
          Venez passer des moments inoubliables en famille au cœur de Rabat, où le soleil, la mer, et l'aventure se rencontrent.
          Notre club vous propose une variété d'activités nautiques adaptées à tous les âges et niveaux, pour que chacun
          puisse profiter de la beauté de l'océan en toute sécurité et dans la bonne humeur.
        </p>
      </section>

      {/* Activités Section */}
      <Activechose />

      {/* Horaires */}
      <section className="py-16 text-center">
        <Card className="w-full max-w-md mx-auto shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-blue-400">Horaires d'ouverture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-600">Mardi - Vendredi</h3>
              <p className="text-xl text-amber-400">10h00 - 17h00</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-600">Samedi - Dimanche</h3>
              <p className="text-xl text-amber-400">9h00 - 18h00</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Météo */}
      <section className="py-16 text-center">
        <MeteoWidget />
      </section>

      {/* Compétitions / Régates */}
      <section className="py-16 text-center">
        <Regates />
        <Button className="mt-6 bg-blue-500 hover:bg-blue-600">Voir plus</Button>
      </section>

      {/* Équipe */}
      <section className="py-16 text-center">
        <h2 className="text-5xl text-blue-400 font-bold">L'équipe</h2>
        <p className="mt-4 text-gray-700">Notre équipe à votre service</p>
        <p className="mt-2 text-gray-400 italic">Pas encore disponible</p>
        <Button className="mt-4 bg-blue-400 hover:bg-blue-600">Voir plus</Button>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
