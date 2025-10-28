import { Map, Award, Tent, Trophy, Flame as Fire, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Map,
      title: "Professioneel Routeboek",
      description: "Met uitdagende opdrachten en verrassingen onderweg"
    },
    {
      icon: Award,
      title: "Rallyschildjes",
      description: "Officiële herkenning voor je avonturiersauto"
    },
    {
      icon: Tent,
      title: "5 Unieke Campings",
      description: "Overnachten op de mooiste plekken"
    },
    {
      icon: Trophy,
      title: "Challenges & Verrassingen",
      description: "Test je rally-skills en creativiteit"
    },
    {
      icon: Fire,
      title: "BBQ Momenten",
      description: "Want geen rally zonder de perfecte grill"
    },
    {
      icon: PartyPopper,
      title: "Eindfeest Visplaat",
      description: "Afsluiten met stijl en je mede-avonturiers"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Fire className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Inbegrepen
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            WAT JE KRIJGT
          </h2>

          <p className="text-lg text-muted-foreground">
            Alles wat je nodig hebt voor het ultieme rally-avontuur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card hover:shadow-elevated transition-all duration-300 border-border hover:border-primary/30 group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
