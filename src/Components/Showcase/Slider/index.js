import React from "react"
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import "./style.css"

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
        <div ref={sliderRef} className="keen-slider slider-2">
          {/* <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div> */}
          <div className="keen-slider__slide">1</div>
          <div className="keen-slider__slide">2</div>
          <div className="keen-slider__slide">3</div>
          <div className="keen-slider__slide">4</div>
          <div className="keen-slider__slide">5</div>
          <div className="keen-slider__slide">6</div>
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