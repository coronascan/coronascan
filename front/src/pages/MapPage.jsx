import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Chart } from "react-google-charts"
const googleAPIKey = "AIzaSyC5JTn-jFdZ3t68S049uTSnTOCdXmvHg_A"

/*
입국 금지 : 검정 (0)
  - 입국금지 제목, 국가명, 기준일자 시간, 국가명 옆의 칸인 입국 제한 조치
입국 제한 : 빨강 (1)
  - 국가명, 입국제한조치 제목 출력, 기준일자시간, 국가명 옆의 칸인 입국 제한 조치
해당 없음 : 초록 (default)
*/


const data = [
  ['Country', 'State', { role: "tooltip", type: "string", p: { html: true } }],
  ['France', 1, "<b>입국제한조치</b><br>blah"],
  ['Japan', 0, "<b>입국금지조치</b><br>~~~"]
]

const options = {
  colorAxis: {colors: ['black', 'red']},
  tooltip: { isHtml: true, trigger: "visible" }
};

class MapPage extends Component {

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
