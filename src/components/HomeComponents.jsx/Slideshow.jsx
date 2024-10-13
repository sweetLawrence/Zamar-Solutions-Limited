import React, { useState, useEffect } from 'react';
import Slide1 from '../../assets/images/slide1.png'
import Slide2 from '../../assets/images/slide2.jpg'
import Slide3 from '../../assets/images/slide3.jpg'

const images = [
  Slide1,
  Slide2,
  Slide3
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
