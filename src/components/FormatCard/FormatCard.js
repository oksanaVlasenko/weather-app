import React from 'react';
import Card from '../Card/Card'

function FormatCard(props) {
    return props.days.map((day, index) => <Card day={day} key={index}/>)
}

export default FormatCard