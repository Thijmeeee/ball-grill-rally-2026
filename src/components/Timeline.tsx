import { Flag, Tent, Trophy } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const Timeline = () => {
  const steps = [
    {
      step: "01",
      title: "DE START",
      subtitle: "DONDERDAG",
      description: "We verzamelen in Alblasserdam voor de grote start. ",
      icon: Flag,
    },
    {
      step: "02",
      title: "HET AVONTUUR",
      subtitle: "VRIJDAG - WOENSDAG",
      description: "Zes dagen rijden we de mooiste routes, voeren we opdrachten uit en kamperen we op mooie campings.",
      icon: Tent,
    },
    {
      step: "03",
      title: "DE FINALE",
      subtitle: "WOENSDAG",
      description: "We finishen weer in Alblasserdam met een prijsuitreiking en een groepsknuffel.",
      icon: Trophy,
    }
  ];

  return (
    <section id="timeline" className="py-24 md:py-32 bg-secondary relative overflow-hidden text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Planning</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              HOE HET WERKT
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-white/10 -z-10 transform -translate-y-1/2" />

          {steps.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 200} animation="zoom-in">
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(230,81,0,0.4)] group-hover:scale-110 transition-transform duration-300 z-10 relative">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white text-secondary font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {item.step}
                  </div>
                </div>

                <span className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">
                  {item.subtitle}
                </span>

                <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
