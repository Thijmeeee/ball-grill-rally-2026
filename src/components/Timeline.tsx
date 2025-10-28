import { Flag, Tent, Trophy, Flame } from "lucide-react";

const Timeline = () => {
  const days = [
    {
      day: "Donderdag",
      title: "De Start",
      description: "Verzamelen in Alblasserdam en vertrek richting avontuur",
      icon: Flag,
    },
    {
      day: "Vrijdag - Dinsdag",
      title: "Het Avontuur",
      description: "Rally door prachtige landschappen, uitdagende opdrachten, en kamperen op unieke locaties",
      icon: Tent,
    },
    {
      day: "Woensdag",
      title: "De Finale",
      description: "Feestelijke afsluiting op de Visplaat met alle avonturiers",
      icon: Trophy,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Warm retro BBQ gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-amber-300 to-red-300 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-red-900/30" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            HOE HET WERKT
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vijf dagen vol avontuur, vriendschap en gehaktballen
          </p>
        </div>

        {/* Horizontal scroll timeline, centered */}
        <div className="relative max-w-6xl w-full">
          <div className="flex justify-center gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {days.map((day, index) => (
              <div key={index} className="flex-shrink-0 w-80 snap-center">
                <div className="h-full bg-white/80 dark:bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 shadow-lg">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(251,146,60,0.3)]">
                      <day.icon className="w-10 h-10 text-white" />
                    </div>

                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 px-4 py-1 rounded-full">
                      {day.day}
                    </span>

                    <h3 className="font-display text-3xl text-foreground mb-4">
                      {day.title}
                    </h3>

                    <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                      {day.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
