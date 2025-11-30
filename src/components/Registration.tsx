import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Bell } from "lucide-react";
import Countdown from "./Countdown";


interface RegistrationProps {
  onRegisterClick: () => void;
}

const Registration = ({ onRegisterClick }: RegistrationProps) => {
  // Consider the same default target as the countdown component
  const defaultTarget = new Date("2025-12-14T20:00:00");
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    return new Date().getTime() >= defaultTarget.getTime();
  });

  const handleCountdownFinish = () => setIsOpen(true);

  return (
    <section id="register" className="py-24 bg-[#FFF0E5] relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-elevated">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2">
                <Bell className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                  Inschrijving
                </span>
              </div>

              <div>
                <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
                  KLAAR VOOR
                  <br />
                  <span className="text-gradient-fire">HET AVONTUUR?</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Inschrijvingen openen zondag 14 december om 20:00
                </p>
              </div>

              {/* Countdown Timer */}
              <Countdown onFinish={handleCountdownFinish} />

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Zorg dat je klaar staat! De plaatsen zijn beperkt en de interesse is enorm.
                </p>
                <p className="italic">
                  "Stijl. Grill. Gehaktdrang." – Dat is de Ball & Grill Rally
                </p>
              </div>

              <Button
                size="lg"
                onClick={onRegisterClick}
                disabled={!isOpen}
                className={`bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 shadow-[0_0_40px_hsl(25_95%_53%_/_0.4)] hover:shadow-[0_0_60px_hsl(25_95%_53%_/_0.6)] transition-all ${!isOpen ? 'opacity-50 cursor-not-allowed hover:shadow-none' : ''}`}
              >
                <Flame className="mr-2 h-5 w-5" />
                Schrijf je nu in
              </Button>
            </div>
          </Card>
        </div>
      </div>


    </section>
  );
};

export default Registration;
