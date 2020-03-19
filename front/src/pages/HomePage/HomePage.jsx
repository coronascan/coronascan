import React, { useState, useEffect, useContext } from 'react';
import AutoComplete from '../../components/HomePage/AutoComplete';
import { Button } from 'react-bootstrap';
import './HomePage.css';
import CountUp from 'react-countup';
import ResultContext from '../../contexts/ResultContext';
import Config from '../../config/config'

const HomePage = props => {
  const [prohibitions, setProhibitions] = useState(0);
  const [restrictions, setRestrictions] = useState(0);

  async function getRestrictionsCount() {
    const response = await fetch(Config.server_url + '/main');
    const body = await response.json();
    setProhibitions(body.prohibitions);
    setRestrictions(body.restrictions);
  }

  /* DB 테이블에서 불러오기
  useEffect(() => {
    getRestrictionsCount();
  }, []);
  */

  const { changeTarget } = useContext(ResultContext);
  const getResult = (route, country) => {
    let target = country;
    if (target === '') {
      alert('국가 또는 지역을 입력해주세요');
      return;
    }
    if (target === '모든 국가') {
      props.history.push('/map')
      return
    }
    if (target.includes(',')) {
      target = target.split(', ')[1];
    }
    changeTarget(target);
    if (route === 'maps') {
      alert('추후 업데이트 예정입니다.');
      props.history.push(`/map`);
      return;
    }
    props.history.push(`/${route}`);
  };

  return (
    <section className="homepage">
      <h2>✈️ 입국 가능 국가 조회하기</h2>
      <div className="count__parent">
        <div className="prohibitions">
          <h3>입국 금지 국가</h3>
          <h3>
            <CountUp end={100} />
          </h3>
        </div>
        <div className="restrictions">
          <h3>입국 제한 국가</h3>
          <h3>
            <CountUp end={57} />
          </h3>
        </div>
      </div>
      <div className="homepage__contents">
        <AutoComplete />
        <div className="homepage__btn-group">
          <Button
            variant="dark"
            onClick={() => {
              const input = document.querySelector('input');
              const country = input.value;
              getResult('result', country);
            }}
          >
            확인하기
          </Button>
          <Button
            variant="light"
            onClick={() => {
              const input = document.querySelector('input');
              const country = input.value;
              getResult('maps', country);
            }}
          >
            지도로 확인하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
