import React from 'react';
import Image from 'next/image';
import offerData from './offer.json';

const SpecialOffersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="relative w-full h-64 mb-8 shadow-lg border">
        <Image
          href="/" 
          alt="Special Offers Banner"
          className="w-full h-full object-cover "
          layout="fill" 
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offerData.map((offer) => (
          <div key={offer.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              href={offer.image}
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
