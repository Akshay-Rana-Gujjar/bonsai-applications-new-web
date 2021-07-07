import React from "react"
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import "./style.css"
import Img1 from "../../../Images/showcase/showcase1.jpg";
import Img2 from "../../../Images/showcase/showcase2.jpg";
import Img3 from "../../../Images/showcase/showcase3.jpg";
import Img4 from "../../../Images/showcase/showcase4.jpg";
import Img5 from "../../../Images/showcase/showcase5.jpg";
import Img6 from "../../../Images/showcase/showcase6.jpg";

const ShowSlide = (props) => {
  const [pause, setPause] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    spacing: 10,
    slidesPerView: 5,
    centered: true,
    loop: true,
    mode: "snap",
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    breakpoints: {
      "(max-width: 425px)": {
        slidesPerView: 1,
        mode: "free-snap",
      },
      "(min-width: 425px)": {
        slidesPerView: 1,
        mode: "free-snap",
      },
      "(min-width: 568px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 768px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 5,
        mode: "free-snap",
      },
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider showcase-2">
          <div className="keen-slider__slide number-slide1">
            <img src={Img1} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={Img2} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={Img3} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={Img4} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={Img5} alt="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={Img6} alt="" />
          </div>
        </div>
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default ShowSlide;