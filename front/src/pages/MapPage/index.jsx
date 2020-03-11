import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from '../../components/MapPage/ListItem';
import Map from '../../components/MapPage/Map';
import ReactTooltip from "react-tooltip";
import MapChart from '../../components/MapPage/MapChart'
/*
입국 금지 : 검정 (0)
  - 입국금지 제목, 국가명, 기준일자 시간, 국가명 옆의 칸인 입국 제한 조치
입국 제한 : 빨강 (1)
  - 국가명, 입국제한조치 제목 출력, 기준일자시간, 국가명 옆의 칸인 입국 제한 조치
해당 없음 : default

data 형식
    -> ["나라명(영어)", "상태", "디테일(툴팁용)"]
*/
let state = {
  countries : ""
}
let items = [];
let data = [
  ['Country', 'State', { role: 'tooltip', type: 'string', p: { html: true } }],
];
let data2 = [];
const getRestrictionData = async () => {
  const response = await fetch('/map');
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

    data2.push(country);
  });

  return data2;
};
// constructor(props) {
//   super(props);
//   this.getRestrictionData().then(() => {
//     this.setState({ countries: data });
//   });
// }

export function MapPage() {
  const [content, setContent] = useState(""); 
  const [countries, setData] = useState([]);

  async function fetchUrl(){
    const response = await fetch('/map');
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
  
      data2.push(country);
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
        {/* <Map countries={this.state.countries} /> */}
        {/* <ListGroup>
          <Item lists={lists} />
        </ListGroup> */}
      </div>
    </section>
  );
}

export default MapPage;
