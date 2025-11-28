import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icon not showing
const defaultIcon = new Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const locations = [
    { name: "Alblasserdam (Start)", coords: [51.8642, 4.6597] as [number, number] },
    { name: "Dag 1: Zwarte Woud", coords: [48.463, 8.031] as [number, number] },
    { name: "Dag 2: Oostenrijkse Alpen", coords: [47.269, 11.404] as [number, number] },
    { name: "Dag 3: Dolomieten", coords: [46.551, 12.136] as [number, number] },
    { name: "Dag 4: Sloveense Meren", coords: [46.368, 14.114] as [number, number] },
    { name: "Dag 5: Kroatische Kust", coords: [45.327, 14.442] as [number, number] },
    { name: "Dag 6: Hongaarse Poesta", coords: [46.904, 19.693] as [number, number] },
    { name: "Budapest (Finish)", coords: [47.4979, 19.0402] as [number, number] },
];

const polylinePositions = locations.map(loc => loc.coords);

const Map = () => {
    return (
        <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl border-2 border-primary/20 z-0">
            <MapContainer
                center={[49.0, 12.0]}
                zoom={5}
                scrollWheelZoom={false}
                className="h-full w-full z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((loc, idx) => (
                    <Marker key={idx} position={loc.coords} icon={defaultIcon}>
                        <Popup>
                            <span className="font-bold">{loc.name}</span>
                        </Popup>
                    </Marker>
                ))}
                <Polyline positions={polylinePositions} color="#f97316" weight={4} opacity={0.8} />
            </MapContainer>
        </div>
    );
};

export default Map;
