
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AosPackage = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return <div>
      <h1 data-aos="fade-up">Hello, AOS!</h1>
      <p data-aos="zoom-in">This is an animated paragraph.</p>
      <div className="my-element" data-aos="flip-left">
        This is another animated element.
      </div>
  </div>;
};

export default AosPackage;