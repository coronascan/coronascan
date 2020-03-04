import React from 'react';
import DepartureDate from '../components/DepartureDate/DepartureDate';
import DeparturePlaces from '../components/DeparturePlaces/DeparturePlaces';

const HomePage = () => {
  return (
    <div>
      <h2>방문 가능 국가 조회</h2>
      <DepartureDate />
      <DeparturePlaces />
    </div>
  )
}

export default HomePage
