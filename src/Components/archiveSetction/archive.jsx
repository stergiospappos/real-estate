import React from "react";
import "./archive.css";
import "./archiveData";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Slider from "./slider";

function ArchiveSection() {
  return (
    <section className="archiveSection">
      <div className="archiveSection--top">
        <div className="archiveSection--top--title">
          <h2>Find your Perfect Match on luxeyline</h2>
        </div>
        <div className="archiveSection--top--filters">
          <h3>Customize Your Experience</h3>
          <div className="archiveSection--top--filters--container">
            <ul>
              <li>Single House</li>
              <li>Family House</li>
              <li>Apartments</li>
              <li>Luxury Estates</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="archiveSection--bottom">
        <div className="archiveSection--bottom-slider">
          <Slider />
        </div>
      </div>
    </section>
  );
}

export default ArchiveSection;
