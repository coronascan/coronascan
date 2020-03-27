import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SpecialMap from '../../components/MapPage/SpecialMap';
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
            <section className="section__warning_entry">
                <h2>❗️ 특별입국 절차 대상 국가</h2>
                <div className="warning__container">
                    <Container fluid>
                        <Row>
                            <Col md={12} lg={6}>
                                <ul className="warning__step">
                                    <li className="warning__title"><h3>유럽·미국발 입국자 전원 코로나19 진단검사 시행</h3></li>
                                    <li>유럽발 입국자 전원 검사, 미국발 입국자 중 유증상자·단기체류 외국인 코로나19 진단검사 시행</li>
                                    <li>유증상자 - 검역소 격리시설, 무증상자 - 지정 임시생활시설에서 검사</li>
                                    <li>내국인, 장기체류 외국인 14일 격리 조치, 생활지원금, 유급휴가비 정부지원</li>
                                    <li>단기 체류 외국인 14일간 능동감시, 전화로 본인 건강 상태 설명</li>
                                    <li>*자가격리지 무단 이탈 시 외국인 강제 출국 조치, 고발 예정. 내국인 자가격리 생활비원비 지급하지 않음</li>
                                </ul>
                                <ul className="warning__step">
                                    <li className="warning__title"><h3>내·외국인 특별입국 절차</h3></li>
                                    <li>내·외국인 건강 상태 질문서, 특별 검역 신고서 제출 의무</li>
                                    <li>1대 1 발열 검사, 국내 체류 주소, 연락처 제출</li>
                                    <li>입국 후 자가 진단 앱* 설치 후 매일 건강 상태 제출 의무</li>
                                    <li>유증상시 1399 연계 및 선별 진료소 안내, 무응답시 유선 확인</li>
                                    <li>*미설치시 입국 불허</li>
                                </ul>
                                <ul className="warning__step">
                                    <li className="warning__title"><h3>특별입국절차 대상 국가</h3></li>
                                    <li>03.30 체온 37.5℃를 넘는 입국자 한국행 비행기 탑승 금지</li>
                                    <li>03.27 미국발 입국자 중 유증상자, 단기체류 외국인 코로나19 진단검사 시행</li>
                                    <li>03.22 유럽발 입국 내·외국인 대상 코로나 19 진단검사 시행</li>
                                    <li>03.19 국내에 입국하는 모든 내·외국인 대상 특별입국 절차 적용</li>
                                </ul>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="warning__map special">
                                    <ul className="legend__container">
                                        <li className="legend">
                                            <span className="legend_box bg-red04" />코로나 19 진단검사
                                        </li>
                                        <li className="legend">
                                            <span className="legend_box bg-red02" />특별입국절차
                                        </li>
                                    </ul>
                                    <SpecialMap countries={this.state.countries}></SpecialMap>
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