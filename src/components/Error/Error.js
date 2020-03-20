import React from 'react';
import './Error.css';
import icon from './error-404.svg'

function Error(){
    return(
        <div className="page">
            <div>
                <img src={icon} alt="icon 404"/>
            </div>
            <div>
                <h1>Oops</h1>
                <h1>Something wrong</h1>
            </div>
        </div>
    )
}

export default Error
