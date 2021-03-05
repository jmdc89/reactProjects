import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';


import { AppRouter } from './components/AppRouter';
import Grocery from './10grocerybud/App';


ReactDOM.render(
  <React.StrictMode>
   {/* <AppRouter/> */}
   <Grocery/>
  </React.StrictMode>,
  document.getElementById('root')
);
