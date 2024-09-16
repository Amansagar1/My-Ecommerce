import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductSection2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/products2');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto p-5 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-center text-3xl font-bold mb-8 uppercase">Best Seller Products</h2>
      <p className="text-center text-gray-600 mb-12">
        Discover the best selling products of T90 stores. All the products are listed weekly in store, helping customers capture products on best sellers.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-2">
        {products.map((item) => (
          <div key={item.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden p-2">
            {/* Discount Badge */}
            {item.discount && (
              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm rounded-full px-3 py-1">
                {item.discount}
              </div>
            )}
            {/* Image */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {item.author} - {item.date}
              </p>

              {/* Price Section */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-red-500">{item.price}</span>
                <span className="line-through text-gray-400">{item.originalPrice}</span>
              </div>

              {/* Countdown Timer */}
              <div className="text-center bg-gray-100 py-2 rounded-lg">
                <span className="text-sm text-gray-600">
                  {item.timer ? `${item.timer.hours} Hrs ${item.timer.minutes} Mins ${item.timer.seconds} Secs` : 'No Timer'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection2;
