import React from 'react';
import Cards from './Cards'
import './AppCard.css';

function AppCards() {
    return (
        <div className="App">
            <h1 className="title-react">React</h1>
            <h2 className="subtitle-react">MicroProjects</h2>
            <Cards/>
        </div>
    )
}

export default AppCards;