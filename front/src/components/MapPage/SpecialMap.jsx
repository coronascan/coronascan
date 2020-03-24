import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const SpecialMap = ({ setTooltipContent, countries }) => {
    return (
        <div>
            <ComposableMap data-tip="" projectionConfig={{ scale: 170 }}>
                <ZoomableGroup zoom={1} center={[0, -10]}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const cur = '';
                                return (
                                    <Geography
                                        fill={geo.properties.CONTINENT === 'Europe' ? "#A43F3D" : "#E7A3A2"}
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
                    {/* {markers.map(({ name, coordinates }) => (
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
                            <circle r={5} fill="#c34041" />
                        </Marker>
                    ))} */}
                </ZoomableGroup>
            </ComposableMap>
        </div >
    );
};

export default SpecialMap;
