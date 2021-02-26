import React, { useState } from 'react';
import data from './data';
import List from './List';
import './birthday.scss';

function App() {
  const [people, setPeople] = useState(data);

  return (

    <main>
      <section className='containerb'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button className='bbutton' onClick={() => setPeople([])}>
              clear all
          </button>
      </section>
    </main>
  );
}

export default App;
