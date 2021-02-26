import React from 'react';
import ReactDOM from 'react-dom';
import BirthdayApp from './01birthday/App';
import Tours from './02tours/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <BirthdayApp /> */}
    <Tours/>
  </React.StrictMode>,
  document.getElementById('root')
);
