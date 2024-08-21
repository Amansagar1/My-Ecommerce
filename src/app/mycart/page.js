import React from 'react';
import productDetails from './productdetails.json';
import orderSummary from './ordersummery.json';
import Image from "next/image"
const CartPage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8">
      {/* Product Details Section */}
      <div className="lg:w-2/3 bg-white p-4 shadow-md rounded-lg">
        <div className="flex">
          {/* Product Images */}
          <div className="w-1/3">
            <Image
              href={productDetails.images[0]}
              alt={productDetails.name}
              className="rounded-lg"
            />
            {/* Additional Thumbnails */}
            <div className="flex mt-2 space-x-2">
              {productDetails.images.slice(1).map((image, index) => (
                <Image key={index} href={image} alt="Product Thumbnail" className="w-12 h-12 object-cover rounded-md border" />
              ))}
            </div>
          </div>
          {/* Product Info */}
          <div className="ml-4 w-2/3">
            <h2 className="text-2xl font-bold">{productDetails.name}</h2>
            <div className="flex items-center space-x-2 my-2">
              <span className="text-lg font-semibold text-green-600">4.5</span>
              <span className="text-sm text-gray-500">623 reviews</span>
              <span className="text-sm text-gray-500">1,919 Sold</span>
            </div>
            <p className="text-lg font-bold">${productDetails.price}</p>
            <p className="text-sm text-red-600">Only {productDetails.stock} Stocks Left!</p>
            <div className="mt-4">
              <h4 className="text-md font-medium">Select Color</h4>
              <div className="flex space-x-2 mt-2">
                {productDetails.colors.map((color, index) => (
                  <button key={index} className={`px-3 py-1 rounded-md border ${color === 'Cream' ? 'bg-blue-100 border-blue-500' : ''}`}>{color}</button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-medium">Select Size</h4>
              <div className="flex space-x-2 mt-2">
                {productDetails.sizes.map((size, index) => (
                  <button key={index} className={`px-3 py-1 rounded-md border ${size === productDetails.availableSize ? 'bg-blue-100 border-blue-500' : ''}`}>{size}</button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-gray-600">{productDetails.description}</p>
          </div>
        </div>
      </div>
      {/* Order Summary Section */}
      <div className="lg:w-1/3 bg-gray-50 p-4 shadow-md rounded-lg ml-0 lg:ml-8 mt-8 lg:mt-0">
        <h3 className="text-lg font-semibold mb-4">Order Details</h3>
        <div className="flex justify-between items-center">
          <span>Quantity</span>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 rounded-md border">-</button>
            <span>{orderSummary.quantity}</span>
            <button className="px-2 py-1 rounded-md border">+</button>
          </div>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Color</span>
          <span>{orderSummary.color}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Size</span>
          <span>{orderSummary.size}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Price</span>
          <span>${orderSummary.price.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Discount ({orderSummary.discount.percentage}%)</span>
          <span>-${orderSummary.discount.amount.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <span>Delivery</span>
          <span>${orderSummary.delivery.cost.toFixed(2)}</span>
        </div>
        <textarea className="mt-4 p-2 w-full border rounded-md" placeholder="Write a note..."></textarea>
        <button className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md">Apply Coupon</button>
        <div className="mt-4 border-t pt-4 flex justify-between">
          <span>Sub Total</span>
          <span className="font-bold">${orderSummary.subTotal.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">Buy Now</button>
        <button className="mt-2 w-full bg-white border text-blue-500 py-2 rounded-md">Add To Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
