import React, { useState } from 'react';
import AutoComplete from '../../components/HomePage/AutoComplete';
import { Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = props => {
  const [country, setCountry] = useState();
  const getResult = (route, country) => {

    if (country === '') {
      alert('국가 또는 지역을 입력해주세요');
      return;
    }
    props.history.push(`/${route}/${country}`);
  }

  return (
    <section className="homepage">
      <h2>✈️ 입국 가능 국가 조회하기</h2>
      <div className="homepage__contents">
        <h3>입국을 원하는 지역, 국가를 입력해주세요</h3>
        <AutoComplete onChange={setCountry} />
        <div className="homepage__btn-group">
          <Button variant="dark" onClick={() => {
            const input = document.querySelector('input');
            const country = input.value;
            getResult('result', country)
          }}>확인하기</Button>
          <Button variant="light" onClick={() => {
            const input = document.querySelector('input');
            const country = input.value;
            getResult('map', country)
          }}>지도로 확인하기</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
