import React from 'react';
import Calendar from 'react-calendar';
import './DepartureDate.css';

class DepartureDate extends React.Component {
    state = {
        date: new Date()
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="departureDate">
                <button className="departureDate__button" onClick={ToggleCalender}>출발일</button>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    minDate={new Date()}
                    maxDate={new Date(Date.parse(new Date()) + 30 * 1000 * 60 * 60 * 24)}
                />
            </div>
        );
    }
}

function ToggleCalender() {
    const calendar = document.querySelector('.react-calendar');
    if (calendar.style.display === 'none') {
        calendar.style.display = 'block';
    } else if (calendar.style.display === '') {
        calendar.style.display = 'block';
    } else {
        calendar.style.display = 'none';
    }
}

export default DepartureDate;