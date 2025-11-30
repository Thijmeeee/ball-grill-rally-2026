import { Award, Map, Tent, Trophy, Flame, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "@/components/ui/scroll-animation";


const Features = () => {
  const features = [
    {
      icon: Map,
      title: "7 Landen",
      description: "Een epische tocht door Nederland, Duitsland, Oostenrijk, Italië, Slovenië, Kroatië en Hongarije."
    },
    {
      icon: Award,
      title: "Challenges",
      description: "Dagelijkse opdrachten waarmee je punten kunt verdienen voor het klassement."
    },
    {
      icon: Tent,
      title: "Campings",
      description: "Overnacht op zorgvuldig geselecteerde campings op de mooiste locaties."
    },
    {
      icon: Trophy,
      title: "Prijzen",
      description: "Strijd mee voor de titel 'Rally Kampioen 2026' en win fantastische prijzen."
    },
    {
      icon: Flame,
      title: "BBQ & Gezelligheid",
      description: "Elke avond samen eten, drinken en sterke verhalen delen bij het kampvuur."
    },
    {
      icon: PartyPopper,
      title: "Finish Feest",
      description: "Een legendarisch eindfeest in Boedapest om de week in stijl af te sluiten."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              WAAROM DEZE RALLY?
            </h2>

            <p className="text-lg text-muted-foreground">
              Meer dan alleen een autorit - een ervaring voor het leven
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 100} animation="slide-up">
              <Card
                className="p-8 bg-card hover:shadow-elevated transition-all duration-300 border-border hover:border-primary/30 group hover:-translate-y-1 h-full"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all group-hover:scale-110 duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Features;
