import React, { Component } from 'react'
import { Container, Row, Alert } from 'react-bootstrap'
import Map from '../../components/MapPage/Map'
import './Warning.css';
import Config from '../../config/config'

let data = [
  ['Country', 'State', { role: "tooltip", type: "string", p: { html: true } }]
]
class WarningPage extends Component {

  state = {
    countries: data
  }

  getWarningData = async () => {
    const response = await fetch(Config.server_url + '/warning')
    const body = await response.json()

    body.forEach((country) => {
      let countries = []
      countries.push(country.nation_eng)
      countries.push(country.state)
      countries.push(country.tooltip)

      data.push(countries)
    })
  }

  constructor(props) {
    super(props)
    this.getWarningData().then(() => {
      this.setState({ countries: data })
    })
  }

  render() {
    return (
      <section>
        <h2>❗️ 코로나 관련 외교부 여행 권고사항</h2>
        <div className="warning__container">
          <Container>
            <Row>
              <ul className="warning__step">
                <li className="warning__title"><h3>여행 단계별 행동 요령</h3></li>
                <li>1단계(남색경보) : (체류자) 신변안전 유의, (여행예정자) 여행 유의</li>
                <li>2단계(황색경보) : (체류자) 신변안전 특별유의, (여행예정자) 여행 필요성 신중 검토</li>
                <li>3단계(적색경보) : (체류자) 긴급용무가 아닌 한 철수, (여행예정자) 여행 취소․연기</li>
                <li>4단계(흑색경보) : (체류자) 즉시 대피․철수, (여행예정자) 여행 금지</li>
              </ul>
            </Row>
            <Row>
              <ul className="warning__step">
                <li className="warning__title"><h3>최신 여행 경보 단계</h3></li>
                <li>일본 일본 전 지역(후쿠시마 원전 주변지역 제외)에 남색경보 발령 (02.29)</li>
                <li>이탈리아 	이탈리아 북부지역 3개 주(롬바르디아주, 베네토주, 에밀리아-로마냐주)에 황색경보 발령 (02.28)</li>
                <li>중국, 홍콩(중국), 마카오(중국) 전 중국지역에 여행경보 2단계(여행자제) 발령 (01.28)</li>
                <li>중국, 홍콩(중국), 마카오(중국) 중국 후베이성(우한시 포함) 전역 여행경보 3단계로 상향 (01.28)</li>
              </ul>
            </Row>
          </Container>
          <Container>
            <Row>
              <div className="warning__map">
                <Map countries={this.state.countries}></Map>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}
export default WarningPage
