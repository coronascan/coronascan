import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Item from '../../components/MapPage/ListItem';
import Map from '../../components/MapPage/Map';

/*
입국 금지 : 검정 (0)
  - 입국금지 제목, 국가명, 기준일자 시간, 국가명 옆의 칸인 입국 제한 조치
입국 제한 : 빨강 (1)
  - 국가명, 입국제한조치 제목 출력, 기준일자시간, 국가명 옆의 칸인 입국 제한 조치
해당 없음 : default

data 형식
    -> ["나라명(영어)", "상태", "디테일(툴팁용)"]
*/

let items = [];
let data = [
  ['Country', 'State', { role: 'tooltip', type: 'string', p: { html: true } }],
];

class MapPage extends Component {
  state = {
    countries: data, //지도 위의 데이터
    lists: items, // 리스트뷰 데이터
  };

  getRestrictionData = async () => {
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

      data.push(country);
    });
  };

  constructor(props) {
    super(props);
    this.getRestrictionData().then(() => {
      this.setState({ countries: data });
    });
  }

  render() {
    return (
      <section>
        <h2>🗺 입국 제한 조치 시행국 지도로 보기</h2>
        <div className="map-area">
          <Map countries={this.state.countries} />
          <ListGroup>
            <Item lists={this.state.lists} />
          </ListGroup>
        </div>
      </section>
    );
  }
}

export default MapPage;
