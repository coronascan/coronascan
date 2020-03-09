import React, { Component } from 'react';
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

const data = [
  ['Country', 'State', { role: 'tooltip', type: 'string', p: { html: true } }],
];

class ResultMapPage extends Component {
  state = {
    countries: data, //지도 위의 데이터
  };

  getRestrictionData = async () => {
    // 전체 목록
    try {
      const response = await fetch('/map');
      const body = await response.json();
      body.forEach(elem => {
        const { nation_eng, state, tooltip } = elem;
        data.push([nation_eng, state, tooltip]);
      });
    } catch (error) {
      console.log('전체 국가 정보를 가져오기 실패');
    }
  };
  getTargetData = async () => {
    // 선택한 국가 정보
    try {
      const target = {};
      const country = this.props.match.params.country;
      const response = await fetch(`/result/${country}`);
      target = await response.json();
      const { nation_eng, tooltip } = target;
      data.push([nation_eng, 0, tooltip]);
    } catch (error) {
      console.log('선택한 국가 정보 가져오기 실패');
      this.props.history.push('/404');
    }
  };

  constructor(props) {
    super(props);
    this.getRestrictionData().then(() => {
      this.setState({ countries: data });
    });
    this.getTargetData().then(() => {
      this.setState({ countries: data });
    });
  }

  render() {
    return <Map countries={this.state.countries} />;
  }
}

export default ResultMapPage;
