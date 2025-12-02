import React, { useMemo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import "../../CSS/Contact us/WorldMap.css";

const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "India", coordinates: [72.9134842239, 19.11883651198] },
  { name: "Japan", coordinates: [139.766756497, 35.67847362409] },
  { name: "UAE", coordinates: [55.3679448492, 25.24524272391] },
  { name: "Germany", coordinates: [9.17762009959, 48.78212015396] },
  { name: "USA", coordinates: [-121.973872768, 37.7816148192] },
];

const WorldMap = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive scaling
  const mapScale = useMemo(() => {
    if (width > 1400) return 230;
    if (width > 992) return 185;
    if (width > 768) return 150;
    if (width > 480) return 120;
    return 100;
  }, [width]);

  return (
    <div className="worldmap-wrapper">
      <div className="worldmap-title-wrapper">
        <h1 className="worldmap-title">Our Global Presence</h1>
        <div className="worldmap-underline"></div>
      </div>

      <div className="worldmap-container">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: mapScale,
            center: [20, 20], // Good world view
          }}
          width={1000}
          height={500}
          className="map-svg"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="worldmap-geo"
                />
              ))
            }
          </Geographies>

          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle className="map-marker" r={7} />
              <text className="map-marker-label" y={-14}>
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMap;