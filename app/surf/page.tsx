// pages/activities.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import Meteo from '@/components/Meteo';
import React from 'react'

const activities = [
  {
    name: 'Loisir Surf',
    image: '/Image/surf.jpg',
    description: 'Surfez en toute liberté avec du matériel au top.',
    reservationLink: 'https://planning.izidoor.io/booking/516/538/products?showCourseDetailsModal=true&selectedTemplateProductId=21295',
  },
  {
    name: 'Cours de surf collectif',
    image: '/Image/scol.jpg',
    description: 'Apprendre les bases du surf et amuser vous avec les vagues . Chacun apprend à son rythme. Un seul mot d`ordre: le plaisir!.',
    reservationLink: 'https://planning.izidoor.io/booking/516/538/products?showCourseDetailsModal=true&selectedTemplateProductId=21277',
  },
  {
    name: 'Cours de surf privatisé',
    image: '/Image/sprive.jpg',
    description: 'Un moniteur rien que pour vous ! Apprendre les bases du surf et amuser vous avec les vagues . Chacun apprend à son rythme. Un seul mot d`ordre: le plaisir!.',
    reservationLink: 'https://planning.izidoor.io/booking/516/538/products?showCourseDetailsModal=true&selectedTemplateProductId=21294',
  },
  {
    name: 'Demi Journée Surf',
    image: '/Image/demisurf.png',
    description: 'asse une agréable Journée chez le club nautique plage de rabat 4h de surf vous mette plaisir!.',
    reservationLink: 'https://planning.izidoor.io/booking/516/538/products?showCourseDetailsModal=true&selectedTemplateProductId=21405',
  },
]

export default function Surf() {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-bold text-center mb-12">
          SURF
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.name} className="rounded-lg shadow-lg border overflow-hidden flex flex-col bg-white transition hover:shadow-xl">
              <div className="relative w-full h-70 sm:h-72 md:h-80 lg:h-64 xl:h-72">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">{activity.name}</h2>
                <p className="text-gray-600 mt-2 flex-grow">{activity.description}</p>
                <Link
                  href={activity.reservationLink}
                  className="mt-4 inline-block text-center bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Meteo />
        </div>
      </div>
    </div>
  )
}
