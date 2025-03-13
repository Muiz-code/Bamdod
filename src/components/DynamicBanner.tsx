import React, { useState, useEffect } from "react";
const DynamicBanner: React.FC = () => {
  const images = [
    "/carousel-image.avif",
    "/carousel-image2.avif",
    "/carousel-image3.avif",
    "/carousel-image4.avif",
    "/carousel-image5.avif",
    "/carousel-image6.avif",
    "/carousel-image7.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 500); // Match this duration with the CSS transition duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative mx-4 sm:mx-6 md:mx-8 lg:mx-12 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg mb-10 shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DynamicBanner;