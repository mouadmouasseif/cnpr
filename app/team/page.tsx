'use client'
import { useState } from 'react'
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pages = [
  {
    title: "Programme de la Journée",
    description: "Découvrez les étapes de votre journée nautique.",
    details: `<strong style="color: #d63384;">09h15</strong>: <br/>Accueil, changement vestiaires et préparation.<br/>
    <br/>
              <strong style="color: #d63384;">09h45-10h15</strong>: <br/>Introduction aux différents sports nautiques: Surf, Bodyboard, Kayak, Voile, Aviron, Triathlon (selon niveau).<br/><br/>
              <strong style="color: #d63384;">10h15-10h45</strong>:<br/> Formation pratique : utilisation du matériel et équipement au sol.<br/><br/>
              <strong style="color: #d63384;">10h45-11h00</strong>:<br/> Formation sur les mesures de sécurité.<br/><br/>
              <strong style="color: #d63384;">11h00-11h15</strong>:<br/> Échauffements et étirements.<br/><br/>
              <strong style="color: #d63384;">11h15-13h00</strong>:<br/> Surf & Bodyboard.<br/><br/>
              <strong style="color: #d63384;">13h00-14h00</strong>:<br/> Pause déjeuner.<br/><br/>
              <strong style="color: #d63384;">14h00-15h00</strong>:<br/> Sport de plage : Volley - Foot - Tennis.<br/><br/><em style="color: gray;">*Programme type communiqué à titre indicatif.</em>`
  },
 
];

const TeamPage: React.FC = () => {
  return (
    <div>
    <h1 className="text-6xl text-blue-600 font-bold text-center mb-8">Journée Nautique</h1>
    <h2 className="text-2xl text-gray-600 font-bold text-center mb-4">Initiation aux sports nautiques et à la sécurité en plage / mer.</h2>  
    <p className="text-l text-gray-600 font-bold text-center mb-4">Profitez d'une journée complète dédiée aux sports nautiques avec des professionnels qualifiés.</p>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {pages.map((page, index) => (
        <Card key={index} className={cn("max-w-full bg-white shadow-md p-4 rounded-lg")}> 
          <CardHeader>
            <CardTitle>{page.title}</CardTitle>
            <CardDescription>{page.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: page.details }}></p>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      ))}
    </div>
    <a href="/image/JournneCNPR.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-blue-600 text-white">En savoir plus</Button>
            </a>
    </div>
  );
};

export default TeamPage;
