// pages/activities.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import MeteoWidget from '@/components/Meteo';
import React from 'react'

const activities = [
  {
    name: 'Surf',
    image: '/image/surf.jpg',
    description: 'Enjoy the thrill of surfing with our expert instructors.',
    reservationLink: 'https://booking.myrezapp.com/fr/online/booking/step1/16225/68564',
  },
  {
    name: 'Kayak',
    image: '/image/kayak.jpg',
    description: 'Explore the waters on a kayak and experience nature like never before.',
    reservationLink: 'https://booking.myrezapp.com/fr/online/booking/step1/16225/68540',
  },
  {
    name: 'Sailing',
    image: '/image/sailing.jpg',
    description: 'Set sail and feel the breeze with our guided sailing tours.',
    reservationLink: '/reservation?activity=sailing',
  },
  {
    name: 'Bodyboard',
    image: '/image/bodyboard.jpg',
    description: 'Ride the waves with the excitement of bodyboarding.',
    reservationLink: 'https://booking.myrezapp.com/fr/online/booking/step1/16225/68564',
  },
  {
    name: 'Paddle',
    image: '/image/paddle.jpg',
    description: 'Try paddleboarding and enjoy the calmness of the water.',
    reservationLink: 'https://booking.myrezapp.com/fr/online/booking/step1/16225/68561',
  },
  {
    name: 'Aviron',
    image: '/image/paddle.jpg',
    description: 'Try paddleboarding and enjoy the calmness of the water.',
    reservationLink: 'https://booking.myrezapp.com/fr/online/booking/step1/16225/68561',
  },
]

export default function Activities() {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-bold text-center mb-12">
          Our Activities
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.name} className="rounded-lg shadow-lg border overflow-hidden flex flex-col bg-white transition hover:shadow-xl">
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72">
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
          <MeteoWidget />
        </div>
      </div>
    </div>
  )
}
