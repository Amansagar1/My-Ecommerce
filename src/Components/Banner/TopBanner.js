"use client";
import React, { useState } from 'react';

const TopBanner = ({ onClick }) => {
  const [showTopBanner, setShowTopBanner] = useState(true);

  if (!showTopBanner) return null;
  return (
    <div className="w-full h-12 bg-red-600 flex items-center justify-center text-white relative">
      <span className="text-sm sm:text-base md:text-lg">
        MID-SEASON SALE UP TO 40% OFF. USE CODE: “SALE70”. SHOP NOW
      </span>
      <button
        className="absolute right-4 top-2 text-white text-2xl"
        onClick={() => setShowTopBanner(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default TopBanner;
