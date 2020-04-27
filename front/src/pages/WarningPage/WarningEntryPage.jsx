import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import SpecialMap from '../../components/MapPage/SpecialMap';
import './Warning.css';

let data = [
  ['Country', 'State', { role: 'tooltip', type: 'string', p: { html: true } }],
];
class WarningEntryPage extends Component {
  state = {
    countries: data,
    modalShow: true,
  };

  getWarningData = async () => {
    const response = await fetch('/warningentry');
    const body = await response.json();

    body.forEach(country => {
      let countries = [];
      countries.push(country.nation_eng);
      countries.push(country.state);
      countries.push(
        "<h5 class='tooltip_kr'>" +
          country.nation_kr +
          '</h5>' +
          '<br>' +
          country.tooltip,
      );

      data.push(countries);
    });
  };

  constructor(props) {
    super(props);
    this.getWarningData().then(() => {
      this.setState({ countries: data });
    });
  }

  render() {
    return (
      <Fragment>
        <section className="section__warning_entry">
          <h2>❗️ 특별입국 절차 대상 국가</h2>
          <div className="warning__container">
            <Container fluid>
              <Row>
                <Col md={12} lg={6}>
                  <ul className="warning__step">
                    <li className="warning__title">
                      <h3>모든 해외 입국자 2주 자가격리 의무화</h3>
                    </li>
                    <li>
                      국내 거주지 없는 외국인 - 정부 혹은 지방자치단체
                      임시시설격리, 비용 자부담
                    </li>
                    <li>
                      입국 검역 시 기침, 발열 유증상자 - 공항 내 격리시설에서
                      진단검사, 음성 시 14일간 자가격리
                    </li>
                    <li>
                      입국한 지 14일이 지나지 않은 해외 입국자 - 문자를 통해
                      14일간 자가격리 권고, 유증상자 검사 안내
                    </li>
                    <li className="warning__style_none">
                      *자가격리 수칙 위반 시 1년 이하 징역 혹은 1천만원 이하
                      벌금
                    </li>
                    <li className="warning__style_none">
                      **능동감시 적용 대상 : 외교·공무·협정 등의 용무 비자(A1,
                      A2, A3) 출국 국가의 한국대사관에서 중요한 사업상 목적,
                      국제대회 등 학술적 목적, 기타 공익적, 인도적 목적 등으로
                      방문타당성이 인정되어 '자가격리면제서'를 사전에 발급받은
                      경우
                    </li>
                    <li className="warning__style_none">
                      **모바일 자가진단 앱에 코로나19 증상여부 입력, 매일 통화
                      확인
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="warning__step">
                    <li className="warning__title">
                      <h3>코로나19 진단검사 시행 대상 국가</h3>
                    </li>
                    <li>
                      04.13 미국발 입국자에 대해 자가격리 후 3일 내 코로나19
                      진단 전수검사 실시
                    </li>
                    <li>
                      03.22 유럽발 입국 내·외국인 대상 코로나 19 진단검사 시행
                    </li>
                  </ul>
                  <ul className="warning__step">
                    <li className="warning__title">
                      <h3>특별입국절차</h3>
                    </li>
                    <li>
                      03.30 체온 37.5℃를 넘는 입국자 한국행 비행기 탑승 금지
                    </li>
                    <li>
                      03.19 국내에 입국하는 모든 내·외국인 대상 특별입국 절차
                      적용
                    </li>
                    <li>
                      내·외국인 건강 상태 질문서, 특별 검역 신고서 제출 의무
                    </li>
                    <li className="warning__style_none">
                      1대 1 발열 검사, 국내 체류 주소, 연락처 제출
                    </li>
                    <li className="warning__style_none">
                      입국 후 자가 진단 앱* 설치 후 매일 건강 상태 제출 의무
                    </li>
                    <li className="warning__style_none">
                      유증상시 1399 연계 및 선별 진료소 안내, 무응답시 유선 확인
                    </li>
                    <li className="warning__style_none">*미설치시 입국 불허</li>
                  </ul>
                </Col>
              </Row>
              <div className="warning__map special">
                <ul className="legend__container">
                  <li className="legend">
                    <span className="legend_box bg-red04" />
                    코로나 19 진단검사
                  </li>
                  <li className="legend">
                    <span className="legend_box bg-red02" />
                    특별입국절차
                  </li>
                </ul>
                <SpecialMap countries={this.state.countries}></SpecialMap>
              </div>
            </Container>
          </div>
        </section>

        <Modal
          show={this.state.modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              ⚠️ 사증면제협정 잠정 정지 국가(56개) 입국 시 사증(Visa) 필요
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                <p>
                  <strong>아시아•태평양</strong>(4)
                  <br />
                  뉴질랜드, 말레이시아, 싱가포르, 태국
                </p>
              </li>
              <li>
                <p>
                  <strong>미주</strong>(18)
                  <br /> 바하마, 앤티가바부다, 아이티, 엘살바도르, 우루과이,
                  자메이카, 칠레, 코스타리카, 페루, 과테말라, 그레나다,
                  도미니카공화국, 브라질, 세인트루시아, 수리남, 콜롬비아,
                  트리니다드토바고, 파나마
                </p>
              </li>
              <li>
                <p>
                  <strong>유럽</strong>(29)
                  <br /> 불가리아, 이탈리아, 그리스, 네덜란드, 노르웨이, 덴마크,
                  독일, 라트비아, 러시아, 루마니아, 룩셈부르크, 리투아니아,
                  벨기에, 스웨덴, 스위스, 리히텐슈타인, 스페인, 슬로바키아,
                  아이슬란드, 에스토니아, 오스트리아, 체코, 카자흐스탄, 터키,
                  포르투갈, 폴란드, 프랑스, 핀란드, 헝가리
                </p>
              </li>
              <li>
                <p>
                  <strong>중동</strong>(4)
                  <br /> 모로코, 아랍에미리트, 이스라엘, 튀니지
                </p>
              </li>
              <li>
                <p>
                  <strong>아프리카</strong>(1)
                  <br /> 레소토
                </p>
              </li>
            </ul>
            <a href="http://www.0404.go.kr/dev/newest_view.mofa?id=ATC0000000007761&pagenum=1&mst_id=MST0000000000041">
              👉🏻외교부 공지사항 바로가기
            </a>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ modalShow: false })}>
              확인
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default WarningEntryPage;
