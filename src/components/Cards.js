import React from 'react'
import Card from './Card';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import birthday from '../assets/01birthday.png';
import tours from '../assets/02tours.png';
import reviews from '../assets/03reviews.png';
import accordion from '../assets/04accordion.png';
import menu from '../assets/05menu.png';
import tabs from '../assets/06tabs.png';
import loremipsum from '../assets/08loremipsum.png';
import colorgenerator from '../assets/09colorgenerator.png';
import grocerybud from '../assets/10grocerybud.png';

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
    {
        id:4,
        title: 'Accordion',
        image: accordion,
        route: "/accordion"
    },
    {
        id:5,
        title: 'Menu',
        image: menu,
        route: "/menu"
    },
    {
        id:6,
        title: 'Tabs',
        image: tabs,
        route: "/tabs"
    },
    {
        id:7,
        title: 'Lorem Ipsum',
        image: loremipsum,
        route: "/loremipsum"
    },
    {
        id:8,
        title: 'Color Gen.',
        image: colorgenerator,
        route: "/colorgenerator"
    },
    {
        id:8,
        title: 'Grocery Bud',
        image: grocerybud,
        route: "/grocerybud"
    },
]

function Cards() {

    return (
        
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row m-md-auto m-sm-auto">
                {
                    cards.map( card =>(
                        <div  className="col-md-4 col-sm-6 col-xs-12 mb-4" key={card.id}>
                            <Card title={card.title} image={card.image} route={card.route}/>
                        </div>
                    ))
                }
            </div>
            
        </div>
    
    )
}

export default Cards
