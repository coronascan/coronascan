import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

let markers = [
  { markerOffset: -15, name: "마셜제도", coordinates: [168.693584, 5.234930] },
  { markerOffset: -15, name: "마이크로 네시아", coordinates: [150.391330, 8.423249] },
  { markerOffset: -15, name: "사모아 (미국령)", coordinates: [-170.719511, -14.281424] },
  { markerOffset: -15, name: "싱가포르", coordinates: [103.735747, 1.349692] },
  { markerOffset: -15, name: "키리바시", coordinates: [-157.179187, 1.794526] },
  { markerOffset: -15, name: "피지", coordinates: [177.995025, -17.765733] },
  { markerOffset: -15, name: "팔레스타인", coordinates: [35.075487, 31.782324] },
  { markerOffset: -15, name: "동티모르", coordinates: [125.892941, -8.613932] },
  // { markerOffset: -15, name: "마카오", coordinates: [113.592763, 22.168211] },
  // { markerOffset: -15, name: "세인트루시아", coordinates: [-60.903418, 16.395210] },
  // { markerOffset: -15, name: "세인트빈센트 그레나딘", coordinates: [-61.228207, 13.294267] },
  // { markerOffset: -15, name: "세인트키츠 네비스", coordinates: [-62.588495, 17.167367] },
  // { markerOffset: -15, name: "벨라루스", coordinates: [27.973089, 53.279762] },
  // { markerOffset: -15, name: "바베이도스", coordinates: [-59.501907, 13.348333] },
  // { markerOffset: -15, name: "몰타", coordinates: [14.427318, 35.898707] },
  // { markerOffset: -15, name: "과테말라", coordinates: [-90.146192, 15.751945] },
  // { markerOffset: -15, name: "우즈베키스탄", coordinates: [63.530355, 41.820485] },
  // { markerOffset: -15, name: "헝가리", coordinates: [19.667586, 47.019559] },
  // { markerOffset: -15, name: "이라크", coordinates: [43.064739, 33.011225] },
  // { markerOffset: -15, name: "일본", coordinates: [139.246267, 36.901169] },
  // { markerOffset: -15, name: "세르비아", coordinates: [20.942046, 44.094204] },
  // { markerOffset: -15, name: "후난성", coordinates: [112.017085, 27.956967] },
  // { markerOffset: -15, name: "하이난성", coordinates: [109.711023, 18.928327] },
  // { markerOffset: -15, name: "광시좡족", coordinates: [109.120388, 23.917433] },
  // { markerOffset: -15, name: "상하이시", coordinates: [121.512267, 31.211390] },
  // { markerOffset: -15, name: "장쑤성", coordinates: [120.143298, 33.591769] },
  // { markerOffset: -15, name: "저장성", coordinates: [119.859408, 29.407712] },
  // { markerOffset: -15, name: "쓰촨성", coordinates: [102.977897, 30.273718] },
  // { markerOffset: -15, name: "충칭시", coordinates: [106.906934, 29.426715] },
  // { markerOffset: -15, name: "윈난성", coordinates: [101.716081, 24.376278] },
  // { markerOffset: -15, name: "구이저우성", coordinates: [,] },
  // { markerOffset: -15, name: "산시성 (陝西省)", coordinates: [,] },
  // { markerOffset: -15, name: "간쑤성", coordinates: [,] },
  // { markerOffset: -15, name: "베이징시", coordinates: [,] },
  // { markerOffset: -15, name: "허베이성", coordinates: [,] },
  // { markerOffset: -15, name: "톈진시", coordinates: [,] },
  // { markerOffset: -15, name: "베트남", coordinates: [,] },
  // { markerOffset: -15, name: "스리랑카", coordinates: [,] },
  // { markerOffset: -15, name: "루마니아", coordinates: [,] },
  // { markerOffset: -15, name: "크로아티아", coordinates: [,] },
  // { markerOffset: -15, name: "타지키스탄", coordinates: [,] },
  // { markerOffset: -15, name: "방글라데시", coordinates: [,] },
  // { markerOffset: -15, name: "인도", coordinates: [,] },
  // { markerOffset: -15, name: "태국", coordinates: [,] },
  // { markerOffset: -15, name: "멕시코", coordinates: [,] },
  // { markerOffset: -15, name: "브라질", coordinates: [,] },
  // { markerOffset: -15, name: "파나마", coordinates: [,] },
  // { markerOffset: -15, name: "러시아", coordinates: [,] },
  // { markerOffset: -15, name: "말리", coordinates: [,] },
  // { markerOffset: -15, name: "에티오피아", coordinates: [,] },
];

const MapChart = ({ selected, setTooltipContent, countries }) => {
  if (selected) {
    console.log("selected! ", selected)
    markers.push(
      { markerOffset: -15, name: "동티모르", coordinates: [125.892941, -8.613932] }
    )
  }

  return (
    <div>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={1} center={[0, -30]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
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
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}
              onMouseEnter={e => {
                setTooltipContent(name);
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
