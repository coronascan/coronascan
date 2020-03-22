import React, { useState, useEffect, useContext } from 'react';
import ReactTooltip from "react-tooltip";
import MapChart from '../../components/MapPage/MapChart'
import Config from '../../config/config'
import ResultContext from '../../contexts/ResultContext';
import './MapPage.css';

let items = [];
let data = [];

export function MapPage(props) {

  const [content, setContent] = useState("");
  const [countries, setData] = useState([]);

  async function fetchUrl() {
    const response = await fetch(Config.server_url + '/map');
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
    changeBg("#FBFBFC");
    fetchUrl();
  }, []);

  const { target, changeBg } = useContext(ResultContext);

  return (
    <section className="section__map-page">
      <h2>🗺 입국 제한 조치 시행국 지도로 보기</h2>
      <div className="map-area">
        <MapChart
          selected={target}
          countries={countries}
          setTooltipContent={setContent}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </section>
  );
}

export default MapPage;
