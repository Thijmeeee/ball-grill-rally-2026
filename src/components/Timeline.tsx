import { Flag, Tent, Trophy, Flame } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";


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
      description: "Feestelijke afsluiting met alle avonturiers",
      icon: Trophy,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFF8F0]">


      {/* Subtle texture/gradient instead of harsh neon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <ScrollAnimation animation="fade-in">
          <div className="max-w-4xl text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              HOE HET WERKT
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vijf dagen vol avontuur, vriendschap en gehaktballen
            </p>
          </div>
        </ScrollAnimation>

        {/* Horizontal scroll timeline, centered */}
        <div className="relative max-w-6xl w-full">
          <div className="flex justify-center gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {days.map((day, index) => (
              <ScrollAnimation key={index} delay={index * 200} animation="zoom-in" className="flex-shrink-0 w-80 snap-center">
                <div className="h-full bg-white/80 dark:bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all hover:scale-105 shadow-lg group">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(251,146,60,0.3)] group-hover:scale-110 transition-transform duration-300">
                      <day.icon className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Timeline;
