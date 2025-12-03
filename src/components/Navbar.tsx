import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ["hero", "about", "timeline", "route", "features", "register", "faq"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const NavLinks = ({ mobile = false }) => {
        const links = [
            { id: "about", label: "Het Avontuur" },
            { id: "timeline", label: "Hoe Het Werkt" },
            { id: "route", label: "Route" },
            { id: "features", label: "Wat Je Krijgt" },
            { id: "register", label: "Inschrijven" },
            { id: "faq", label: "FAQ" },
        ];

        return (
            <>
                {links.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={cn(
                            "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary",
                            mobile ? "text-2xl py-4" : "text-white/90",
                            activeSection === link.id && !mobile ? "text-primary" : ""
                        )}
                    >
                        {link.label}
                    </button>
                ))}
            </>
        );
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-secondary/95 backdrop-blur-md border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection("hero")}
                    className="font-display text-2xl md:text-3xl font-bold text-white tracking-normal hover:scale-105 transition-transform"
                >
                    BALL & GRILL <span className="text-primary">RALLY</span>
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLinks />
                    <Button
                        onClick={() => scrollToSection("register")}
                        className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6"
                    >
                        NU INSCHRIJVEN
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:bg-white/10"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[72px] z-40 bg-secondary/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-5 duration-200">
                    <NavLinks mobile />
                    <Button
                        onClick={() => scrollToSection("register")}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 text-xl mt-4"
                    >
                        NU INSCHRIJVEN
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
