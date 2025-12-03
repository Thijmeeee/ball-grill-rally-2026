import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1615] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl text-white tracking-normal">
              BALL & GRILL <span className="text-primary">RALLY</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Het ultieme auto-avontuur door Europa. Vriendschap, motoren en de beste gehaktballen.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider text-primary">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@ballgrillrally.nl">info@ballgrillrally.nl</a>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+31612345678">+31 6 45744311</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Nederland</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg uppercase tracking-wider text-primary">Volg Ons</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wasjeauto_cr25/"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Ball & Grill Rally. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
