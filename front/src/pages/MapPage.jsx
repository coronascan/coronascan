import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Chart } from "react-google-charts"
const googleAPIKey = "AIzaSyC5JTn-jFdZ3t68S049uTSnTOCdXmvHg_A"

class MapPage extends Component {
  render() {
    return <div>
      <Container>
        <Chart
          width={'100%'}
          height={'100%'}
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
      </Container>
    </div>
  }
}

export default MapPage
