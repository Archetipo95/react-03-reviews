import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index + 1) % people.length);
  };

  const prevPerson = () => {
    setIndex((index - 1 + people.length) % people.length);
  };

  // get a random person different from current one
  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * people.length);
      while (index === newIndex) {
        newIndex = Math.floor(Math.random() * people.length);
      }
      return newIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <p className="counter">
          {index + 1}/{people.length}
        </p>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Random
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
