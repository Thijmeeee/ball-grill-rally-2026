import { Card } from "@/components/ui/card";
import { ChefHat, Map, Users } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const About = () => {
  const cards = [
    {
      icon: Map,
      title: "5 LANDEN",
      description: "Een epische tocht van 2500km door de mooiste landschappen van Europa.",
    },
    {
      icon: Users,
      title: "VRIENDSCHAP",
      description: "Samen rijden, samen mooie avonturen beleven!",
    },
    {
      icon: ChefHat,
      title: "GEHAKTBALLEN",
      description: "Aan het begin van de reis de beste gehaktballen van de grill.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Over de Rally</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary mb-8">
              HET AVONTUUR
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              De Ball & Grill Rally is niet zomaar een roadtrip. Het is een trip vol actie,
              avontuur en gezelligheid. We rijden over de mooiste wegen, kamperen op unieke
              locaties en sluiten elke dag met de grill en een borrel.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ScrollAnimation key={index} delay={index * 100} animation="slide-up">
              <Card className="p-8 h-full bg-card border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:rotate-12 transition-all duration-300">
                    <card.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display text-3xl text-secondary">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
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

export default About;
