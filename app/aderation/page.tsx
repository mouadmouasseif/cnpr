'use client'
// app/aderation/page.tsx
import { useState } from 'react'
import React from "react";
import Menue from "@/components/Menue";

const memberships = [
  {
    title: "DÉCOUVERTE",
    description: "Paddel",
    price: "1500 dhs",
    details: [
      "Cette adhésion couvre simplement les frais d'inscription.",
      "Vous payez à l'utilisation."
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    icon: "⚓"
  },
  {
    title: "CANOE KAYAK",
    description: "Pour l'équipe \"pagaie\"",
    price: "1500 dhs",
    details: [
      "Frais d'inscription inclus.",
      "4h de kayak le week-end",
      "Possibilité de payer des mensualités de 400 dhs"
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    icon: "🛶"
  },
  {
    title: "Surf & Bodyboard",
    description: "Pour l'équipe \"pagaie\"",
    price: "1500 dhs",
    details: [
      "Frais d'inscription inclus.",
      "...........",
      "Possibilité de payer des mensualités de 400 dhs"
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    icon: "🛶"
  },
  {
    title: "ECOLE DE VOILE",
    description: "Deux séances par semaine",
    price: "2650 dhs",
    details: [
      "Frais d'inscription inclus.",
      "4h de cours de voile le week-end",
      "50% sur les cours privés.",
      "Possibilité de payer des mensualités de 500 dhs"
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    icon: "⚓",
    recommended: true
  }
];

const MembershipPage: React.FC = () => {
  return (
    <div className="flex justify-center gap-6 p-6">
      {memberships.map((membership, index) => (
        <div key={index} className={`p-6 border rounded-lg shadow-md ${membership.recommended ? 'bg-blue-100' : 'bg-white'}` }>
          {membership.recommended && (
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">Recommandé</div>
          )}
          <div className="text-5xl text-center mb-3">{membership.icon}</div>
          <h2 className="text-lg font-bold text-center">{membership.title}</h2>
          <p className="text-sm text-center text-gray-600">{membership.description}</p>
          <p className="text-xl font-bold text-center text-blue-600 mt-2">{membership.price}</p>
          <ul className="text-sm text-gray-700 mt-3">
            {membership.details.map((detail, i) => (
              <li key={i} className="mt-1">• {detail}</li>
            ))}
          </ul>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            {membership.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MembershipPage;
