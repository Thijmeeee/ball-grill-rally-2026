import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import heroImage from "@/assets/hero-volvo-rally.jpg";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Achtergrondafbeelding met overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rally car adventure at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
      </div>

      {/* Navigatie */}
      <nav
        className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex justify-center space-x-8
        backdrop-blur-md rounded-b-lg shadow-md
        bg-gradient-to-b from-secondary/60 via-secondary/50 to-secondary/70"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-white text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Over de Rally
        </button>
        <button
          onClick={() => navigate("/auto")}
          className="text-white text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Auto
        </button>
        <button
          onClick={() => scrollToSection("register")}
          className="text-white text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Inschrijven
        </button>
        <button
          onClick={() => navigate("/inpaklijst")}
          className="text-white text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Inpaklijst
        </button>
        <button
          onClick={() => navigate("/voorwaarden")}
          className="text-white text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Voorwaarden
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center flex-grow">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8">
            <Flame className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary-foreground font-semibold text-sm tracking-wide uppercase">
              2 Juli 2026 t/m 8 Juli 2026 • Alblasserdam
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tight">
            BALL & GRILL
            <br />
            <span className="text-gradient-fire glow-fire">RALLY 2026</span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-4 max-w-3xl mx-auto">
            7 dagen en een legendarisch avontuur
          </p>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Waar avontuur, humor en gehaktballen samenkomen
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("register")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-[0_0_40px_hsl(25_95%_53%_/_0.4)] hover:shadow-[0_0_60px_hsl(25_95%_53%_/_0.6)] transition-all"
            >
              <Flame className="mr-2 h-5 w-5" />
              Schrijf je in
              <span className="ml-2 text-sm opacity-80">(vanaf half november)</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6"
            >
              Meer over het avontuur
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
