import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
      <article className='reviewr'>
          <div className='img-containerr'>
              <img src={image} alt={name} className='person-imgr'/>
              <span className='quote-iconr'>
                  <FaQuoteRight />
              </span>
          </div>
          <h4 className='authorr'>{name}</h4>
          <p className='jobr'>{job}</p>
          <p className='infor'>{text}</p>
          <div className='button-container-mod'>
              <button className='prev-btn-mod' onClick={prevPerson}>
                <FaChevronLeft/>
              </button>
              <button className='next-btn-mod' onClick={nextPerson}>
                <FaChevronRight/>
              </button>
              <button className='random-btn-mod' onClick={randomPerson}>surprise me</button>
          </div>
      </article>
  );
};

export default Review;
