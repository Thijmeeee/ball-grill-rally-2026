import { Check, FileText, Tent, Wrench, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "@/components/ui/scroll-animation";

const PackingList = () => {
  const categories = [
    {
      title: "Documenten",
      icon: FileText,
      items: [
        "Paspoort / ID-kaart",
        "Rijbewijs",
        "Kentekenbewijs",
        "Groene kaart (verzekering)",
        "Zorgverzekeringspas",
        "Reisverzekering gegevens",
        "Vignetten (Oostenrijk, Slovenië, etc.)"
      ]
    },
    {
      title: "Kamperen",
      icon: Tent,
      items: [
        "Tent (waterdicht!)",
        "Slaapzak & kussen",
        "Luchtbed / matje",
        "Campingstoelen",
        "Zaklamp / hoofdlamp",
        "Hamer (voor haringen)",
        "Stekkerdoos & verlengsnoer"
      ]
    },
    {
      title: "Auto & Tools",
      icon: Wrench,
      items: [
        "Reservewiel & krik",
        "Startkabels",
        "Sleepkabel",
        "Gevarendriehoek",
        "Veiligheidshesjes (voor iedereen)",
        "EHBO-doos",
        "Olie & koelvloeistof",
        "Duct tape & tie-wraps (essentieel!)"
      ]
    },
    {
      title: "Persoonlijk",
      icon: Shirt,
      items: [
        "Kleding voor warm & koud weer",
        "Zwemkleding",
        "Handdoeken",
        "Toiletspullen",
        "Zonnebril & zonnebrand",
        "Powerbank",
        "Goede playlist"
      ]
    }
  ];

  return (
    <section id="packing-list" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Voorbereiding</span>
            <h2 className="font-display text-5xl md:text-6xl text-secondary mb-6">
              INPAKLIJST
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Een goede voorbereiding is het halve werk.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 100} animation="slide-up">
              <Card className="h-full p-6 bg-card border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                    <category.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl text-secondary tracking-wide">{category.title}</h3>
                </div>

                <ul className="space-y-3 text-left">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <div className="mt-1 min-w-[16px]">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackingList;
