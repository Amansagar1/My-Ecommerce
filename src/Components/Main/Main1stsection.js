import React from 'react';
import Image from 'next/image'; // If you're using Next.js

const Main1stsection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-10"> {/* Light gradient background */}
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Hello World !</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Welcome to Store</h1>
          <p className="mt-4 text-gray-600">
            We are a team of designers and developers that create high-quality Magento, Prestashop, Opencart themes
            and provide premium and dedicated support to our products.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-8">
          <div className="relative">
            <Image
              href="https://picsum.photos/1200/600" // Placeholder image from Lorem Picsum
              alt="Store Image"
              width={1200}
              height={600}
              className="rounded-md"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 rotate-90 text-xs tracking-wider text-gray-600 uppercase">
              Company History
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center flex-col text-center">
            <div className="w-12 h-12 mb-2">
              <Image
                href="/icons/free_shipping.svg" // Replace with your actual icon
                alt="Free Shipping"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-gray-800 font-semibold">Free Shipping</h3>
            <p className="text-gray-600">Free shipping on all orders</p>
          </div>

          <div className="flex items-center flex-col text-center">
            <div className="w-12 h-12 mb-2">
              <Image
                href="/icons/online_support.svg" // Replace with your actual icon
                alt="Online Support"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-gray-800 font-semibold">Online Support 24/7</h3>
            <p className="text-gray-600">We support online 24 hours a day</p>
          </div>

          <div className="flex items-center flex-col text-center">
            <div className="w-12 h-12 mb-2">
              <Image
                src="/icons/money_back.svg" // Replace with your actual icon
                alt="Money Back Guarantee"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-gray-800 font-semibold">Money Back Guarantee!</h3>
            <p className="text-gray-600">30 days money-back guarantee!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1stsection;
