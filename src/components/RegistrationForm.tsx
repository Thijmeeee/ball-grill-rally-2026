import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Flame, X, Loader2, Shirt, Users, User, ChevronLeft, ChevronRight, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";
import { supabase } from "@/lib/supabaseClient";
import emailjs from '@emailjs/browser';

interface PersonData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  tshirtSize: string;
}

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const [teamData, setTeamData] = useState({
    teamName: "",
    teamNumber: "",
    teamSize: "2",
    carBrand: "",
    carModel: "",
    licensePlate: "",
  });

  const [persons, setPersons] = useState<PersonData[]>([
    { firstName: "", lastName: "", email: "", phone: "", street: "", houseNumber: "", postalCode: "", city: "", tshirtSize: "M" },
    { firstName: "", lastName: "", email: "", phone: "", street: "", houseNumber: "", postalCode: "", city: "", tshirtSize: "M" },
  ]);

  const tshirtSizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Update window size
  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Hide overflow to prevent scrolling
    document.body.style.overflow = "hidden";

    // Compensate for scrollbar to avoid layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
      document.body.style.paddingRight = originalPaddingRight || "";
    };
  }, []);

  // Adjust persons array when team size changes
  useEffect(() => {
    const size = parseInt(teamData.teamSize) || 2;
    if (size > persons.length) {
      const newPersons = [...persons];
      while (newPersons.length < size) {
        newPersons.push({ firstName: "", lastName: "", email: "", phone: "", street: "", houseNumber: "", postalCode: "", city: "", tshirtSize: "M" });
      }
      setPersons(newPersons);
    } else if (size < persons.length) {
      setPersons(persons.slice(0, size));
    }
  }, [teamData.teamSize]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to Supabase
      const dbData = {
        team_name: teamData.teamName,
        team_number: teamData.teamNumber,
        team_size: parseInt(teamData.teamSize),
        car_brand: teamData.carBrand,
        car_model: teamData.carModel,
        license_plate: teamData.licensePlate,
        persons: persons.map(p => ({
          first_name: p.firstName,
          last_name: p.lastName,
          email: p.email,
          phone: p.phone,
          street: p.street,
          house_number: p.houseNumber,
          postal_code: p.postalCode,
          city: p.city,
          tshirt_size: p.tshirtSize,
        })),
      };

      const { error: dbError } = await supabase
        .from('registrations')
        .insert([dbData]);

      if (dbError) {
        console.error('Supabase error:', dbError);
        console.error('Error details:', JSON.stringify(dbError, null, 2));
      }


      // Send email to ALL team members
      const emailPromises = persons.map((person, index) => {
        return emailjs.send(
          'service_vdr96lk',
          'template_892xnai',
          {
            to_name: `${person.firstName} ${person.lastName}`,
            to_email: person.email,
            team_name: teamData.teamName,
            team_number: teamData.teamNumber,
            message: index === 0
              ? "Je bent ingeschreven als contactpersoon! We nemen snel contact op."
              : "Je bent ingeschreven! We nemen snel contact op."
          },
          '3A-KlFMiw_IP0Ejw1'
        );
      });

      // Wait for all emails to be sent
      await Promise.all(emailPromises);


      toast({
        title: "Inschrijving ontvangen! 🔥",
        description: "We hebben je aanmelding succesvol verwerkt. Check je mail!",
      });

      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem contact op.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // If editing teamNumber, allow digits only and limit to 2 characters
    if (name === "teamNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 2);
      setTeamData({
        ...teamData,
        teamNumber: digits
      });
      return;
    }

    if (name === "teamSize") {
      let size = parseInt(value) || 2;
      if (size < 2) size = 2;
      if (size > 4) size = 4;

      setTeamData({
        ...teamData,
        teamSize: String(size)
      });
      return;
    }

    setTeamData({
      ...teamData,
      [name]: value
    });
  };

  const handlePersonChange = (index: number, field: keyof PersonData, value: string) => {
    const newPersons = [...persons];
    newPersons[index] = { ...newPersons[index], [field]: value };
    setPersons(newPersons);
  };

  const isTeamTabValid = () => {
    return teamData.teamName && teamData.teamSize && teamData.carBrand && teamData.carModel && teamData.licensePlate;
  };

  const isPersonsTabValid = () => {
    return persons.every(p =>
      p.firstName && p.lastName && p.email && p.phone && p.street && p.houseNumber && p.postalCode && p.city && p.tshirtSize
    );
  };

  const tabs = [
    { label: "Team", icon: Users },
    { label: "Personen", icon: User },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm animate-fade-in">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={false} />}

      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card p-8 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
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

        {/* Tabs (display only) - not clickable, navigation via Prev/Next only */}
        <div className="flex gap-2 mb-8 select-none">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${currentTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
                }`}
              aria-hidden
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {index === 0 && isTeamTabValid() && (
                <span className="w-2 h-2 bg-green-500 rounded-full ml-2" />
              )}
              {index === 1 && isPersonsTabValid() && (
                <span className="w-2 h-2 bg-green-500 rounded-full ml-2" />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Tab 1: Team gegevens */}
          {currentTab === 0 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Teamnaam *</Label>
                  <Input
                    id="teamName"
                    name="teamName"
                    required
                    placeholder="De Gehaktbal Helden"
                    value={teamData.teamName}
                    onChange={handleTeamChange}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamNumber">Teamnummer *</Label>
                  <Input
                    id="teamNumber"
                    name="teamNumber"
                    required
                    placeholder="42"
                    value={teamData.teamNumber}
                    onChange={handleTeamChange}
                    className="bg-background"
                    maxLength={2}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamSize">Aantal Personen *</Label>
                <Input
                  id="teamSize"
                  name="teamSize"
                  type="number"
                  min="2"
                  max="4"
                  required
                  value={teamData.teamSize}
                  onChange={handleTeamChange}
                  className="bg-background"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  <Label className="text-base font-semibold">Auto gegevens</Label>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="carBrand">Merk *</Label>
                    <Input
                      id="carBrand"
                      name="carBrand"
                      required
                      placeholder="Volvo"
                      value={teamData.carBrand}
                      onChange={handleTeamChange}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="carModel">Model *</Label>
                    <Input
                      id="carModel"
                      name="carModel"
                      required
                      placeholder="V70"
                      value={teamData.carModel}
                      onChange={handleTeamChange}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licensePlate">Kenteken *</Label>
                  <Input
                    id="licensePlate"
                    name="licensePlate"
                    required
                    placeholder="AB-123-CD"
                    value={teamData.licensePlate}
                    onChange={handleTeamChange}
                    className="bg-background uppercase"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Persoonlijke gegevens */}
          {currentTab === 1 && (
            <div className="space-y-8">
              {persons.map((person, index) => (
                <div key={index} className="space-y-4 p-6 bg-muted/30 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg">
                      Persoon {index + 1} {index === 0 && <span className="text-muted-foreground text-sm font-normal">(Contactpersoon)</span>}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`firstName-${index}`}>Voornaam *</Label>
                      <Input
                        id={`firstName-${index}`}
                        required
                        placeholder="Jan"
                        value={person.firstName}
                        onChange={(e) => handlePersonChange(index, 'firstName', e.target.value)}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`lastName-${index}`}>Achternaam *</Label>
                      <Input
                        id={`lastName-${index}`}
                        required
                        placeholder="Jansen"
                        value={person.lastName}
                        onChange={(e) => handlePersonChange(index, 'lastName', e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`email-${index}`}>E-mailadres *</Label>
                      <Input
                        id={`email-${index}`}
                        type="email"
                        required
                        placeholder="jan@voorbeeld.nl"
                        value={person.email}
                        onChange={(e) => handlePersonChange(index, 'email', e.target.value)}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`phone-${index}`}>Telefoonnummer *</Label>
                      <Input
                        id={`phone-${index}`}
                        type="tel"
                        required
                        placeholder="06 12345678"
                        value={person.phone}
                        onChange={(e) => handlePersonChange(index, 'phone', e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 space-y-2">
                      <Label htmlFor={`street-${index}`}>Straat *</Label>
                      <Input
                        id={`street-${index}`}
                        required
                        placeholder="Hoofdstraat"
                        value={person.street}
                        onChange={(e) => handlePersonChange(index, 'street', e.target.value)}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`houseNumber-${index}`}>Nr. *</Label>
                      <Input
                        id={`houseNumber-${index}`}
                        required
                        placeholder="123"
                        value={person.houseNumber}
                        onChange={(e) => handlePersonChange(index, 'houseNumber', e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`postalCode-${index}`}>Postcode *</Label>
                      <Input
                        id={`postalCode-${index}`}
                        required
                        placeholder="1234 AB"
                        value={person.postalCode}
                        onChange={(e) => handlePersonChange(index, 'postalCode', e.target.value)}
                        className="bg-background uppercase"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`city-${index}`}>Woonplaats *</Label>
                      <Input
                        id={`city-${index}`}
                        required
                        placeholder="Amsterdam"
                        value={person.city}
                        onChange={(e) => handlePersonChange(index, 'city', e.target.value)}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shirt className="w-4 h-4 text-primary" />
                      <Label htmlFor={`tshirtSize-${index}`}>T-shirt maat *</Label>
                    </div>
                    <Select
                      value={person.tshirtSize}
                      onValueChange={(value) => handlePersonChange(index, 'tshirtSize', value)}
                    >
                      <SelectTrigger id={`tshirtSize-${index}`} className="bg-background">
                        <SelectValue placeholder="Selecteer maat" />
                      </SelectTrigger>
                      <SelectContent>
                        {tshirtSizeOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex gap-4 pt-8">
            {currentTab > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentTab(currentTab - 1)}
                className="flex-1"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Vorige
              </Button>
            )}

            {currentTab === 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Annuleren
              </Button>
            )}

            {currentTab < tabs.length - 1 ? (
              <Button
                type="button"
                onClick={() => setCurrentTab(currentTab + 1)}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                disabled={!isTeamTabValid()}
              >
                Volgende
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                disabled={isSubmitting || !isTeamTabValid() || !isPersonsTabValid()}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verwerken...
                  </>
                ) : (
                  <>
                    <Flame className="mr-2 h-4 w-4" />
                    Verstuur inschrijving
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
