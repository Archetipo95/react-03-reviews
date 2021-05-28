import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() =>
            setIndex((index) => {
              if (index === 0) {
                index = people.length;
              }
              return index - 1;
            })
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => setIndex((index) => (index + 1) % people.length)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() =>
          setIndex((index) => {
            let newIndex = Math.floor(Math.random() * people.length);
            while (index === newIndex) {
              newIndex = Math.floor(Math.random() * people.length);
            }
            return newIndex;
          })
        }
      >
        Random
      </button>
    </article>
  );
};

export default Review;
