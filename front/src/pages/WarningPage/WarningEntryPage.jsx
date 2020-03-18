import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from '../../components/MapPage/Map';
import './Warning.css';

let data = [
    ['Country', 'State', { role: "tooltip", type: "string", p: { html: true } }]
]
class WarningEntryPage extends Component {

    state = {
        countries: data
    }

    getWarningData = async () => {
        const response = await fetch('/warningentry')
        const body = await response.json()

        body.forEach((country) => {
            let countries = []
            countries.push(country.nation_eng)
            countries.push(country.state)
            countries.push("<h5 class='tooltip_kr'>" + country.nation_kr + "</h5>" + "<br>" + country.tooltip)

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
                <h2>❗️ 특별입국 절차 대상 국가</h2>
                <div className="warning__container">
                    <Container fluid>
                        <Row>
                            <Col sm>
                                <ul className="warning__step">
                                    <li className="warning__title"><h3>특별입국 절차</h3></li>
                                    <li>내국인, 외국인 건강 상태 질문서, 특별 검역 신고서 제출 의무</li>
                                    <li>1대 1 발열 검사, 국내 체류 주소, 연락처 제출</li>
                                    <li>입국 후 자가 진단 앱 설치 후 매일 건강 상태 제출 의무</li>
                                </ul>
                            </Col>
                            <Col sm>
                                <ul className="warning__step">
                                    <li className="warning__title"><h3>대상 국가</h3></li>
                                    <li>03.19 0시부터 국내에 입국하는 모든 내, 외국인 대상 특별입국 절차 적용</li>
                                    <li>03.16 0시부터 유럽발 국내 입국자에 특별입국 절차 적용</li>
                                    <li>03.12 이탈리아, 프랑스, 독일, 스페인, 영국, 네덜란드발 국내 입국자에 특별입국 절차 적용</li>
                                    <li>03.12 이탈리아, 이란발 국내 입국자에 특별입국 절차 적용</li>
                                    <li>03.09 일본발 국내 입국자에 특별입국 절차 적용</li>
                                    <li>02.04 중국발 국내 입국자에 특별입국 절차 적용</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <div className="warning__map">
                                    <Map countries={this.state.countries}></Map>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default WarningEntryPage;