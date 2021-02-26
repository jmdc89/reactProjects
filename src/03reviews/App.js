import React from 'react';
import Review from './Review';
import './review.scss';



function App() {
  return (
      <main>
          <section className='containerr'>
              <div className='titler'>
                  <h2>our reviews</h2>
                  <div className='underliner'></div>
              </div>
              <Review/>
          </section>
      </main>
  );
}

export default App;
