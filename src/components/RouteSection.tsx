import Map from "@/components/Map";
import { Flag, MapPin, Trophy } from "lucide-react";

const RouteSection = () => {
    const itinerary = [
        { day: "Dag 1", title: "De Start", desc: "Vertrek uit Alblasserdam richting het Zwarte Woud.", icon: Flag },
        { day: "Dag 2", title: "Alpenpassen", desc: "Via de Duitse Autobahn naar de Oostenrijkse Alpen.", icon: MapPin },
        { day: "Dag 3", title: "Dolomieten", desc: "Slingerende wegen door het hart van de Dolomieten.", icon: MapPin },
        { day: "Dag 4", title: "Slovenië", desc: "Langs helderblauwe meren en groene valleien.", icon: MapPin },
        { day: "Dag 5", title: "Kustlijn", desc: "Cruisen langs de adembenemende Kroatische kust.", icon: MapPin },
        { day: "Dag 6", title: "Poesta", desc: "Door het platteland van Hongarije.", icon: MapPin },
        { day: "Dag 7", title: "De Finish", desc: "Aankomst en feest in het prachtige Boedapest.", icon: Trophy },
    ];

    return (
        <section id="route" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">DE ROUTE</h2>
                    <p className="text-xl text-muted-foreground">7 Landen, 2500 Kilometer, 1 Onvergetelijk Avontuur</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Map Section */}
                    <div className="order-2 lg:order-1 sticky top-24">
                        <Map />
                        <div className="mt-6 p-6 bg-secondary/5 rounded-xl border border-secondary/10">
                            <h3 className="font-display text-2xl mb-2">Hoogtepunten</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Start in Alblasserdam</li>
                                <li>Zwarte Woud & Alpen</li>
                                <li>Dolomieten & Sloveense Meren</li>
                                <li>Kroatische Kust</li>
                                <li>Finish in Boedapest</li>
                            </ul>
                        </div>
                    </div>

                    {/* Itinerary Section */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {itinerary.map((item, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-card rounded-xl shadow-sm border border-border hover:border-primary/50 transition-all group">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.day}</span>
                                    <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RouteSection;
