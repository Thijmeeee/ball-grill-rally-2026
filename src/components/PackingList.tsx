import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PackingList = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/90 flex flex-col items-center justify-start p-12">
      {/* Terugknop */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-all"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        <ArrowLeft className="w-8 h-8 text-primary animate-pulse" />
        <span className="text-2xl font-bold uppercase tracking-wide">
          Terug
        </span>
      </button>

      {/* Titel */}
      <h1 className="font-display text-6xl text-primary mt-16 mb-8 uppercase tracking-tight text-center">
        Inpaklijst
      </h1>

      {/* Lijst */}
      <ul className="text-lg text-white/90 list-disc list-inside space-y-3 max-w-lg bg-secondary/30 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 shadow-lg">
        <li>Tent</li>
        <li>Slaapzak</li>
        <li>BBQ-spullen</li>
        <li>Rally-outfit</li>
        <li>EHBO-set</li>
        <li>Koelbox met drankjes 🍻</li>
        <li>Goede zin en humor 😎</li>
      </ul>
    </section>
  );
};

export default PackingList;
