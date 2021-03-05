import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';


import { AppRouter } from './components/AppRouter';



ReactDOM.render(
  <React.StrictMode>
   <AppRouter/>
   
  </React.StrictMode>,
  document.getElementById('root')
);
