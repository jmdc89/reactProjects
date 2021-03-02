import React, { useState } from 'react'
import SingleColor from './SingleColor'
import './colorgenerator.css';

import Values from 'values.js'

function ColorGenerator() {
  
  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return <h2>color generator project</h2>
}

export default ColorGenerator;
