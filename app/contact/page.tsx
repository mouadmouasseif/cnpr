"use client";

import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { buildWhatsAppLink, WHATSAPP_PHONE } from "@/lib/whatsapp";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function HelpPage() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const message = [
      "Bonjour CNPR, je souhaite vous contacter.",
      `Nom: ${data.name}`,
      `Email: ${data.email}`,
      `Telephone: ${data.phone}`,
      `Message: ${data.message}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <FaMapMarkerAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold">CLUB NAUTIQUE PLAGE DE RABAT</h3>
          <p className="text-gray-600">Plage des Oudayas Rabat, Maroc</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <FaPhone className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold">PHONE NUMBER</h3>
          <p className="text-gray-600">+212-640-321-162</p>
        </div>

        <a
          href={buildWhatsAppLink("Bonjour CNPR, je souhaite vous contacter.")}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <FaWhatsapp className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold">WHATSAPP</h3>
          <p className="text-gray-600">+{WHATSAPP_PHONE}</p>
        </a>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <FaEnvelope className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="text-lg font-semibold">EMAIL</h3>
          <p className="text-gray-600">cnpr.rabat@gmail.com</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
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
                    <Input placeholder="Votre email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre telephone" type="tel" {...field} />
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

            <Button type="submit" className="mt-4">
              Envoyer sur WhatsApp
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
