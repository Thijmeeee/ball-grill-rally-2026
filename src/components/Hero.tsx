import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import backgroundVideo from "@/assets/background-videov5.mp4";
import { useEffect, useRef } from "react";

import Navbar from "./Navbar";

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <Navbar />

      {/* Background Video with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full min-h-screen object-cover animate-zoom-slow"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="animate-fade-in space-y-8 max-w-5xl mx-auto">

          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 shadow-lg hover:bg-white/20 transition-colors cursor-default">
            <Flame className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-white font-bold text-sm tracking-widest uppercase">
              2 - 8 Juli 2026 • Alblasserdam
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] text-white leading-[0.9] tracking-wide drop-shadow-2xl select-none p-4">
            BALL & GRILL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary relative inline-block pb-2 pr-2">
              RALLY 2026
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            5 Landen. 2500 Kilometer. <span className="text-primary font-bold">Eén Legendarisch Avontuur.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative z-10">
            <Button
              size="lg"
              onClick={() => scrollToSection("register")}
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-8 rounded-lg shadow-[0_0_40px_hsl(20_100%_45%_/_0.4)] hover:shadow-[0_0_60px_hsl(20_100%_45%_/_0.6)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              Schrijf je in
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-10 py-8 rounded-lg hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              Ontdek de route
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center z-50">
        <div className="flex flex-col items-center animate-bounce gap-2 cursor-pointer group"
          onClick={() => scrollToSection('about')}>
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
