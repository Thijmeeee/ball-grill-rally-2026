import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, ArrowRight, Lock } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { useEffect, useState } from "react";

interface RegistrationProps {
  onRegisterClick: () => void;
}

const Registration = ({ onRegisterClick }: RegistrationProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    // Target date: 14 december 2025 om 20:00
    const targetDate = new Date("2025-12-14T20:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setIsRegistrationOpen(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsRegistrationOpen(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer(); // Initial check
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-primary/10 text-primary font-display text-4xl md:text-5xl font-bold w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-2 shadow-inner">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section id="register" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="zoom-in">
          <Card className="max-w-5xl mx-auto bg-card border-none shadow-2xl overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="p-8 md:p-16 text-center relative z-10">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase mb-8 ${isRegistrationOpen ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                {isRegistrationOpen ? <Flame className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                {isRegistrationOpen ? "Inschrijving Geopend" : "Inschrijving start 14 dec 20:00"}
              </div>

              <h2 className="font-display text-5xl md:text-7xl text-secondary mb-6 leading-tight">
                KLAAR VOOR DE START?
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Wacht niet te lang, want vol is vol. Verzeker jezelf en je team van een plekje
                in de meest legendarische rally van 2026.
              </p>

              {/* Countdown */}
              {!isRegistrationOpen && (
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                  <TimeUnit value={timeLeft.days} label="Dagen" />
                  <TimeUnit value={timeLeft.hours} label="Uren" />
                  <TimeUnit value={timeLeft.minutes} label="Minuten" />
                  <TimeUnit value={timeLeft.seconds} label="Seconden" />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={onRegisterClick}
                  disabled={!isRegistrationOpen}
                  className={`font-bold text-xl px-12 py-8 rounded-xl shadow-lg transition-all duration-300 uppercase tracking-wide ${isRegistrationOpen
                    ? 'bg-primary hover:bg-primary/90 text-white hover:shadow-xl hover:scale-105'
                    : 'bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted'
                    }`}
                >
                  {isRegistrationOpen ? (
                    <>
                      Schrijf je nu in
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 w-5 h-5" />
                      Inschrijving Gesloten
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                * Beperkt aantal plekken beschikbaar
              </p>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Registration;
