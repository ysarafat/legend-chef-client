import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';

import icon from '../../public/marker-icon.png';

// create a new L.Icon object with the correct iconUrl path
const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
});

L.Marker.prototype.options.icon = markerIcon;
function Map() {
    return (
        <div className="map-container mt-6">
            <MapContainer center={[40.712, -74.0]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.712, -74.0]} icon={markerIcon}>
                    <Popup>
                        Legend chef <br /> corporate office.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
