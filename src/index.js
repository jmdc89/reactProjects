import React from 'react';
import ReactDOM from 'react-dom';
import BirthdayApp from './01birthday/App';
import Tours from './02tours/App';
import Reviews from './03reviews/App';
import Accordion from './04accordion/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <BirthdayApp />
    <Tours/> */}
    {/* <Reviews/> */}
    <Accordion/>
  </React.StrictMode>,
  document.getElementById('root')
);
