import React, { Component } from 'react'
import { Chart } from "react-google-charts"
const googleAPIKey = "AIzaSyBTvsuJcbhSf2giulYdP66791797JE4ZTA"

const options = {
    colorAxis: { colors: ['black', 'red'] },
    tooltip: { isHtml: true, trigger: "visible" }
};

class Map extends Component{

    render() {
        return(
        <div>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="GeoChart"
          mapsApiKey={googleAPIKey}
          data={this.props.countries}
          options={options}
        />
        </div>)
    }


}

export default Map
