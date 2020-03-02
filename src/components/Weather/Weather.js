import React from 'react';
import Card from '../Card/Card';
import './Weather.css'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
const weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&lang=en&units=metric&APPID=${openWeatherApiKey}`;

class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherApiLink)
    .then(res => res.json())
    .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <>
          <div className="header">
              <h1>Weather Forecast</h1>
              <h3>Kharkiv</h3>
          </div>
        <div className="main">
          {this.formatCards()}
        </div>
      </>
    )
  }
}

export default WeekContainer