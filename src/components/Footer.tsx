import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-primary" />
            <span className="font-display text-3xl">BALL & GRILL RALLY</span>
          </div>

          <p className="text-secondary-foreground/80 max-w-md">
            Waar avontuur, humor en gehaktballen samenkomen. 
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/60">
            <span>© 2026 Ball & Grill Rally</span>
            <span>•</span>
            <span>Alblasserdam</span>
            <span>•</span>
            <span>Juni/Juli 2026</span>
          </div>

          <p className="text-xs text-secondary-foreground/50 italic">
            "De enige rally waar je auto én BBQ meedoen"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
