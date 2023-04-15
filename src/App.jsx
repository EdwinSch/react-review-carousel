import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

import reviews from "./data.js";

const App = () => {
  // set state for array index number
  const [index, setIndex] = useState(0);
  // destructure reviews data for current index
  const { id, name, job, image, text } = reviews[index];

  // Next review function
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  // Previous review function
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  // return rendering
  return (
    <main>
      <article className="review" data-id={id}>
        <figure className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </figure>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
