import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Flame, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: "",
    name: "",
    email: "",
    car: "",
    recipe: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Inschrijving ontvangen! 🔥",
      description: "We nemen binnenkort contact met je op voor de volgende stappen.",
    });
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card p-8 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Inschrijving
            </span>
          </div>
          <h2 className="font-display text-4xl text-foreground mb-2">
            SCHRIJF JE IN
          </h2>
          <p className="text-muted-foreground">
            Vul onderstaande gegevens in om je aan te melden
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="teamName">Teamnaam *</Label>
            <Input
              id="teamName"
              name="teamName"
              required
              placeholder="De Gehaktbal Helden"
              value={formData.teamName}
              onChange={handleChange}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Naam contactpersoon *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Jan Jansen"
              value={formData.name}
              onChange={handleChange}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mailadres *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jan@voorbeeld.nl"
              value={formData.email}
              onChange={handleChange}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="car">Auto (merk & model) *</Label>
            <Input
              id="car"
              name="car"
              required
              placeholder="Volvo V70"
              value={formData.car}
              onChange={handleChange}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="recipe">Wat is jouw geheime gehaktbalrecept? 🔥</Label>
            <Textarea
              id="recipe"
              name="recipe"
              placeholder="Vertel ons over je culinaire geheim..."
              value={formData.recipe}
              onChange={handleChange}
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuleren
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              <Flame className="mr-2 h-4 w-4" />
              Verstuur inschrijving
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
