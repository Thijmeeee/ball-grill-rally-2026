import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import RouteSection from "@/components/RouteSection";
import Features from "@/components/Features";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import FAQ from "@/components/FAQ";
import PackingList from "@/components/PackingList";

const Index = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Hero onRegisterClick={() => setShowRegistrationForm(true)} />
      <About />
      <Timeline />
      <RouteSection />
      <Features />
      <Registration onRegisterClick={() => setShowRegistrationForm(true)} />
      <PackingList />
      <FAQ />
      <Footer />

      {showRegistrationForm && (
        <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
      )}
    </div>
  );
};

export default Index;
