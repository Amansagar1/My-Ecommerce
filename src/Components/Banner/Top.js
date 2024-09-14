"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import TopBanner from './TopBanner';
import BottomBanner from './BootomBanner';
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
      {showTopBanner && <TopBanner />}

      {/* Image Slider */}
      <div className="relative flex justify-center items-center h-[70vh] sm:h-[80vh] bg-gray-100">
        <button
          className="absolute left-4 md:left-8 z-10 p-2 sm:p-4 text-white bg-black bg-opacity-50 rounded-full"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <div className="w-full h-full flex items-center justify-center relative">
          <Image
            src={images[currentImageIndex]}
            alt="Slider Image"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute text-white text-center w-full flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold animate-bounce">Opening Ceremony Men's</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Men's Spring Fashion Scarves Infinity Eternity Cowl Neck Scarves Men Fashion Scarf Men.
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
       <BottomBanner/>
      )}
    </div>
  );
};

export default Top;
