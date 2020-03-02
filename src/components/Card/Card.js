import React from 'react';
import './Card.css';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'

class Cards extends React.Component {
  
  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('en', {weekday: 'long'});

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

    return (
      <>
        <Card className="card " style={{ width: '10rem' }}>
            <Card.Title className="title">{weekdayName}</Card.Title>
            <i className={imgURL}></i>
            <h3>{Math.ceil(this.props.day.main.temp)} °C</h3>
            <Alert variant="primary">
                <Alert.Heading className="description">
                  {this.props.day.weather[0].description}
                </Alert.Heading>
            </Alert>   
        </Card>
      </>
    )
  }
}

export default Cards