import React from 'react';
import ReactDOM from 'react-dom';
// import BirthdayApp from './01birthday/App';
// import Tours from './02tours/App';
// import Reviews from './03reviews/App';
// import Accordion from './04accordion/App';
// import MenuApp from './05menu/App';
// import Tabs from './06tabs/App';
// import LoremIpsum from './08loremipsum/App';
// import ColorGenerator from './09colorgenerator/App';
import AppCards from './AppCards';

import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    {/* <BirthdayApp />
    <Tours/>
    <Reviews/>
    <Accordion/>
    <MenuApp/> */}
    {/* <Tabs/> */}
   {/* <LoremIpsum/> */}
   {/* <ColorGenerator/> */}
   <AppCards/>
  </React.StrictMode>,
  document.getElementById('root')
);
