import { Beer, Car, Map, Medal, Music, Tent } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollAnimation from "@/components/ui/scroll-animation";

const Features = () => {
  const features = [
    {
      icon: Map,
      title: "UNIEKE ROUTES",
      description: "Elke dag een nieuwe verrassing. Van bergpassen tot zandwegen, wij hebben de mooiste routes voor je uitgestippeld.",
    },
    {
      icon: Tent,
      title: "TOP CAMPINGS",
      description: "Overnacht op mooie of karakteristieke campings met sfeer en uitzicht",
    },
    {
      icon: Beer,
      title: "ETEN & DRINKEN",
      description: "Dat regel je natuurlijk zelf maar op de eerste dag zijn er zeker ballen!",
    },
    {
      icon: Car,
      title: "PECHHULP",
      description: "Onze technische crew rijdt mee maar of ze je kunnen helpen zien we dan wel. We rijden met elkaar en helpen elkaar!",
    },
    {
      icon: Music,
      title: "AVONDEN",
      description: "Na het rijden is het tijd voor gezelligheid, drankjes, BBQ en soms ook activiteiten.",
    },
    {
      icon: Medal,
      title: "PRIJZEN",
      description: "Er zijn zeker prijzen te winnen! een vakkundige jury zal de auto beoordele en de opdrachten nakijken.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Inclusief</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              WAT JE KRIJGT
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 100} animation="zoom-in">
              <Card className="h-full p-8 bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex flex-col items-start space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl text-white mb-3 tracking-wide group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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
