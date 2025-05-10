'use client';

import { useEffect } from 'react';

export default function Meteo() {
  useEffect(() => {
    const scriptId = 'wg_fwdg_49287_100_1746910311567';

    // Si le script n'est pas encore injecté, on l'ajoute
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      const args = [
        "s=49287", "m=100", "mw=84",
        `uid=${scriptId}`, "wj=knots", "tj=c", "waj=m", "tij=cm",
        "odh=0", "doh=24", "fhours=240", "hrsm=2",
        "vt=forecasts", "lng=fr", "idbs=1",
        "p=WINDSPD,GUST,SMER,HTSGW,PERPW,DIRPW,PWEN,SWELL1,SWPER1,WVPER,TMP,TMPE,FLHGT,CDC,APCP1s,RATING"
      ];

      script.id = scriptId;
      script.src = `https://www.windguru.cz/js/widget.php?${args.join('&')}`;
      script.async = true;

      document.getElementById('wg-widget-container')?.appendChild(script);
    }
  }, []);

  return (
    <div id="wg-widget-container" style={{ overflowX: 'auto' }} />
  );
}
