import React, { useState, useContext, useEffect } from 'react';
import Map from '../../components/MapPage/Map';
import ResultContext from '../../contexts/ResultContext';
import Config from '../../config/config'
import MapChart from '../../components/MapPage/MapChart'
import ReactTooltip from "react-tooltip";


const data = [
  ['Country', 'State', { role: 'tooltip', type: 'string', p: { html: true } }],
];

const ResultMapPage = props => {
  return (
    <div>
      <MapChart
        selected={"가나"}
        countries={[]}
        setTooltipContent={"test"}
      />
      <ReactTooltip>{"test"}</ReactTooltip>
    </div>

  )
};

export default ResultMapPage;
