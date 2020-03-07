import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Chart } from "react-google-charts"
import Item from './ListItem'
const googleAPIKey = "AIzaSyBTvsuJcbhSf2giulYdP66791797JE4ZTA"

/*
입국 금지 : 검정 (0)
  - 입국금지 제목, 국가명, 기준일자 시간, 국가명 옆의 칸인 입국 제한 조치
입국 제한 : 빨강 (1)
  - 국가명, 입국제한조치 제목 출력, 기준일자시간, 국가명 옆의 칸인 입국 제한 조치
해당 없음 : default
*/

let items = []
let data = [
  ['Country', 'State', { role: "tooltip", type: "string", p: { html: true } }]
]

const options = {
  colorAxis: { colors: ['black', 'red'] },
  tooltip: { isHtml: true, trigger: "visible" }
};

class MapPage extends Component {

  state = {
    countries: data, //지도 위의 데이터
    lists: items // 리스트뷰 데이터
  }

  /*
  data 형식
    -> ["나라명(영어)", "상태", "디테일(툴팁용)"]
  */
  getRestrictionData = async () => {
    const response = await fetch('/map')
    const body = await response.json()

    body.forEach(elem => {
      let country = new Array()
      country.push(elem.nation_eng)
      country.push(elem.state)
      country.push(elem.tooltip)

      if(elem.listview){
        items.push(country)
        return true
      }
      data.push(country)
    })
  }

  constructor(props) {
    super(props)

    this.getRestrictionData().then(() => {
      this.setState({ countries: data })
    })

    items.push(["test1"], ["test2"])
  }

  render() {
    return <div>
      <Container>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="GeoChart"
          mapsApiKey={googleAPIKey}
          data={this.state.countries}
          options={options}
        />
      </Container>

      <Container>
        <ListGroup>
          <Item items={this.state.lists}/>
        </ListGroup>
      </Container>
    </div>
  }
}

export default MapPage
