import { ArrowLeft, Flame, Wrench, Fuel, Music, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Car = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/90 flex flex-col items-center justify-start p-12">
      {/* Terugknop */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-all"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        <ArrowLeft className="w-8 h-8 text-primary animate-pulse" />
        <span className="text-2xl font-bold uppercase tracking-wide">
          Terug
        </span>
      </button>

      {/* Titel */}
      <h1 className="font-display text-6xl text-primary mt-16 mb-8 uppercase tracking-tight text-center">
        Jouw Rally Kar
      </h1>

      {/* Intro */}
      <p className="text-white/80 text-center max-w-2xl mb-12 text-lg">
        De Ball & Grill Rally draait niet alleen om gehaktballen en barbecue — 
        je trouwe bolide speelt de hoofdrol. Of je nu komt met een Volvo 240, 
        een oude Mercedes of een Fiat Panda met karakter: zorg dat hij klaar is voor avontuur!
      </p>

      {/* Lijst */}
      <ul className="text-lg text-white/90 list-none space-y-4 max-w-xl bg-secondary/40 backdrop-blur-md border border-primary/30 rounded-2xl p-8 shadow-lg">
        <li className="flex items-center gap-3">
          <Settings className="text-primary w-6 h-6" />
          <span>Een auto met karakter — krassen en stickers tellen als eerbetoon</span>
        </li>
        <li className="flex items-center gap-3">
          <Wrench className="text-primary w-6 h-6" />
          <span>Gereedschap voor onderweg (ducttape = heilig)</span>
        </li>
        <li className="flex items-center gap-3">
          <Fuel className="text-primary w-6 h-6" />
          <span>Altijd een jerrycan in de kofferbak, voor het geval dat...</span>
        </li>
        <li className="flex items-center gap-3">
          <Music className="text-primary w-6 h-6" />
          <span>Goede speakers en een roadtrip-playlist vol guilty pleasures</span>
        </li>
        <li className="flex items-center gap-3">
          <Flame className="text-primary w-6 h-6" />
          <span>Een BBQ-rooster achterin — want wat is een rally zonder grill?</span>
        </li>
        <li className="flex items-center gap-3">
          <Flame className="text-primary w-6 h-6" />
          <span>Versier je wagen! Hoe creatiever, hoe beter 🎨🚗</span>
        </li>
      </ul>

      {/* Extra tagline */}
      <p className="mt-12 text-white/70 italic text-center">
        “Niet de snelste wint — maar de met de meeste ballen.” 🏁
      </p>
    </section>
  );
};

export default Car;
