import { useState } from 'react';
import data from './data';
/* react icons */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const randomNumber = () => {
    setIndex((currentVal) => {
      const number = Math.floor(Math.random() * people.length);
      if (currentVal === number) {
        const newVal = number + 1;
        if (newVal > people.length - 1) {
          return 0;
        }
        return newVal;
      }
      return number;
    });
  };

  const nextPerson = () => {
    setIndex((currentVal) => {
      const newVal = currentVal + 1;
      if (newVal > people.length - 1) {
        return 0;
      }
      return newVal;
    });
  };
  const prevPerson = () => {
    setIndex((currentVal) => {
      const newVal = currentVal - 1;
      if (newVal < 0) {
        return people.length - 1;
      }
      return newVal;
    });
  };

  return (
    <main className="app">
      {
        <article className="person-box">
          <div className="img-container">
            <img className="user-img" src={image} alt={name} />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <div className="user-info">
            <h3>{name}</h3>
            <h5 className="job">{job}</h5>
            <p className="desc">{text}</p>
          </div>
          <div className="arrows-container">
            <button className="arrow-btn" onClick={prevPerson}>
              <FaAngleLeft />
            </button>
            <button className="arrow-btn" onClick={nextPerson}>
              <FaAngleRight />
            </button>
          </div>
          <button onClick={randomNumber} className="btn surprise">
            Surprise Me
          </button>
        </article>
      }
    </main>
  );
};
export default App;
