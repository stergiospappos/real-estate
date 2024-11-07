import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./slider.css";
import cardData from "./archiveData";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const cards = ["Hello", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
  const visibleCards = 3;

  const handleNext = () => {
    if (currentIndex < cards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.getBoundingClientRect().width;
      gsap.to(sliderRef.current, {
        x: -currentIndex * cardWidth,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {cardData.map((card, index) => (
            <div
              className="card"
              key={index}
              ref={index === 0 ? cardRef : null}
            >
              <div className="card-image">
                <img src={card.img} alt={card.title} />
                <div className="price-tag">{card.price}</div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - visibleCards}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
