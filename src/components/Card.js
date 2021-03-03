import React from 'react'

import birthday from '../assets/01birthday.png';

function Card() {
    return (
        <div className="card">
            <img src={birthday} alt=""/>
            <div className="card-body">
                <h4 className="card-title">My title</h4>
                <p className="card-text text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        
    )
}

export default Card