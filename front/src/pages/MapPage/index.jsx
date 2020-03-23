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
  const [hidden, setHide] = useState(false);

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
      
      <div className="legend">
        <div className="legend_prohibition"/>
        <div className="legend_text"> 입국 금지</div>
        <div className="legend_restriction"/>
        <div className="legend_text">입국 제한</div>
        <div className="legend_able"/>
        <div className="legend_text">입국 가능</div>

      </div>
    
      <div className="map-area">
        <MapChart
          selected={target}
          countries={countries}
          setTooltipContent={setContent}
          setTooltipHide={(ret)=>{
            setHide(ret)
            ReactTooltip.hide(hidden)
          }}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </div>

    </section>
  );
}


export default MapPage;
