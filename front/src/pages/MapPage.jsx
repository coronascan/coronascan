import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Chart } from "react-google-charts"
const googleAPIKey = "AIzaSyBTvsuJcbhSf2giulYdP66791797JE4ZTA"

/*
입국 금지 : 검정 (0)
  - 입국금지 제목, 국가명, 기준일자 시간, 국가명 옆의 칸인 입국 제한 조치
입국 제한 : 빨강 (1)
  - 국가명, 입국제한조치 제목 출력, 기준일자시간, 국가명 옆의 칸인 입국 제한 조치
해당 없음 : default
*/

let data = [
  ['Country', 'State', { role: "tooltip", type: "string", p: { html: true } }]
]

const options = {
  colorAxis: {colors: ['black', 'red']},
  tooltip: { isHtml: true, trigger: "visible" }
};

class MapPage extends Component {
  
  state = {countries : this.data}

  getRestrictionData = async()=>{
    const response = await fetch('/map')
    const body = await response.json()
/*
data 형식
  -> ["나라명(영어)", "상태", "디테일(툴팁용)"]
*/
    body.forEach(elem =>{
      let country = new Array()
      country.push(elem.nation_eng)
      country.push(elem.state)
      country.push(elem.tooltip)
      
      data.push(country)
    })

  }

  constructor(props){
    super(props)

    this.getRestrictionData().then(()=>{
      this.setState({countries : data})
    })
  }

  render() {
    return <div>
      <Container>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="GeoChart"
          mapsApiKey={googleAPIKey}
          data={data}
          options= {options}
        />
      </Container>
    </div>
  }
}

export default MapPage
