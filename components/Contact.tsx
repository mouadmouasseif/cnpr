// app/help/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"; // Import des composants du formulaire
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Import, Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Phone } from 'lucide-react';
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
          <CardTitle className="text-4xl font-bold text-blue-600">      <h1 className="text-3xl font-bold mb-4">Contact</h1>
</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
      {/* Formulaire de contact */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

            <Button type="submit" className="mt-4">Envoyer</Button>
          </form>
        </Form>
      </div>
      </CardContent>
        </Card>
        
        </section>
        <section className="py-16 text-center justify-center">
            
            <Card className="w-full mx-auto shadow-lg p-6">
            <CardHeader>
                <CardTitle className="text-4xl font-bold text-blue-600">      <h1 className="text-3xl font-bold mb-4">Social Media</h1>
      </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-row items-center justify-center space-x-4">
 <a href="https://www.instagram.com/cnpr_rabat/"><Instagram className="text-3xl" /></a> 
  <a href="https://www.facebook.com/cnprabat1/?locale=fr_FR"><Facebook className="text-3xl" /></a>
  <a href="#"><Twitter className="text-3xl" /></a>
  <a href="https://www.linkedin.com/company/club-nautique-palge-rabat/?viewAsMember=true"><Linkedin className="text-3xl" /></a>
  <a href="https://api.whatsapp.com/send/?phone=212664860246&text&type=phone_number&app_absent=0"><FaWhatsapp className="text-3xl" /></a>
  <a href="#"><FaTiktok className="text-3xl" /></a>

          
          
</div>

</div>

            </CardContent>
              </Card>
              
              </section>
    </div>
  );
}
