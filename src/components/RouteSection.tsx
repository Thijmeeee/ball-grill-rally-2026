import Map from "@/components/Map";
import { Flag, MapPin, Trophy, ChevronDown } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { useState } from "react";

const RouteSection = () => {
    const [expandedDay, setExpandedDay] = useState<number | null>(null);

    // Render helper: inline markup parsing
    // **bold** -> black bold
    // ==orange== -> site primary color
    const renderRichInline = (text: string) => {
        const nodes: Array<React.ReactNode> = [];
        const regex = /(==(.+?)==)|\*\*(.+?)\*\*/g;
        let lastIndex = 0;
        let match: RegExpExecArray | null;
        let key = 0;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                nodes.push(text.slice(lastIndex, match.index));
            }

            if (match[2]) {
                // ==orange==
                nodes.push(
                    <span className="text-primary font-semibold" key={`r-${key++}`}>
                        {match[2]}
                    </span>
                );
            } else if (match[3]) {
                // **bold**
                nodes.push(
                    <span className="text-black font-bold" key={`r-${key++}`}>
                        {match[3]}
                    </span>
                );
            }

            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            nodes.push(text.slice(lastIndex));
        }

        return nodes;
    };

    const itinerary = [
        { day: "DAG 1", title: "ALBLASSERDAM", km: 330, desc: "Vertrek uit **Alblasserdam** richting het ==Zwarte Woud==. We verzamelen 's ochtends vroeg en starten onze epische reis door Europa.\n\nDe eerste etappe brengt ons via **België** en **Luxemburg** naar het prachtige ==Zwarte Woud== in Duitsland.", icon: Flag },
        { day: "DAG 2", title: "SEFFERWEICH", km: 460, desc: "Vandaag vertrekken we vanuit het rustige dorp **Sefferweich**, gelegen in de groene heuvels van de **Eifel**. Al snel laten we de glooiende landschappen achter ons en rijden richting het zuiden, waar de wegen breder worden en de uitzichten steeds indrukwekkender. Onderweg voert de route langs charmante Duitse stadjes en door het schilderachtige Rijndal. De rit is een mooie afwisseling van landelijke wegen en vlotte stukken snelweg, waardoor je zowel kunt genieten van het rijden als van het uitzicht.\n\nNaarmate we dichter bij **Waldshut-Tiengen** komen, verandert het landschap: het ==Schwarzwald== ontvouwt zich met zijn donkere bossen, kronkelende wegen en idyllische dorpjes. De eindbestemming, **Waldshut-Tiengen**, ligt pal aan de Zwitserse grens en ademt een mix van Duitse traditie en internationale flair.", icon: MapPin },
        { day: "DAG 3", title: "WALDSHUT-TIENGEN", km: 240, desc: "Na een nacht in het charmante **Waldshut-Tiengen**, pal aan de Zwitserse grens, zetten we koers richting de Alpen. Al snel steken we de grens over en rijden Zwitserland binnen, waar het landschap direct verandert: groene heuvels maken plaats voor bergachtige panorama’s en kristalheldere rivieren.\n\nDe route voert langs de schilderachtige valleien van het **Wallis**. Onderweg zie je typische Zwitserse dorpjes met houten chalets en bloemrijke balkons, terwijl de weg zich steeds verder omhoog slingert. De eindbestemming, **Binn**, ligt verscholen in het Binntal en staat bekend om zijn ongerepte natuur en bijzondere mineralen.", icon: MapPin },
        { day: "DAG 4", title: "BINN", km: 310, desc: "Vandaag verlaten we het idyllische **Binn** in het Zwitserse Binntal, een plek die bekendstaat om zijn rust en ongerepte natuur. De weg slingert zich eerst door smalle bergdalen en langs kabbelende bergbeekjes, waarna we langzaam hoogte winnen.\n\nNa het doorkruisen van het kanton **Wallis** bereiken we de imposante ==Simplonpas==, een van de mooiste bergpassen van Zwitserland. De route vervolgt zich richting Italië en eindigt in het bergdorp **Salbertrand**, aan de voet van de Colle del Monginevro.", icon: MapPin },
        { day: "DAG 5", title: "SABERTRAND", km: 340, desc: "Vandaag vertrekken we uit het bergdorp **Salbertrand**, gelegen aan de voet van de Colle del Monginevro. Al snel klimt de weg omhoog richting de grensovergang bij de ==Col du Montgenèvre==, een route doordrenkt met geschiedenis.\n\nEenmaal in Frankrijk ontvouwt zich het indrukwekkende landschap van de **Hautes-Alpes**. Via **Briançon** en de vallei van de **Durance** gaat de route verder richting de **Savoie**. De eindbestemming, **Demi-Quartier**, ligt vlakbij het mondaine **Megève** en biedt een prachtig uitzicht op ==Mont Blanc==.", icon: MapPin },
        { day: "DAG 6", title: "DEMI-QUARTIER", km: 330, desc: "Na een heerlijke nacht in **Demi-Quartier**, met uitzicht op ==Mont Blanc==, zetten we vandaag koers richting de Vogezen. De route begint met een rit door de **Haute-Savoie**, langs plaatsen als **Megève** en **Albertville**, waarna we via de Rhônevallei richting de Vogezen rijden.\n\nDe eindbestemming, **Saint-Maurice-sur-Moselle**, ligt aan de voet van de Ballon d’Alsace en is een ideale plek om de dag af te sluiten.", icon: MapPin },
        { day: "DAG 7", title: "SAINT-MAURICE-SUR-MOSELLE", km: 590, desc: "De laatste dag van de rally begint in het rustige bergdorp **Saint-Maurice-sur-Moselle** in de Vogezen. Het vertrek voelt bijzonder: na dagen vol bochten en bergpassen begint nu de terugreis richting **Nederland**.\n\nDe route voert via **Lorraine** en de uitgestrekte velden van **Champagne-Ardenne** en voert uiteindelijk terug naar **Alblasserdam**, waar de rally eindigt met veel herinneringen en verhalen.", icon: Trophy },
    ];

    const toggleDay = (index: number) => {
        setExpandedDay(expandedDay === index ? null : index);
    };

    return (
        <section id="route" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">5 Landen • 2500 KM</span>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-secondary mb-6">
                            DE ROUTE
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Map Section - Sticky on Desktop */}
                    <div className="lg:sticky lg:top-32 order-2 lg:order-1">
                        <ScrollAnimation animation="slide-left">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <Map />
                            </div>
                            <div className="mt-8 p-8 bg-secondary text-white rounded-2xl shadow-lg">
                                <h2 className="font-display text-2xl mb-4 tracking-wide text-primary">Hoogtepunten</h2>
                                <ul className="space-y-3 text-white/80">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Gehaktballen
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Zwarte Woud
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Gotthardpas
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Simplonpas
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Pizza 🍕
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Alpe D'huez
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Itinerary Section */}
                    <div className="order-1 lg:order-2 space-y-4">
                        {itinerary.map((item, index) => {
                            const paragraphs = item.desc.split(/\n\s*\n/);
                            const firstPara = paragraphs[0];
                            const remainingParas = paragraphs.slice(1);
                            const isExpanded = expandedDay === index;

                            return (
                                <ScrollAnimation key={index} delay={index * 50} animation="slide-right">
                                    <div 
                                        className="bg-card rounded-xl shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer overflow-hidden"
                                        onClick={() => toggleDay(index)}
                                    >
                                        <div className="flex gap-6 p-6">
                                            <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.day}</span>
                                                <h3 className="font-display text-2xl text-secondary mb-1 tracking-wide">{item.title}</h3>
                                                <p className="text-muted-foreground font-medium">
                                                    {item.km > 0 ? `${item.km} KM` : "FINISH"}
                                                </p>
                                                <p className={`text-muted-foreground text-sm mt-2 ${isExpanded ? '' : 'line-clamp-2'}`}>
                                                    {renderRichInline(firstPara)}
                                                </p>
                                            </div>
                                            <div className="flex items-center">
                                                <ChevronDown 
                                                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                                                        isExpanded ? 'rotate-180' : ''
                                                    }`} 
                                                />
                                            </div>
                                        </div>
                                        <div 
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            {remainingParas.length > 0 && (
                                                <div className="px-6 pb-6 pt-0 ml-20">
                                                    <div className="border-t border-border pt-4">
                                                        <div className="text-muted-foreground leading-relaxed max-h-72 overflow-auto pr-2">
                                                            {remainingParas.map((para, i) => (
                                                                <p className="mb-4 text-sm" key={i}>
                                                                    {renderRichInline(para)}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RouteSection;
