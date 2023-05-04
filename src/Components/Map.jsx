import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';

function Map() {
    return (
        <div className="map-container mt-6">
            <MapContainer center={[40.712, -74.0]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.712, -74.0]}>
                    <Popup>
                        Legend chef <br /> corporate office.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
