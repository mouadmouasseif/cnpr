// app/help/layout.tsx

"use client";
import React from "react";
import { ReactNode } from "react";
import Menue from "@/components/Menue";

export default function HelpLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 min-h-screen p-4">
            <Menue /> 

      <main className="container mx-auto w-full max-w-4xl bg-gray-100 shadow-md rounded-lg p-5">

        {children}
      </main>
    </div>
  );
}
