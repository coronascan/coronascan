import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -15, name: "마셜제도", coordinates: [168.693584, 5.234930] },
  { markerOffset: -15, name: "마이크로 네시아", coordinates: [150.391330, 8.423249] },
  { markerOffset: -15, name: "사모아 (미국령)", coordinates: [-170.719511, -14.281424] },
  { markerOffset: -15, name: "싱가포르", coordinates: [103.735747, 1.349692] },
  { markerOffset: -15, name: "키리바시", coordinates: [-157.179187, 1.794526] },
  { markerOffset: -15, name: "팔레스타인", coordinates: [35.075487, 31.782324] },
  { markerOffset: -15, name: "동티모르", coordinates: [125.892941, -8.613932] },
  { markerOffset: -15, name: "마카오", coordinates: [113.592763, 22.168211] },
  { markerOffset: -15, name: "세인트루시아", coordinates: [-60.903418, 16.395210] },
  { markerOffset: -15, name: "세인트빈센트 그레나딘", coordinates: [-61.228207, 13.294267] },
  { markerOffset: -15, name: "세인트키츠 네비스", coordinates: [-62.588495, 17.167367] },
  { markerOffset: -15, name: "바베이도스", coordinates: [-59.501907, 13.348333] },
  { markerOffset: -15, name: "몰타", coordinates: [14.427318, 35.898707] },
];

const MapChart = ({ setTooltipContent, countries }) => {
  return (
    <div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={1} center={[0, -30]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                console.log(countries);

                const cur = countries.find(s => s.nation_eng === geo.properties.ISO_A3);

                return (
                  <Geography
                    fill={cur ? (cur.state == 0 ? "#731B1A" : "#E7A3A2") : "#EEEEEE"}
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (cur) setTooltipContent(`${cur.nation_kr} — ${cur.tooltip}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* marker */}
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}
              onMouseEnter={e => {
                setTooltipContent(`${name}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <circle r={3} fill="#FF5533" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
