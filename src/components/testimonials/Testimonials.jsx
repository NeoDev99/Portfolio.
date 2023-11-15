import React, { useState } from 'react';
import "./testimonial.css";
import { Data } from "./Data";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? Data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === Data.length - 1 ? 0 : prevIndex + 1));
  };

  const translateValue = -100 * activeIndex + "%";

  return (
    <section className="testimonial container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <div className="testimonial__container" style={{ transform: `translateX(${translateValue})` }}>
        {Data.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial__card ${index === activeIndex ? 'active' : ''}`}>
            <img src={testimonial.image} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">{testimonial.title}</h3>
            <p className="testimonial__description">{testimonial.description}</p>
          </div>
        ))}
      </div>

      <div className="testimonial__controls">
        <button onClick={handlePrev}>&lt; Prev</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
