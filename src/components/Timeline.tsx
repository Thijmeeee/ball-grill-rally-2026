import { Flag, Tent, Trophy, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

const Timeline = () => {
  const days = [
    {
      day: "Donderdag",
      title: "De Start",
      description: "Verzamelen in Alblasserdam en vertrek richting avontuur",
      icon: Flag,
      color: "text-primary"
    },
    {
      day: "Vrijdag - Dinsdag",
      title: "Het Avontuur",
      description: "Rally door prachtige landschappen, uitdagende opdrachten, en kamperen op unieke locaties",
      icon: Tent,
      color: "text-accent",
      highlights: [
        "Pitpoezen? Misschien.",
        "Gehaktballen? Zeker weten.",
        "BBQ op de trekhaak? Verplicht aanbevolen."
      ]
    },
    {
      day: "Woensdag",
      title: "De Finale",
      description: "Feestelijke afsluiting op de Visplaat met alle avonturiers",
      icon: Trophy,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 bg-secondary/5 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              De Route
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            HOE HET WERKT
          </h2>

          <p className="text-lg text-muted-foreground">
            Vijf dagen vol avontuur, vriendschap en gehaktballen
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {days.map((day, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-elevated transition-all duration-300 border-l-4 border-l-primary group hover:scale-[1.02]"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <day.icon className={`w-8 h-8 ${day.color}`} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-sm font-bold text-primary uppercase tracking-wide">
                      {day.day}
                    </span>
                    <h3 className="font-display text-3xl text-foreground">
                      {day.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg mb-4">
                    {day.description}
                  </p>

                  {day.highlights && (
                    <ul className="space-y-2">
                      {day.highlights.map((highlight, i) => (
                        <li 
                          key={i}
                          className="flex items-center gap-3 text-foreground/80 italic"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
