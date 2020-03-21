import React from 'react';
import Error from '../Error/Error';
import FormatCard from '../FormatCard/FormatCard'
import Header from '../Header/Header'
import './Weather.css'

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
const weatherApiLink = `https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&lang=en&units=metric&APPID=${openWeatherApiKey}`;

class Weather extends React.Component {
  state = {
    days: [],
    isError: false
  }

  componentDidMount = () => {
    fetch(weatherApiLink)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({days: dailyData})
        console.log(this.state.days)
    })
    .catch(error => {
      console.error(error);
      
      this.setState({isError: true});
    })
  }

  render() {
    if(this.state.isError){
      return(
        <Error />
      )
    }
    return (
      <>
        <Header />
        <div className="main">
          <FormatCard days={this.state.days} />
        </div>
      </>
    )
  }
}

export default Weather