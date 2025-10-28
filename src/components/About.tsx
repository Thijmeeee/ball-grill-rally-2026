import { MapPin, Calendar, Users, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const details = [
    {
      icon: MapPin,
      label: "Startlocatie",
      value: "Alblasserdam"
    },
    {
      icon: Calendar,
      label: "Periode",
      value: "Juni/Juli 2026"
    },
    {
      icon: Calendar,
      label: "Duur",
      value: "Donderdag t/m woensdag"
    },
    {
      icon: Users,
      label: "Deelnemers",
      value: "Avonturiers met smaak"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Over de Rally
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            HET AVONTUUR
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              Welkom bij de <span className="text-primary font-semibold">Ball & Grill Rally</span>: 
              waar avontuur, humor en gehaktballen samenkomen op vier wielen. 
              Dit is geen gewone roadtrip – dit is een vijfdaags epos vol 
              onverwachte wendingen, kampvuren onder de sterren, en de geur 
              van gegrilde perfectie.
            </p>

            <p className="leading-relaxed">
              Trek je rallyschoenen aan, laad je BBQ in, en bereid je voor op 
              een reis die je nooit zult vergeten. Van pittoreske campings tot 
              uitdagende opdrachten – dit is rally meets festival meets 
              culinair avontuur.
            </p>

            <p className="text-xl font-semibold text-foreground italic mt-8">
              "Geen rally zonder rook, geen grill zonder gekkigheid!"
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {details.map((detail, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-elevated transition-all duration-300 border-border hover:border-primary/30 group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <detail.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {detail.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {detail.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
