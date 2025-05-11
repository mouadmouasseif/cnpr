"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Menue from "@/components/Menue";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div >
      
      <main>
      <Menue /> 
        
      {children}
        </main> 

  </div>
  );
}
