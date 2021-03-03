import React from 'react'
import {Link} from 'react-router-dom';

import './cards.css';

import birthday from '../assets/01birthday.png';


function Card({title, image, route}) {
    return (
        <div componentClass={Link} href={route} className="card text-center bg-dark">     
            <img className="card-img-top" src={image} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
            </div>
        </div>
    )
}

export default Card
