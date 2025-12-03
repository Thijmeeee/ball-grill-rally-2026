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
    { name: "Dag 1: Alblasserdam", coords: [51.8642, 4.6597] as [number, number] },
    { name: "Dag 2: SEFFERWEICH", coords: [50.093, 6.552] as [number, number] },
    { name: "Dag 3: WALDSHUT-TIENGEN", coords: [47.610, 8.230] as [number, number] },
    { name: "Dag 4: BINN", coords: [46.369, 8.203] as [number, number] },
    { name: "Dag 5: SABERTRAND", coords: [45.060, 6.867] as [number, number] },
    { name: "Dag 6: DEMI-QUARTIER", coords: [45.88, 6.639] as [number, number] },
    { name: "Dag 7: SAINT-MAURICE-SUR-MOSELLE", coords: [47.855, 6.811] as [number, number] },
    { name: "Dag 7: Alblasserdam", coords: [51.8642, 4.6597]  as [number, number] },
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
