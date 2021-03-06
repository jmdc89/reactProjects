import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './cards.css';


function Card({title, image, route}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">  
            <div className="overflow">
                <img className="card-img-top" src={image} alt=""/>
            </div>   
            <div className="card-body text-light">
                {/* <h4 className="card-title">{title}</h4> */}
                <Link to={route} className="btn btn-outline-secondary rounded-0 card-title">
                    {title}
                </Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    route: PropTypes.string,
    image: PropTypes.string
}

export default Card
