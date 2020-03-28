import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
} from "react-simple-maps";

let markers = [
    { markerOffset: -15, name: "후베이", coordinates: [111.009985, 31.786975] }
]

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = ({ setTooltipContent, countries }) => {
    return (
        <div>
            <ComposableMap data-tip="" projectionConfig={{ scale: 170 }}>
                <ZoomableGroup zoom={1} center={[0, -20]}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                // const cur = countries.find(s => s.nation_eng === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        // fill={cur ? (cur.state === 1 ? "#3D6298" : cur.state === 2 ? "#e0b64e" : cur.state === 3 ? "#af3a3a" : "#2b2b2b") : "#CB6E6D"}
                                        fill={"#CB6E6D"}
                                        key={geo.rsmKey}
                                        geography={geo}
                                    // onMouseEnter={() => {
                                    //     if (cur) {
                                    //         let tooltip;
                                    //         cur.state === 1 ? tooltip = "여행 유의" : cur.state === 2 ? tooltip = "여행 자제" : cur.state === 3 ? tooltip = "철수 권고" : tooltip = "여행 금지"
                                    //         setTooltipContent(`${cur.nation_kr} — ${tooltip}`);
                                    //     }
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
                    {markers.map(({ name, coordinates }) => (
                        <Marker key={name} coordinates={coordinates}
                            onMouseEnter={() => {
                                let tooltip;
                                let state;
                                countries.find(s => s.nation_kr === name ? state = s.state : state = '');
                                state === 1 ? tooltip = "여행 유의" : state === 2 ? tooltip = "여행 자제" : state === 3 ? tooltip = "철수 권고" : tooltip = "여행 금지"
                                setTooltipContent(`${name} — ${tooltip}`);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                        >
                            <circle r={4} fill="#731B1A" />
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div >
    );
};

export default Map
