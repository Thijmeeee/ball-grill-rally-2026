import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-primary" />
            <span className="font-display text-3xl">BALL & GRILL RALLY</span>
          </div>

          <p className="text-secondary-foreground/80 max-w-md">
            Waar avontuur, humor en gehaktballen samenkomen.
          </p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="/" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Home</a>
            <a href="#route" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Route</a>
            <a href="/auto" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Auto</a>
            <a href="/inpaklijst" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Inpaklijst</a>
            <a href="/voorwaarden" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Voorwaarden</a>
          </nav>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/60 pt-4 border-t border-secondary-foreground/10 w-full max-w-2xl">
            <span>© 2026 Ball & Grill Rally</span>
            <span className="hidden md:inline">•</span>
            <span>Alblasserdam</span>
            <span className="hidden md:inline">•</span>
            <span>2 Juli 2026 t/m 8 Juli 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
