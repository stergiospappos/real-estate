import React from "react";
import featuresContent from "./features-data";
import FeaturesItem from "./features-item";
import "./features.css";

function Features() {
  return (
    <section className="features">
      <div className="features--left">
        <h2 className="features--left--title">Why Choose Luxeyline ?</h2>
        <p className="features--left--text">
          At Luxeyline, we are dedicated to providing unparalleled service,
          expert guidance, and a seamless experience for all your property
          needs. Here’s why you should choose us
        </p>
      </div>
      <div className="features--right">
        {featuresContent.map((item, index) => (
          <FeaturesItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Features;
