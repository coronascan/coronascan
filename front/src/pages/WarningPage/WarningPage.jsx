import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Map from '../../components/MapPage/Map';
import './Warning.css';
import Config from '../../config/config';
import ReactTooltip from "react-tooltip";

const WarningPage = () => {
  const [content, setContent] = useState("");
  const [countries, setData] = useState([]);

  async function fetchUrl() {
    const response = await fetch(Config.server_url + '/warning');
    const body = await response.json();
    body.forEach(elem => {
      let country = [];
      country.push(elem.nation_eng);
      country.push(elem.state);
      country.push(elem.tooltip);
    });
    setData(body);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <section className="section__warning">
      <h2><span>❗️</span> 코로나 관련 외교부 여행 권고사항</h2>
      <div className="warning__container">
        <Container fluid>
          <Row>
            <Col sm>
              <ul className="warning__step">
                <li className="warning__title"><h3>최신 여행 경보 단계</h3></li>
                <li>2020-03.23 전 세계 국가·지역 해외여행에 대해 특별여행주의보(여행 취소, 연기 당부) 발령</li>
                <li>2020-01-28 중국 후베이성(우한시 포함) 전역 여행경보 3단계 상향</li>
              </ul>
            </Col>
            <Col sm>
              <ul className="warning__step">
                <li className="warning__title"><h3>여행 단계별 행동 요령</h3></li>
                <li>1단계(남색경보) : (체류자) 신변안전 유의, (여행예정자) 여행 유의</li>
                <li>2단계(황색경보) : (체류자) 신변안전 특별유의, (여행예정자) 여행 필요성 신중 검토 </li>
                <li style={{ color: "#CB6E6D" }}>특별여행주의보 : (체류자) 위생수칙 준수, 사회적 거리두기 실천, (여행예정자) 여행 취소, 연기 당부</li>
                <li>3단계(적색경보) : (체류자) 긴급용무가 아닌 한 철수, (여행예정자) 여행 취소․연기</li>
                <li>4단계(흑색경보) : (체류자) 즉시 대피․철수, (여행예정자) 여행 금지</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <div className="warning__map warning">
                <ul className="legend__container">
                  <li className="legend">
                    <span className="legend_box bg-alert-blue" />남색경보
                    </li>
                  <li className="legend">
                    <span className="legend_box bg-alert-yellow" />황색경보
                  </li>
                  <li className="legend">
                    <span className="legend_box bg-alert-special" />특별여행주의보
                  </li>
                  <li className="legend">
                    <span className="legend_box bg-alert-red" />적색경보
                  </li>
                  <li className="legend">
                    <span className="legend_box bg-alert-black" />흑색경보
                  </li>
                </ul>
                <Map
                  countries={countries}
                  setTooltipContent={setContent}
                />
                <ReactTooltip>{content}</ReactTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
export default WarningPage
