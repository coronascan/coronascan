import React, { Component} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import './DeparturePlaces.css';

class DeparturePlaces extends Component {
    render() {
      return (
        <div className="departurePlaces">
          <DropdownButton id="dropdown-basic-button" title="출발국" onSelect={SelectPlace}>
            <Dropdown.Item eventKey="DAEGU">대구</Dropdown.Item>
            <Dropdown.Item eventKey="CHEONGDO">청도</Dropdown.Item>
            <Dropdown.Item eventKey="OTHER">대구,청도 외 한국 지역</Dropdown.Item>
          </DropdownButton>
        </div>
      )  
    }
  };

function SelectPlace(eventKey) {
  console.log(eventKey);
}

  export default DeparturePlaces