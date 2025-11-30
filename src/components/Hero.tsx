import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero-volvo-rally.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { toast } from "sonner";

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [titleClicks, setTitleClicks] = useState(0);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleTitleClick = () => {
    const newCount = titleClicks + 1;
    setTitleClicks(newCount);

    if (newCount === 5) {
      toast.success("MEATBALL MODE ACTIVATED! 🍝", {
        description: "Pas op voor vallende gehaktballen! (Niet echt, maar wel een leuk kleurtje)",
        duration: 5000,
      });

      // Change primary color to Meatball Brown
      document.documentElement.style.setProperty("--primary", "25 76% 31%"); // #8B4513 approx HSL
      document.documentElement.style.setProperty("--primary-foreground", "0 0% 100%");

      // Reset after 10 seconds
      setTimeout(() => {
        document.documentElement.style.removeProperty("--primary");
        document.documentElement.style.removeProperty("--primary-foreground");
        toast.info("Meatball Mode Deactivated", { duration: 2000 });
        setTitleClicks(0);
      }, 10000);
    }
  };

  const NavLinks = () => (
    <>
      <button
        onClick={() => scrollToSection("about")}
        className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        Over de Rally
      </button>
      <button
        onClick={() => scrollToSection("route")}
        className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        Route
      </button>
      <button
        onClick={() => handleNavigation("/auto")}
        className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        Auto
      </button>
      <button
        onClick={() => scrollToSection("register")}
        className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        Inschrijven
      </button>
      <button
        onClick={() => handleNavigation("/inpaklijst")}
        className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        Inpaklijst
      </button>
      <button
        onClick={() => scrollToSection("faq")}
        className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide hover:text-primary transition-colors"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        FAQ
      </button>
    </>
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Achtergrondafbeelding met overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Rally car adventure at sunset"
          className="w-full h-full object-cover animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/50 to-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      {/* Desktop Navigatie */}
      <nav
        className="hidden md:flex absolute top-0 left-0 w-full z-20 px-8 py-6 justify-center space-x-8
        backdrop-blur-md rounded-b-lg shadow-md
        bg-gradient-to-b from-secondary/80 via-secondary/60 to-transparent"
      >
        <NavLinks />
      </nav>

      {/* Mobile Navigatie Toggle */}
      <div className="md:hidden absolute top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:bg-white/20"
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-200">
          <NavLinks />
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center flex-grow">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8 shadow-[0_0_30px_rgba(251,146,60,0.3)] hover:bg-primary/30 transition-colors cursor-default">
            <Flame className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary-foreground font-semibold text-sm tracking-wide uppercase">
              2 Juli 2026 t/m 8 Juli 2026 • Alblasserdam
            </span>
          </div>

          <h1
            onClick={handleTitleClick}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tight drop-shadow-2xl cursor-pointer select-none active:scale-95 transition-transform"
          >
            BALL & GRILL
            <br />
            <span className="text-gradient-fire glow-fire relative inline-block">
              RALLY 2026
              <span className="absolute -inset-1 bg-primary/20 blur-xl -z-10 rounded-full opacity-50 animate-pulse" />
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-4 max-w-3xl mx-auto drop-shadow-lg">
            7 dagen en een legendarisch avontuur
          </p>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Waar avontuur, humor en gehaktballen samenkomen
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("register")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-[0_0_40px_hsl(25_95%_53%_/_0.6)] hover:shadow-[0_0_60px_hsl(25_95%_53%_/_0.8)] hover:scale-105 transition-all duration-300"
            >
              <Flame className="mr-2 h-5 w-5 animate-bounce" />
              Schrijf je in
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
            >
              Meer over het avontuur
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={() => scrollToSection("about")}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 hover:border-white transition-colors">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Wave Separator */}

    </section>
  );
};

export default Hero;
