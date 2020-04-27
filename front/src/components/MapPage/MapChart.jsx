import React, { useState, useContext } from "react";
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './style.css';
import ResultContext from '../../contexts/ResultContext';
import {Redirect,useHistory ,Link} from 'react-router-dom'
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
  { markerOffset: -15, name: "팔레스타인", coordinates: [35.075487, 31.782324] },
  // { markerOffset: -15, name: "동티모르", coordinates: [125.892941, -8.613932] },
  { markerOffset: -15, name: "마카오", coordinates: [113.592763, 22.168211] },
  // { markerOffset: -15, name: "세인트루시아", coordinates: [-60.903418, 16.395210] },
  { markerOffset: -15, name: "세인트빈센트 그레나딘", coordinates: [-61.228207, 13.294267] },
  { markerOffset: -15, name: "세인트키츠 네비스", coordinates: [-62.588495, 17.167367] },
  { markerOffset: -15, name: "바베이도스", coordinates: [-59.501907, 13.348333] },
  { markerOffset: -15, name: "몰타", coordinates: [14.427318, 35.898707] },
  { markerOffset: -15, name: "에리트리아", coordinates: [38.850710, 15.346032] },
  { markerOffset: -15, name: "폴리네시아 (프랑스령)", coordinates: [-149.505037, -17.838525] },
  { markerOffset: -15, name: "솔로몬제도", coordinates: [160.367371, -9.719082] },
  { markerOffset: -15, name: "앤티가바부다", coordinates: [-61.782445, 17.623778] },
  { markerOffset: -15, name: "상투메프린시페", coordinates: [6.673950, 0.288768] },
  { markerOffset: -15, name: "도미니카공화국", coordinates: [-70.125439, 18.905797] },
  { markerOffset: -15, name: "투르크메니스탄", coordinates: [59.260050, 38.997273] }
];

const MapChart = ({ setTooltipHide, selected, setTooltipContent, countries }) => {
  let [zoom, setZoom] = useState(1);
  const { changeTarget } = useContext(ResultContext);
  const history = useHistory();

  function handleZoomIn() {
    if (zoom >= 4) return;
    setZoom(zoom * 2);
  }

  function handleZoomOut() {
    if (zoom <= 1) return;
    setZoom(zoom / 2);
  }

  const onNationClicked = (link)=>{
    changeTarget(link)
    history.push(`/result`)
  }
  return (
    <div
      onTouchMove={() => setTooltipHide(true)}>
      <div className="zoomBtn__container">
        <IconButton className="button" size="large" variant="outlined" onClick={handleZoomIn}>
          <AddCircleIcon className="button" />
        </IconButton>

        <IconButton className="button" size="large" variant="outlined" onClick={handleZoomOut}>
          <RemoveCircleIcon className="button" />
        </IconButton>
      </div>

      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={zoom} center={window.innerWidth > 767 ? [0, -20] : [10, 20]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur = countries.find(s => s.nation_eng === geo.properties.ISO_A3);
                return (
                  <Geography
                    fill={cur ? (cur.nation_kr === selected ? "#ffd245" :
                      (cur.state === 0 ? "#A43F3D" : "#E7A3A2")) :
                      "#EEEEEE"}
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={()=>{if(cur) onNationClicked(cur.nation_kr)}}
                    onMouseEnter={() => {
                      if (cur) {
                        setTooltipHide(false)
                        setTooltipContent(`${cur.nation_kr} — ${cur.tooltip}`);
                      }
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
              onMouseEnter={() => {
                let tooltip = '';
                // countries.map(e => {
                //   e.nation_eng === null ? console.log(e.nation_kr) : console.log('here');
                // })
                countries.find(s => s.nation_kr === name ? tooltip = s.tooltip : tooltip = '');
                setTooltipContent(`${name} — ${tooltip}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
            >
              <circle r={3} fill="#242424" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div >
  );
};

export default MapChart;
