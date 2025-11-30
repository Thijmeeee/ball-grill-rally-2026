import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            category: "Algemeen",
            items: [
                {
                    question: "Voor wie?",
                    answer: "Alleen voor genodigden. Dit is een prive rally voor alleen geselecteerde gehaktbal en grillers."
                },
                {
                    question: "Waar is de start?",
                    answer: "Donderdagavond rijden we met elkaar naar de eerste camping. De volgende ochtend zal daar de start plaatsvinden."
                },
                {
                    question: "Is navigatie toegestaan?",
                    answer: "Ja, maar je krijgt ook een mooi route boek. Veel leuker om mee te rijden."
                }
            ]
        },
        {
            category: "Eten en Drinken",
            items: [
                {
                    question: "Zit eten en drinken erbij in?",
                    answer: "Nee, maar natuurlijk zullen er wel voor gehaktballen zijn."
                }
            ]
        },
        {
            category: "Overnachten",
            items: [
                {
                    question: "Zitten de campings erbij in?",
                    answer: "Ja, de campings zitten erbij in."
                }
            ]
        },
        {
            category: "Inschrijven",
            items: [
                {
                    question: "Waar moet mijn auto aan voldoen?",
                    answer: "De auto moet minimaal 23 jaar oud zijn. Heb je een nieuwere auto neem dan even contact op met de organisatie."
                },
                {
                    question: "Wat kost de inschrijving?",
                    answer: "Onder de 300 euro per persoon maar exacte bedrag volgt nog. Bij inschrijving wordt wel 75 euro gevraagd als aanbetaling."
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
                    answer: "Via ideal of Tikkie"
                }
            ]
        }
    ];

    return (
        <section id="faq" className="py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
                        VEELGESTELDE VRAGEN
                    </h2>
                    <p className="text-secondary-foreground/70">
                        Alles wat je moet weten voor vertrek
                    </p>
                </div>

                <div className="space-y-8">
                    {faqs.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="font-display text-3xl text-white mb-4 pl-2 border-l-4 border-primary">{category.category}</h3>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {category.items.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${catIndex}-${index}`} className="bg-white/5 px-6 rounded-xl border border-white/10 shadow-sm">
                                        <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary transition-colors text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/70 leading-relaxed pb-4">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
