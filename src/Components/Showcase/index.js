import React from "react";
import "./style.css";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import ShowSlide from './Slider';

const Showcase = () => {
  const [sliderRef, slider] = useKeenSlider();
  return (
    <>
      <div className="showcase-wrapper">
        <h1>OUR SHOW CASE</h1>
        <p>WANT THIS FOR YOUR WEBSITE OR BUSINESS APPLICATION</p>

        <div className="showcase-slide-back"></div>
        <ShowSlide/>
      </div>
    </>
  );
};

export default Showcase;
