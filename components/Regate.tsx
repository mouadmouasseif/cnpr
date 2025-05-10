'use client';
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';


const Fnir = [
  {
    name: 'FNIR 2024',
    image: '/Image/fnir2024.jpg',
    description: 'Set sail and feel the breeze with our guided sailing tours.',
    reservationLink: '/regate',
  },
  {
    name: 'FNIR 2023',
    image: '/Image/fnir23.jpg',
    description: 'Set sail and feel the breeze with our guided sailing tours.',
    reservationLink: '/regate',
  },
  {
    name: 'FNIR 2022',
    image: '/Image/fnir22.jpg',
    description: 'Set sail and feel the breeze with our guided sailing tours.',
    reservationLink: '/regate',
  },
];

export default function Regates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 60000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - cardsPerView + Fnir.length) % Fnir.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsPerView) % Fnir.length);
  };

  const visibleCards = Array.from({ length: cardsPerView }, (_, i) => {
    return Fnir[(currentIndex + i) % Fnir.length];
  });

  return (
    <section className="py-16 bg-white text-center w-full">

      <div className="flex items-center justify-center gap-4 relative">
        {/* Bouton gauche */}
        <button
          onClick={handlePrev}
          className="text-3xl text-blue-400 hover:text-blue-600 transition-colors"
          aria-label="Précédent"
        >
          ◀
        </button>

        {/* Cartes visibles */}
        <div className={`flex justify-center items-center gap-6 transition-all duration-500 ${cardsPerView === 1 ? "w-full" : ""}`}>
          {visibleCards.map((item) => (
            <Card key={item.name} className="w-[350px]  overflow-hidden relative shadow-md mx-auto">
              <div className="relative w-full h-[180px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <CardContent className="p-4 flex flex-col justify-between h-[180px]">
                <h3 className="text-xl font-semibold text-amber-500">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-400">
                  <Link href={item.reservationLink}>Lire Plus</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bouton droit */}
        <button
          onClick={handleNext}
          className="text-3xl text-blue-400 hover:text-blue-600 transition-colors"
          aria-label="Suivant"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
