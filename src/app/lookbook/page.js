import React from 'react';
import categories from './lookbook.json'; // Ensure this path is correct
import Image from "next/image";

const Page = () => {
  return (
    <div className="container mx-auto py-10 p-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-0 pb-[100%] relative">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-md"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
