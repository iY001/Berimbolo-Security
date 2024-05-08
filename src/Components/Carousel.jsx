import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css/bundle';

function Carousel({ children, customStyles, carouselClass }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper carousel when component mounts
    if (swiperRef.current) {
      swiperRef.current = new Swiper(`.${carouselClass}`, {
        // Add Swiper options here if needed
        
        spaceBetween: 6,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

    // Ensure Swiper is destroyed when component unmounts to prevent memory leaks
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [carouselClass]);

  useEffect(() => {
    // Update Swiper carousel when children change
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [children]);

  return (
    <div className={customStyles}>
      <div className={`swiper-container ${carouselClass}`} ref={swiperRef}>
        <div className="swiper-wrapper">
          {children.map((child, index) => (
            <div key={index} className="swiper-slide">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
