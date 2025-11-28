import { CheckCircle2, FileText, Wrench, Shield, User, Bed, Map as MapIcon, Music } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PackingList = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Documenten",
      icon: FileText,
      items: [
        "Kentekenbewijs / autopapieren",
        "Verzekeringsbewijs + groene kaart",
        "APK rapport",
        "Rijbewijs van alle bestuurders"
      ]
    },
    {
      title: "Gereedschap & Onderdelen",
      icon: Wrench,
      items: [
        "Startkabels",
        "Reservelampjes",
        "Motorolie & koelvloeistof",
        "Bandenreparatiekit / compressor",
        "Reservewiel + krik + wielboutensleutel",
        "Ducttape, tie-wraps, touw",
        "Basis gereedschapsset (schroevendraaiers, tangen, dopset)"
      ]
    },
    {
      title: "Veiligheid",
      icon: Shield,
      items: [
        "Gevarendriehoek",
        "Veiligheidsvestjes",
        "EHBO-kit",
        "Brandblusser (soms verplicht)"
      ]
    },
    {
      title: "Persoonlijke Spullen",
      icon: User,
      items: [
        "Paspoort / ID",
        "Portemonnee / bankpassen / wat contant geld",
        "Telefoon + oplader + powerbank",
        "Zonnebril",
        "Regenjas / warme kleding (het weer kan wisselen)",
        "Comfortabele schoenen"
      ]
    },
    {
      title: "Overnachten / Comfort",
      icon: Bed,
      items: [
        "Slaap spullen",
        "Eventueel tent",
        "Handdoek & toiletspullen",
        "Oordopjes",
        "Snacks & water",
        "Koelbox"
      ]
    },
    {
      title: "Navigatie & Tech",
      icon: MapIcon,
      items: [
        "Navigatie-app / offline kaarten",
        "Dashcam - mogelijk",
        "Telefoonhouder - handig!",
        "Extra USB-laders / 12V-splitter"
      ]
    },
    {
      title: "Fun & Rally-stuff",
      icon: Music,
      items: [
        "Thema-outfit",
        "Muzieklijst",
        "Spelletjes"
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
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">INPAKLIJST</h1>
          <p className="text-xl text-muted-foreground">Ga goed voorbereid op pad!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-secondary/5 p-4 border-b border-border flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl">{category.title}</h3>
              </div>
              <ul className="p-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PackingList;
