import React, {useState} from "react";
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
  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
];

const colorScale = [
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"];

const MapChart = ({setTooltipContent, countries}) => {
    return (
    <div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur = countries.find(s => s.nation_eng === geo.properties.NAME);
                  return(
                    <Geography
                    fill={cur? (cur.state == 0? "red" : "black") : "#EEE"}
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if(cur) setTooltipContent(`${cur.nation_kr} — ${cur.tooltip}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />
                  )
              } )
            }
          </Geographies>
     
          {/* marker */}
        {/* {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))} */}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
