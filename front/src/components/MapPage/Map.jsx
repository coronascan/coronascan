import React, { useState, useEffect } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
} from "react-simple-maps";

// const options = {
//     colorAxis: { colors: ['3D6298', 'BDAF7E', 'A43F3D'] },
//     tooltip: { isHtml: true, trigger: "selection" }
// };

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = ({ setTooltipContent, countries }) => {
    return (
        <div>
            <ComposableMap data-tip="" projectionConfig={{ scale: 170 }}>
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const cur = countries.find(s => s.nation_eng === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        fill={cur ? (cur.state == 0 ? "#731B1A" : "#E7A3A2") : "#EEEEEE"}
                                        key={geo.rsmKey}
                                        geography={geo}
                                    // onMouseEnter={() => {
                                    //     if (cur) setTooltipContent(`${cur.nation_kr} — ${cur.tooltip}`);
                                    // }}
                                    // onMouseLeave={() => {
                                    //     setTooltipContent("");
                                    // }}
                                    />
                                )
                            })
                        }
                    </Geographies>

                    {/* marker */}
                    {/* {markers.map(({ name, coordinates }) => (
                <Marker key={name} coordinates={coordinates}
                  onMouseEnter={() => {
                    let tooltip = '';
                    countries.find(s => s.nation_kr === name ? tooltip = s.tooltip : tooltip = '');
                    setTooltipContent(`${name} — ${tooltip}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                >
                  <circle r={3} fill="#FF5533" />
                </Marker>
              ))} */}
                </ZoomableGroup>
            </ComposableMap>
        </div >
    );
};

export default Map
