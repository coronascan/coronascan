import React from 'react'
import { Chart } from "react-google-charts"
const googleAPIKey = "AIzaSyC5JTn-jFdZ3t68S049uTSnTOCdXmvHg_A"

const Map = () => {
  return <div>
    <Chart
      width={'700px'}
      height={'700px'}
      chartType="GeoChart"
      mapsApiKey={googleAPIKey}
      data={[
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700],
      ]}
    />
  </div>
}

export default Map
