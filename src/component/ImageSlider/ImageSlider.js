import React, { useState } from 'react';
import arrowleft from "./../../../src/Assets/Slider/Arrow - Left Circle.svg";
import arrowright from "./../../../src/Assets/Slider/Arrow - Right Circle.svg";

import './ImageSlider.css'
const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleThumbs = [
        currentIndex,
        (currentIndex + 1) % slides.length,
        (currentIndex + 2) % slides.length,
        (currentIndex + 3) % slides.length
      ];

    const slideStyles = {   
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        // width: '696px',
        // height: '342px',
        // border: '3px solid #16052B',  
        // boxShadow: '9px 10px 0px #16052B',
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // const goToSlide = (index) => {
    //     setCurrentIndex(index);
    // }

    const getThumbnailIndex = (index) => {
        if (currentIndex + index < slides.length) {
            return currentIndex + index;
        } else {
            return currentIndex + index - slides.length;
        }
    };
    return (
      <div id="image-slider" className="Dokumentasi-container">
        
        <div className="Dokumentasi-header">
          <h2>DOKUMENTASI</h2>
        </div>

        <div className="Dokumentasi-content">
          <div className="Dokumentasi-head">
            <img
              src={arrowleft}
              alt=""
              className="arrow-left arrow"
              onClick={goToPrevious}
            />
            <div className='image-preview' style={slideStyles}></div>
            <img
              src={arrowright}
              alt=""
              className="arrow-right arrow"
              onClick={goToNext}
            />
          </div>
          
          <div className="Dokumentasi-carousel">
            {visibleThumbs.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                style={{
                  border: "2px solid #16052B",
                  width: "215px",
                  height: "136px",
                  margin: "5px",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={slides[getThumbnailIndex(slideIndex)].url}
                  alt={`Slide ${slideIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentIndex(getThumbnailIndex(slideIndex))}
                  onMouseEnter={(event) => {
                    event.target.parentNode.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(event) => {
                    event.target.parentNode.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ImageSlider