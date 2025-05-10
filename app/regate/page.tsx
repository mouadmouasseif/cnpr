// pages/activities.js
'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MeteoWidget from '@/components/Meteo';
import React from 'react'
import { Button } from "@/components/ui/button";

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
    {
      name: 'FNIR 2021',
      image: '/image/sailing.jpg', // Replace with your image path
      description: 'Set sail and feel the breeze with our guided sailing tours.',
      reservationLink: '/reservation?activity=sailing',
    },
  

 
]

export default function Regates() {
    return (
      <div className="container mx-auto py-10 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-6xl text-blue-600 font-bold text-center mb-8">FNIR</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Fnir.map((Fnir) => (
            <div key={Fnir.name} className="border rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-0 pb-[100%]"> {/* Crée un conteneur carré */}
                <Image
                  src={Fnir.image}
                  alt={Fnir.name}
                  layout="fill" // Remplir l'espace
                  objectFit="cover" // Assurez-vous que l'image couvre entièrement l'espace carré
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{Fnir.name}</h2>
                <p className="mt-2 text-gray-600">{Fnir.description}</p>
        
              <Link  href={Fnir.reservationLink}  className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-center hover:bg-blue-600">
        
                  Lire Plus
        
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}
