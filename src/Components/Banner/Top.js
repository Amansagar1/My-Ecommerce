"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  "/Assets/ai-generated-8520240_1920.jpg",
  "/Assets/ai-generated-8702726_1280.jpg",
  "/Assets/ai-generated-8520240_1920.jpg"
];

const Top = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [showBottomBanner, setShowBottomBanner] = useState(true);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full ">
      {/* Top Banner */}
      {showTopBanner && (
        <div className="w-full h-12 bg-red-600 flex items-center justify-center text-white">
          <span className="text-sm sm:text-base md:text-lg">
            MID-SEASON SALE UP TO 70% OFF. USE CODE: “SALE70”. SHOP NOW
          </span>
          <button
            className="absolute right-4 top-2 text-white text-2xl"
            onClick={() => setShowTopBanner(false)}
          >
            &times;
          </button>
        </div>
      )}

      {/* Image Slider */}
      <div className="relative flex justify-center items-center h-[60vh] sm:h-[70vh] bg-gray-100">
        <button
          className="absolute left-4 md:left-8 z-10 p-2 sm:p-4 text-white bg-black bg-opacity-50 rounded-full"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={images[currentImageIndex]}
            alt="Slider Image"
            layout="fill"
            className="top-0 object-cover"
          />
          <div className="absolute bottom-10 left-4 sm:left-10 text-white text-center sm:text-left">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold animate-bounce">Opening Ceremony Men's</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Mens Spring Fashion Scarves Infinity Eternity Cowl Neck Scarves Men Fashion Scarf Men.
            </p>
          </div>
        </div>
        <button
          className="absolute right-4 md:right-8 z-10 p-2 sm:p-4 text-white bg-black bg-opacity-50 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      {/* Bottom Banner */}
      {showBottomBanner && (
        <div className="sticky bottom-0 w-full h-12 bg-gray-800 flex items-center justify-center text-white px-4">
          <span className="text-sm sm:text-base">
            This website uses cookies to ensure you get the best experience on our website.
          </span>
          <button
            className="absolute right-4 top-2 text-white text-2xl"
            onClick={() => setShowBottomBanner(false)}
          >
            &times;
          </button>
          <button className="ml-4 bg-white text-gray-800 p-1 sm:p-2 text-xs sm:text-sm rounded">
            Got it!
          </button>
        </div>
      )}
    </div>
  );
};

export default Top;
