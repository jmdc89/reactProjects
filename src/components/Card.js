import React from 'react'
import './cards.css';

import birthday from '../assets/01birthday.png';

function Card({title, image}) {
    return (
        <div className="card text-center bg-dark">     
            <img className="card-img-top" src={image} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                    Go to this website
                </a>
            </div>
        </div>
        
    )
}

export default Card
