"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
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
    <div className="text-center grid grid-cols-1 sm:grid-cols-2 flex-col gap-6">
      <section className="py-16 text-center justify-center">
        <Card className="w-full mx-auto shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-blue-600">
              <h1 className="text-3xl font-bold mb-4">Contact</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="mt-8">
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

                  <Button type="submit" className="mt-4 bg-blue-700">
                    Envoyer sur WhatsApp
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
              <h1 className="text-3xl font-bold mb-4">Social Media</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-row items-center justify-center space-x-4">
              <a href="https://www.instagram.com/cnpr_rabat/" aria-label="Instagram">
                <Instagram className="text-3xl text-blue-600" />
              </a>
              <a href="https://www.facebook.com/cnprabat1/?locale=fr_FR" aria-label="Facebook">
                <Facebook className="text-3xl text-blue-600" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="text-3xl text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/company/club-nautique-palge-rabat/?viewAsMember=true"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-3xl text-blue-600" />
              </a>
              <a href={buildWhatsAppLink("Bonjour CNPR, je souhaite vous contacter.")} aria-label="WhatsApp">
                <FaWhatsapp className="text-3xl text-blue-600" />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok className="text-3xl text-blue-600" />
              </a>
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
