import React, { useState, useEffect, useContext } from 'react';
import AutoComplete from '../../components/HomePage/AutoComplete';
import { Button } from 'react-bootstrap';
import './HomePage.css';
import CountUp from 'react-countup';
import ResultContext from '../../contexts/ResultContext';
import Config from '../../config/config';
import personImg from '../../images/person.png';
import signImg from '../../images/sign.png';

const HomePage = props => {
  const [prohibitions, setProhibitions] = useState(0);
  const [restrictions, setRestrictions] = useState(0);
  const [source, setSource] = useState("loading...");

  async function getRestrictionsCount() {
    const response = await fetch(Config.server_url + '/main');
    const body = await response.json();

    setProhibitions(body.prohibitions);
    setRestrictions(body.restrictions);
    setSource(body.source[0].source);
  }

  useEffect(() => {
    getRestrictionsCount();
  }, []);


  const { changeTarget } = useContext(ResultContext);
  const getResult = (route, country) => {
    let target = country;
    if (target === '') {
      alert('국가 또는 지역을 입력해주세요');
      return;
    }
    if (target === '모든 국가') {
      props.history.push('/map')
      return;
    }
    if (target.includes(',')) {
      target = target.split(', ')[1];
    }
    console.log('target', target);

    changeTarget(target);
    props.history.push(`/${route}`);

  };

  return (
    <section className="homepage">
      <h2>✈️ 입국 가능 국가, 지역 조회하기</h2>
      <div className="count__container">
        <img src={personImg} alt="person illust" />
        <img src={signImg} alt="sign illust" />
        <div className="count__parent">
          <span className="prohibitions">입국 금지 : <CountUp end={136} /></span>
          <span className="restrictions">입국 제한 : <CountUp end={40} /></span>
          <span className="count__source">출처 : {source}</span>
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
              getResult('map', country);
            }}
          >
            지도로 확인하기
          </Button>
        </div>
      </div>
      <p className="homepage__notice">※ 코로나 스캔 사이트에서 조회되는 입국 금지, 제한, 가능 국가는 외교부 재외국민안전과에서 공개한 데이터를 바탕으로 합니다.<br />
        정확한 정보는 방문하시려는 국가, 지역 관할 대사관 홈페이지, 해당 정부 공식 홈페이지를 필수 참고 부탁드립니다.</p>
    </section>
  );
};

export default HomePage;
