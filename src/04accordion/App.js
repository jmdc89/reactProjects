import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import './accordion.css';

function Accordion() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container-ac'>
        <h3>questions and answers about login</h3>
        <section className='info-ac'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Accordion;
