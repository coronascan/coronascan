import React, { useState, useEffect } from 'react';
import ReactTooltip from "react-tooltip";
import MapChart from '../../components/MapPage/MapChart'

let items = [];
let data = [];

export function MapPage() {
  
  const [content, setContent] = useState(""); 
  const [countries, setData] = useState([]);

  async function fetchUrl(){
    const response = await fetch('http://ec2-54-196-23-111.compute-1.amazonaws.com/map');
    const body = await response.json();
    body.forEach(elem => {
      let country = new Array();
      country.push(elem.nation_eng);
      country.push(elem.state);
      country.push(elem.tooltip);
  
      if (elem.listview == true) {
        items.push(country);
        return true;
      }
  
      data.push(country);
    });

    setData(body);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <section>
      <h2>🗺 입국 제한 조치 시행국 지도로 보기</h2>
      <div className="map-area">
        <MapChart
        countries = {countries}
        setTooltipContent={setContent}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </section>
  );
}

export default MapPage;
