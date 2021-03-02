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

  return (
    <>
      <section className='container-cg'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error-cg' : null}`}
          />
          <button className='btn-cg' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors-cg'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default ColorGenerator;
