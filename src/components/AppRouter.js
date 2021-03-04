import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppCards from './AppCards';
import BirthdayApp from '../01birthday/App';
import Tours from '../02tours/App';
import Reviews from '../03reviews/App';
import Accordion from '../04accordion/App';
import MenuApp from '../05menu/App';
import Tabs from '../06tabs/App';
import LoremIpsum from '../08loremipsum/App';
import ColorGenerator from '../09colorgenerator/App';



export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/birthday" component={BirthdayApp}/>
                    <Route path="/tours" component={Tours}/>
                    <Route path="/reviews" component={Reviews}/>
                    <Route path="/accordion" component={Accordion}/>
                    <Route path="/menu" component={MenuApp}/>
                    <Route path="/tabs" component={Tabs}/>
                    <Route path="/loremipsum" component={LoremIpsum}/>
                    <Route path="/colorgenerator" component={ColorGenerator}/>
                    <Route exact path="/" component={AppCards}/>
                    <Route component={AppCards}/>
                </Switch>
            </div>
        </Router>
    )
}