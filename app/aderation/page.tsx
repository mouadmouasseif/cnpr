'use client'
import React from 'react'
import Image from 'next/image'

const memberships = [
  {
    title: "Paddel",
    description: "Paddel",
    price: "1500 dhs",
    details: [
      "Cette adhésion couvre simplement les frais d'inscription.",
      "................."
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    image: "Image/imges/paddel.png"
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
    image: "Image/imges/kayak.png"
  },
  {
    title: "Avion",
    description: "Pour l'équipe \"pagaie\"",
    price: "1500 dhs",
    details: [
      "Frais d'inscription inclus.",
      "Aviron",
      "Possibilité de payer des mensualités"
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    image: "Image/imges/aviron.png"
  },
  {
    title: "Surf & Bodyboard",
    description: "Pour l'équipe \"pagaie\"",
    price: "1500 dhs",
    details: [
      "Frais d'inscription inclus.",
      "...........",
      "...................."
    ],
    button: "CLIQUEZ ICI POUR ADHÉRER",
    image: "Image/imges/surfant.png"
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
    image: "Image/imges/voile.png",
    recommended: true
  }
];

const MembershipPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`p-6 border rounded-lg shadow-md transition duration-300 hover:shadow-lg ${
              membership.recommended ? 'bg-blue-100 border-blue-400' : 'bg-white'
            }`}
          >
            {membership.recommended && (
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 text-center">
                Recommandé
              </div>
            )}

            <div className="flex justify-center mb-4">
              <Image
                src={membership.image}
                alt={membership.title}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>

            <h2 className="text-lg font-bold text-center">{membership.title}</h2>
            <p className="text-sm text-center text-gray-600">{membership.description}</p>
            <p className="text-xl font-bold text-center text-blue-600 mt-2">{membership.price}</p>

            <ul className="text-sm text-gray-700 mt-3 space-y-1">
              {membership.details.map((detail, i) => (
                <li key={i}>• {detail}</li>
              ))}
            </ul>

            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              {membership.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;
