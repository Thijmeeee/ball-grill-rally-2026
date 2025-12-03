import { Flag, Tent, Trophy, MapPin } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const Timeline = () => {
  const steps = [
    {
      step: "01",
      title: "DE START",
      subtitle: "DONDERDAG",
      description: "We verzamelen in Alblasserdam voor de grote start.",
      icon: Flag,
    },
    {
      step: "02",
      title: "TUSSENSTOPS",
      subtitle: "ONDERWEG",
      description:
        "Tussen de etappes stoppen we voor leuke bezienswaardigheden en korte benenstrekmomenten.",
      icon: MapPin,
    },
    {
      step: "03",
      title: "HET AVONTUUR",
      subtitle: "VRIJDAG - WOENSDAG",
      description:
        "Zes dagen rijden we de mooiste routes, voeren we opdrachten uit en kamperen we op mooie campings.",
      icon: Tent,
    },
    {
      step: "04",
      title: "DE FINALE",
      subtitle: "WOENSDAG",
      description:
        "We finishen weer in Alblasserdam met een prijsuitreiking en een groepsknuffel.",
      icon: Trophy,
    },
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

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
            {steps.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 200} animation="zoom-in">
                <div className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(230,81,0,0.4)] group-hover:scale-110 transition-transform duration-300 z-10 relative">
                      <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white text-secondary font-bold w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg text-sm">
                      {item.step}
                    </div>
                  </div>

                  <span className="text-primary font-bold tracking-widest uppercase mb-2 text-xs md:text-sm">
                    {item.subtitle}
                  </span>

                  <h3 className="font-display tracking-wide text-2xl md:text-3xl text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed text-sm md:text-base px-2">
                    {item.description}
                  </p>
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
