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
      <h2>✈️ 입국 가능 국가 조회하기</h2>
      <div className="count__container">
        <img src={personImg} alt="person illust" />
        <img src={signImg} alt="sign illust" />
        <div className="count__parent">
          <span className="prohibitions">입국 금지 : <CountUp end={prohibitions} /></span>
          <span className="restrictions">입국 제한 : <CountUp end={restrictions} /></span>
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
    </section>
  );
};

export default HomePage;
