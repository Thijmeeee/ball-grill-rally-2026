import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Plus } from "lucide-react";

const FAQ = () => {
    const faqs = [
        {
            question: "Voor wie?",
            answer: "Alleen voor genodigden. Dit is een prive rally voor alleen geselecteerde gehaktbal en grillers."
        },
        {
            question: "Waar is de start?",
            answer: "De start is in Alblasserdam. Exacte locatie komt een paar weken voor de start."
        },
        {
            question: "Is navigatie toegestaan?",
            answer: "Ja, maar je krijgt ook een mooi route boek. Veel leuker om mee te rijden."
        },
        {
            question: "Zit eten en drinken erbij in?",
            answer: "Nee, maar natuurlijk zullen er wel gehaktballen zijn."
        },
        {
            question: "Zitten de campings erbij in?",
            answer: "Ja, de campings zitten erbij in."
        },
        {
            question: "Waar moet mijn auto aan voldoen?",
            answer: "De auto moet minimaal 23 jaar oud zijn. Heb je een nieuwere auto neem dan even contact op met de organisatie."
        },
        {
            question: "Wat kost de inschrijving?",
            answer: "€275 per persoon. Bij inschrijving wordt wel 75 euro gevraagd als aanbetaling."
        },
        {
            question: "Krijg ik mijn aanbetaling terug als ik toch niet mee ga?",
            answer: "Nee, je kan helaas je aanbetaling niet terug krijgen. Dit zijn namelijk de kosten die we nu al moeten maken en wij ook niet terug kunnen krijgen."
        },
        {
            question: "Heb ik een vignet nodig en kom ik langs tolwegen?",
            answer: "Ja, je komt langs langs tolwegen en je hebt een vignet nodig."
        },
        {
            question: "Hoe kan ik betalen?",
            answer: "Na de inschrijving wordt er een Tikkie gestuurd."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider">
                            Veelgestelde Vragen
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {faqs.map((faq, index) => (
                        <ScrollAnimation key={index} animation="slide-up" delay={index * 50}>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index}`} className="bg-white rounded-xl border-none px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
                                    <AccordionTrigger className="text-lg font-bold text-secondary hover:text-primary hover:no-underline py-4 [&>svg]:hidden [&[data-state=open]>div>svg]:rotate-45">
                                        <span className="text-left">{faq.question}</span>
                                        <div className="shrink-0 ml-4 w-8 h-8 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary transition-all duration-300">
                                            <Plus className="w-4 h-4 transition-transform duration-300" />
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-secondary/70 leading-relaxed pb-4 text-base font-medium">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
