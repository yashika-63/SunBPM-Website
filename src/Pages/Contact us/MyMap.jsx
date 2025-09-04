import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MyMap = () => {
  const position = [19.118705030314057, 72.91354864181613]; // Office coordinates

  return (
    <div className="w-full">
      <MapContainer
        center={position}
        zoom={18}
        style={{ height: "520px", width: "100%" }} // ✅ fixed height
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={redIcon}>
          <Popup>
            <strong>Our Office Location</strong>
            <br />
            5th Floor, Omega House, Hiranandani Gardens, Powai, Mumbai,
            Maharashtra 400076
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
