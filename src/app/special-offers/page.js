"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const SpecialOffersPage = () => {
  const [offerData, setOfferData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/offers');
        setOfferData(response.data);
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-64 mb-8 shadow-lg border">
        <Image
          src="/images/special-offers-banner.jpg" // Update with your banner image path
          alt="Special Offers Banner"
          className="w-full h-full object-cover"
          layout="fill"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offerData.map((offer) => (
          <div key={offer.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={offer.image}
              alt={offer.title}
              className="h-40 w-full object-cover rounded-md mb-4"
              width={400}
              height={300}
            />
            <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
            <span className="text-xl font-bold">{offer.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffersPage;
