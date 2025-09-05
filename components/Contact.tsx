// app/help/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Import des composants du formulaire
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Import, Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import React from "react";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Logique pour traiter les données du formulaire
  };

  return (
    <div className="text-center grid grid-cols-1 sm:grid-cols-2 flex-col gap-6">
      <section className="py-16 text-center justify-center">
        <Card className="w-full mx-auto shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-blue-600">
              <h1 className="text-3xl font-bold mb-4">Contact</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Formulaire de contact */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4"></h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="mt-4 bg-blue-700">
                    Envoyer
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="py-16 text-center justify-center">
        <Card className="w-full mx-auto shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-blue-600">
              {" "}
              <h1 className="text-3xl font-bold mb-4">Social Media</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-row items-center justify-center space-x-4">
                <a href="https://www.instagram.com/cnpr_rabat/">
                  <Instagram className="text-3xl text-blue-600" />
                </a>
                <a href="https://www.facebook.com/cnprabat1/?locale=fr_FR">
                  <Facebook className="text-3xl text-blue-600" />
                </a>
                <a href="#">
                  <Twitter className="text-3xl text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/company/club-nautique-palge-rabat/?viewAsMember=true">
                  <Linkedin className="text-3xl text-blue-600" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=212664860246&text&type=phone_number&app_absent=0">
                  <FaWhatsapp className="text-3xl text-blue-600" />
                </a>
                <a href="#">
                  <FaTiktok className="text-3xl text-blue-600" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full bg-white text-blue-700 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-500 mb-3">
              Localisation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[100px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.430004770851!2d-6.8378389!3d34.032839200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c0bab00d78f%3A0x22a2796b2d63bcc4!2sClub%20Nautique%20De%20La%20Plage%20De%20Rabat%20(CNPR%20Rabat%2C%20Surf%20School%20Rabat%2C%20Voile%2C%20Catamaran%2C%20Surf%2C%20Kayak%2C%20paddel%20)!5e0!3m2!1sfr!2sma!4v1757089264568!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
