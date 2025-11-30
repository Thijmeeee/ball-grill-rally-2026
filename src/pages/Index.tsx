import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import RouteSection from "@/components/RouteSection";
import Features from "@/components/Features";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import { useKonamiCode } from "@/hooks/use-konami-code";
import Confetti from "react-confetti";
import { toast } from "sonner";

const Index = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const konamiSuccess = useKonamiCode();
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (konamiSuccess) {
      toast.success("CHEAT CODE ACTIVATED! 🎮", {
        description: "Je hebt de geheime modus ontgrendeld! Geniet van de confetti!",
        duration: 5000,
      });
    }
  }, [konamiSuccess]);

  return (
    <div className="min-h-screen relative">
      {konamiSuccess && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={500}
            recycle={false}
          />
        </div>
      )}

      <Hero onRegisterClick={() => setShowRegistrationForm(true)} />
      <About />
      <Timeline />
      <RouteSection />
      <Features />
      <Registration onRegisterClick={() => setShowRegistrationForm(true)} />
      <FAQ />
      <Footer />

      {showRegistrationForm && (
        <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
      )}
    </div>
  );
};

export default Index;
