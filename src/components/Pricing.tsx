import { Check, Sparkles } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  const included = [
    "Rally met stofwolken en ronkende motoren",
    "6 nachten kamperen op gezellige campings",
    "De legendarische gehaktballen van de organisatie",
    "Een exclusief rally T-shirt",
    "Minimaal 1, maar misschien wel 2 epische uitstapjes",
    "Jouw persoonlijke routeboek met alle details",
    "Twee rally schildjes voor op je auto",
    "Kans op de NIEUWE felbegeerde trofee",
    "Elke dag een nieuwe sticker bij elke mijlpaal",
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
      
      {/* Decorative Logo */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <img 
          src="/logo-black-transparant.png" 
          alt="" 
          className="h-64 w-auto"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Investering</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary mb-8">
              WAT HET KOST
            </h2>
          </div>
        </ScrollAnimation>

        {/* Main Pricing Card */}
        <ScrollAnimation animation="zoom-in">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-baseline gap-3 mb-4">
                <span className="text-6xl md:text-8xl font-bold text-primary">€ 275</span>
                <span className="text-2xl md:text-3xl text-muted-foreground">per persoon</span>
              </div>
              <p className="text-2xl md:text-3xl text-foreground font-bold mb-3">
                Dit wordt legendarisch!
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Duik in het avontuur en pak je tas, want dit zit allemaal bij je inschrijving inbegrepen:
              </p>
            </div>

            {/* Included Items List */}
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl mx-auto mb-8">
              {included.map((item, index) => (
                <ScrollAnimation key={index} delay={index * 30} animation="slide-left">
                  <div className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Check className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Bonus Footer */}
            <div className="pt-8 border-t-2 border-primary/10 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-lg text-primary font-bold">En nog meer verrassingen onderweg!</span>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <p className="text-muted-foreground italic">
                Een investering in onvergetelijke herinneringen, vriendschappen en pure rally-euforie.
              </p>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Pricing;
