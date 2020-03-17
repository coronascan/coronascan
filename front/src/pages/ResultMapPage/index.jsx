import React, { useState, useContext, useEffect } from 'react';
import Map from '../../components/MapPage/Map';
import ResultContext from '../../contexts/ResultContext';
import Config from '../../config/config'

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

const ResultMapPage = props => {
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    const getRestrictionData = async () => {
      // 전체 목록
      try {
        const response = await fetch(Config.server_url + '/map');
        const body = await response.json();
        body.forEach(elem => {
          const { nation_eng, state, tooltip } = elem;
          data.push([nation_eng, state, tooltip]);
        });
      } catch (error) {
        console.log('전체 국가 정보를 가져오기 실패');
      }
    };
    getRestrictionData();
  }, []);

  const { target, changeBg } = useContext(ResultContext);
  useEffect(() => {
    const fetchData = async () => {
      if (target === '중국') {
        data.push(['China', 0, '입국제한']);
        return;
      }
      try {
        const response = await fetch(Config.server_url + '/map');
        console.log(response);
        if (response.status === 200) {
          const list = await response.json();
          let [{ nation_eng, tooltip }] = list.filter(({ nation_kr }) =>
            nation_kr.includes(target),
          );
          if (!nation_eng) nation_eng = target;
          if (!tooltip) tooltip = '입국 가능';
          data.push([nation_eng, 0, tooltip]);
          setCountries(data);
        } else {
          props.history.push('/');
          alert('데이터 조회에 문제가 생겼습니다😥 다시 시도해주세요.');
        }
      } catch (error) {
        console.log(error);
        props.history.push('/');
        alert('데이터 조회에 문제가 생겼습니다😥 다시 시도해주세요.');
      } finally {
        // TODO: 입국 허용일 때 배경색 추가
        const bg = data.state ? '#e7a3a2' : '#a43f3d';
        console.log(bg);
        changeBg(bg);
      }
    };
    fetchData();
  }, []);

  return <Map countries={countries} />;
};

export default ResultMapPage;
