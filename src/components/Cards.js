import React from 'react'
import Card from './Card';

import birthday from '../assets/01birthday.png';
import tours from '../assets/02tours.png';
import reviews from '../assets/03reviews.png';

const cards = [
    {
        id:1,
        title: 'Birthday',
        image: birthday
    },
    {
        id:2,
        title: 'Tours',
        image: tours
    },
    {
        id:3,
        title: 'Reviews',
        image: reviews
    },
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                <div className="col-md-4">
                    <Card/>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
