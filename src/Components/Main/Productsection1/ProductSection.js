import React from 'react';
import Image from 'next/image';
import products from './ProductSection.json';

const ProductSection = () => {
  return (
    <div className="container mx-auto p-5 bg-gradient-to-b from-white to-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden relative p-2"
          >
            <div className="w-full lg:w-1/3 p-4 relative">
              <Image
                href={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-full text-xs ">
                {product.discount}
              </div>
              {product.soldOut && (
                <div className="absolute top-0 right-0 bg-gray-500 text-white p-2 rounded-full text-xs">
                  Sold Out
                </div>
              )}
            </div>

            <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="mt-4">
                <div className="text-lg font-bold text-red-600">
                  {product.price}{' '}
                  <span className="line-through text-gray-400">
                    {product.originalPrice}
                  </span>
                </div>
                {product.timer && (
                  <div className="flex space-x-2 mt-2 text-center">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <p className="text-lg font-bold">{product.timer.hours}</p>
                      <p className="text-xs">Hrs</p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <p className="text-lg font-bold">{product.timer.minutes}</p>
                      <p className="text-xs">Mins</p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <p className="text-lg font-bold">{product.timer.seconds}</p>
                      <p className="text-xs">Secs</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
