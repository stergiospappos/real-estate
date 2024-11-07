import React from "react";
import "./hero-with-image.css";
import heroImg from "../../assets/minimal-apartment.jpg";
import { ArrowDown } from "lucide-react";

function Hero_With_Image() {
  return (
    <section className="heroWithImg">
      <div className="heroWithImg--imgContainer">
        <img src={heroImg} alt="" className="heroWithImg--imgContainer--img" />
      </div>
      <div className="heroWithImg--textContainer">
        <h1 className="heroWithImg--textContainer--title">
          Building Your Future, One Property at a Time
        </h1>
        <p className="heroWithImg--textContainer--suntitle">• About Us</p>
        <button className="heroWithImg--textContainer--downBtn">
          <ArrowDown />
        </button>
      </div>
    </section>
  );
}

export default Hero_With_Image;
