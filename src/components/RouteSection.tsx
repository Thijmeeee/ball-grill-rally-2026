import Map from "@/components/Map";
import { Flag, MapPin, Trophy } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const RouteSection = () => {
    const itinerary = [
        { day: "DAG 1", title: "DE START", desc: "Vertrek uit Alblasserdam richting het Zwarte Woud.", icon: Flag },
        { day: "DAG 2", title: "ALPENPASSEN", desc: "Via de Duitse Autobahn naar de Oostenrijkse Alpen.", icon: MapPin },
        { day: "DAG 3", title: "DOLOMIETEN", desc: "Slingerende wegen door het hart van de Dolomieten.", icon: MapPin },
        { day: "DAG 4", title: "SLOVENIË", desc: "Langs helderblauwe meren en groene valleien.", icon: MapPin },
        { day: "DAG 5", title: "KUSTLIJN", desc: "Cruisen langs de adembenemende Kroatische kust.", icon: MapPin },
        { day: "DAG 6", title: "POESTA", desc: "Door het platteland van Hongarije.", icon: MapPin },
        { day: "DAG 7", title: "DE FINISH", desc: "Aankomst en feest in het prachtige Boedapest.", icon: Trophy },
    ];

    return (
        <section id="route" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fade-in">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">7 Landen • 2500 KM</span>
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
                                <h2 className="font-display text-2xl mb-4 text-primary">Hoogtepunten</h2>
                                <ul className="space-y-3 text-white/80">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Start in Alblasserdam
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Zwarte Woud & Alpen
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Dolomieten & Sloveense Meren
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Kroatische Kust
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Finish in Boedapest
                                    </li>
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Itinerary Section */}
                    <div className="order-1 lg:order-2 space-y-4">
                        {itinerary.map((item, index) => (
                            <ScrollAnimation key={index} delay={index * 50} animation="slide-right">
                                <div className="flex gap-6 p-6 bg-card rounded-xl shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.day}</span>
                                        <h3 className="font-display text-2xl text-secondary mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RouteSection;
