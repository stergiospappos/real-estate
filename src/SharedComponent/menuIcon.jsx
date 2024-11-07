import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const handleClick = () => {
    if (isOpen) {
      // Animate back to original position
      gsap.fromTo(
        line1Ref.current,
        { rotation: 45, x: 1, y: 7, transformOrigin: "12px 0px" },
        { rotation: 0, x: 0, y: 0, transformOrigin: "12px 0px", duration: 0.3 }
      );
      gsap.fromTo(
        line2Ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        line3Ref.current,
        { rotation: -45, x: 1, y: -7, transformOrigin: "7px -2px" },
        { rotation: 0, x: 0, y: 0, transformOrigin: "7px -2px", duration: 0.3 }
      );
    } else {
      // Animate to "X" position with custom transform origins
      gsap.fromTo(
        line1Ref.current,
        { rotation: 0, x: 0, y: 0, transformOrigin: "12px 0px" },
        { rotation: 45, x: 1, y: 7, transformOrigin: "12px 0px", duration: 0.3 }
      );
      gsap.fromTo(
        line2Ref.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.3 }
      );
      gsap.fromTo(
        line3Ref.current,
        { rotation: 0, x: 0, y: 0, transformOrigin: "7px -2px" },
        {
          rotation: -45,
          x: 1,
          y: -7,
          transformOrigin: "7px -2px",
          duration: 0.3,
        }
      );
    }
    setIsOpen(!isOpen); // Toggle state
  };

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line
          ref={line1Ref}
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          stroke="currentColor"
        />
        <line
          ref={line2Ref}
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="currentColor"
        />
        <line
          ref={line3Ref}
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
