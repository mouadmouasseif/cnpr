// meteo.tsx
'use client'
import React from "react";
import { useState } from 'react'
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MeteoWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "wg_fwdg_49287_100_1743550352497";
    script.innerHTML = `
      (function (window, document) {
        var loader = function () {
          var arg = ["s=49287", "m=100", "mw=84", "uid=wg_fwdg_49287_100_1743553769389", "wj=knots", "tj=c", "waj=m", "tij=cm", "odh=0", "doh=24", "fhours=240", "hrsm=3", "vt=forecasts", "lng=fr", "idbs=1", "ts=2", "p=WINDSPD,GUST,SMER,TMPE,FLHGT,CDC,APCP1s,RATING"];
          var script = document.createElement("script");
          var tag = document.getElementsByTagName("script")[0];
          script.src = "https://www.windguru.cz/js/widget.php?" + (arg.join("&"));
          tag.parentNode.insertBefore(script, tag);
        };
        window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
      })(window, document);
    `;
    document.body.appendChild(script); // Ajouter le script au DOM

    return () => {
      document.body.removeChild(script); // Nettoyer en supprimant le script à la destruction du composant
    };
  }, []);

  return (
    <section className="py-16 text-center justify-center">
      <Card className="w-full mx-auto shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-blue-600">Il y aura-t-il des vagues demain?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* Le widget Windguru sera chargé ici */}
          <div id="wg_fwdg_49287_100_1743550352497" className="py-16 text-center"></div>
        </CardContent>
      </Card>
    </section>
  );
};

export default MeteoWidget;
