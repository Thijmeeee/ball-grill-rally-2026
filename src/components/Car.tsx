import { Wrench, Fuel, Music, Settings, Flame, Shield, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Car = () => {
  const navigate = useNavigate();

  const carRequirements = [
    {
      category: "Vereisten",
      icon: Settings,
      items: [
        "Auto minimaal 23 jaar oud (of jonger na contact met organisatie)",
        "Geldig kenteken en verzekering",
        "APK-goedkeuring (of equivalent)",
      ]
    },
    {
      category: "Essentiële Uitrusting",
      icon: Wrench,
      items: [
        "Gereedschap voor onderweg (ducttape = heilig!)",
        "Jerrycan met extra brandstof",
        "Startkabels en reservelampjes",
      ]
    },
    {
      category: "Rally Extras",
      icon: Sparkles,
      items: [
        "Versier je wagen! Hoe creatiever, hoe beter 🎨",
        "BBQ-rooster achterin",
        "Goede speakers en roadtrip-playlist",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-secondary text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <button onClick={() => navigate("/")} className="font-display text-2xl hover:text-primary transition-colors">
            BALL & GRILL RALLY
          </button>
          <button onClick={() => navigate("/")} className="text-sm font-bold uppercase tracking-widest hover:text-primary">
            Terug naar Home
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">JOUW RALLY KAR</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            De Ball & Grill Rally draait niet alleen om gehaktballen en barbecue —
            je trouwe bolide speelt de hoofdrol!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {carRequirements.map((category, index) => (
            <div key={index} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-secondary/5 p-4 border-b border-border flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl">{category.category}</h3>
              </div>
              <ul className="p-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <Flame className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 rounded-2xl p-8 text-center border border-primary/20">
          <p className="text-2xl font-display text-foreground mb-2">
            "Niet de snelste wint — maar die met de meeste ballen." 🏁
          </p>
          <p className="text-muted-foreground">
            Of je nu komt met een Volvo 240, een oude Mercedes of een Fiat Panda met karakter: zorg dat hij klaar is voor avontuur!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Car;
