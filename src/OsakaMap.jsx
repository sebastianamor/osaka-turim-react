
import { useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./OsakaMap.css";

const placeIcon = L.divIcon({
  className: "osaka-map-marker",
  html: '<span class="osaka-map-pin">📍</span>',
  iconSize: [32, 38],
  iconAnchor: [16, 36],
  popupAnchor: [0, -32],
});

function OsakaMap({ places, language = "es" }) {
  const validPlaces = useMemo(
    () =>
      places.filter(
        (place) =>
          Number.isFinite(Number(place.lat)) &&
          Number.isFinite(Number(place.lng)) &&
          place.lat !== "" &&
          place.lng !== "",
      ),
    [places],
  );

  const labels = {
    es: {
  title: "Mapa interactivo de Osaka",
  description:
    "Explora los lugares turísticos y selecciona un marcador para descubrir más.",
  open: "Ver en Google Maps ↗",
  count: "lugares en el mapa",
  details: "Ver ficha turística ↓",
},
en: {
  title: "Interactive map of Osaka",
  description:
    "Explore tourist attractions and select a marker to learn more.",
  open: "Open in Google Maps ↗",
  count: "places on the map",
  details: "View place details ↓",
},
zh: {
  title: "大阪互动地图",
  description: "探索旅游景点，点击标记了解更多信息。",
  open: "在 Google 地图中查看 ↗",
  count: "个景点",
  details: "查看景点详情 ↓",
},
  };

  const t = labels[language] || labels.es;

  return (
    <section className="map-section">
      <div className="map-heading">
        <span className="section-kicker">OSAKA · 日本</span>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
        <span className="map-count">
          {validPlaces.length} {t.count}
        </span>
      </div>

      <div className="map-frame">
        <MapContainer
          center={[34.6937, 135.5023]}
          zoom={12}
          scrollWheelZoom={false}
          className="osaka-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {validPlaces.map((place) => {
            const localized = place[language] || place.es;

            return (
              <Marker
                key={place.id}
                position={[
                  Number(place.lat),
                  Number(place.lng),
                ]}
                icon={placeIcon}
              >
                <Popup>
                  <div className="map-popup">
                    <strong>{localized.name}</strong>
                    <p>{localized.desc}</p>

                   <a href={`#place-${place.id}`}>
  {t.details}
</a>

<a
  href={localized.mapLink}
  target="_blank"
  rel="noopener noreferrer"
>
  {t.open}
</a>

                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
}

export default OsakaMap;
