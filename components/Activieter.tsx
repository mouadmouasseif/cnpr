'use client';
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Activechose() {
  const images = {
    hero: "./Image/hero.jpg",
    background: "./Image/background.jpg",
    hero2: "./Image/hero2.jpg",
    kayak: "./Image/kayak.jpg",
    surf: "./Image/surf.jpg",
    bodyboard: "./Image/bodyboard.jpg",
    paddle: "./Image/paddle.jpg",
    sailing: "./Image/Sailing.jpg",
    aviron: "./Image/Aviron.jpg",
  };

  const allActivities = ["Surf", "Kayak", "Bodyboard", "Paddle", "Sailing", "Aviron"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // ✅ S'adapte à la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize(); // appel initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotation automatique
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 60000); // toutes les 60 secondes
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - cardsPerView + allActivities.length) % allActivities.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsPerView) % allActivities.length);
  };

  const visibleActivities = Array.from({ length: cardsPerView }, (_, i) => {
    return allActivities[(currentIndex + i) % allActivities.length];
  });

  return (
    <section className="py-16 relative w-full bg-cover bg-center text-center bg-gray-100">
      <h2 className="text-4xl text-blue-600 font-bold mb-8">CHOOSE YOUR ACTIVITE</h2>

      <div className="flex items-center justify-center gap-4 relative">
        {/* Flèche gauche */}
        <button
          onClick={handlePrev}
          className="text-2xl text-blue-400 hover:text-blue-600 transition-colors"
          aria-label="Précédent"
        >
          ◀
        </button>

        {/* Cartes */}
        <div className="flex items-center justify-center gap-6 transition-all duration-500">
          {visibleActivities.map((activity) => (
            <Card key={activity} className="w-[250px] h-[350px] overflow-hidden relative shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images[activity.toLowerCase() as keyof typeof images]})`,
                }}
              />
              <CardContent className="p-0 relative z-10 flex flex-col justify-between h-full top-0">
                <div className="text-center text-blue-600">
                  <h3 className="text-xl font-semibold bg-opacity-50 py-2 px-4 inline-block rounded-md ">
                    {activity}
                  </h3>
                </div>
                <div className="p-4 text-center">
                  <Button className="mt-4 bg-blue-400 text-white hover:bg-blue-300">
                    <a href="/activite">RESERVER</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={handleNext}
          className="text-2xl text-blue-400 hover:text-blue-600 transition-colors"
          aria-label="Suivant"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
