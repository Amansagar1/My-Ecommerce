"use client";
import React, { useState } from 'react';
const BootomBanner = () => {
    const [showBottomBanner, setShowBottomBanner] = useState(true);
    if (!showBottomBanner) return null;
  return (
    <div className="sticky bottom-0 w-full h-12 bg-gray-800 flex items-center justify-center text-white px-4 relative">
    <span className="text-sm sm:text-base">
      This website uses cookies to ensure you get the best experience on our website.
    </span>
    <button
      className="absolute right-4 top-2 text-white text-2xl"
      onClick={() => setShowBottomBanner(false)}
    >
      &times;
    </button>
    <button
      onClick={() => setShowBottomBanner(false)}
      className="ml-4 bg-white text-gray-800 p-1 sm:p-2 text-xs sm:text-sm rounded"
    >
      Got it!
    </button>
  </div>
  )
}

export default BootomBanner