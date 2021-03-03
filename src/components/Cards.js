import React from 'react'
import Card from './Card';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import birthday from '../assets/01birthday.png';
import tours from '../assets/02tours.png';
import reviews from '../assets/03reviews.png';

const cards = [
    {
        id:1,
        title: 'Birthday',
        image: birthday,
        route: "./birthday"
    },
    {
        id:2,
        title: 'Tours',
        image: tours,
        route: "/tours"
    },
    {
        id:3,
        title: 'Reviews',
        image: reviews,
        route: "/reviews"
    },
]

function Cards() {

    return (
        
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map( card =>(
                        <div  className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image} route={card.route}/>
                        </div>
                    ))
                }
            </div>
            
        </div>
    
    )
}

export default Cards
