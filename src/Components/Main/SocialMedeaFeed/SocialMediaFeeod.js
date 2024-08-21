import React from 'react';
import Image from "next/image";

const SocialMediaFeed = () => {
  const posts = [
    {
      id: 1,
      username: 'Facebook',
      content: 'facebook.com',
      imageUrl: '/path/to/facebook.png',
    },
    {
      id: 2,
      username: 'Instagram',
      content: 'instagram.com',
      imageUrl: '/path/to/instagram.png',
    },
    {
      id: 3,
      username: 'Pinterest',
      content: 'pinterest.com',
      imageUrl: '/path/to/pinterest.png',
    },
    {
      id: 4,
      username: 'YouTube',
      content: 'youtube.com',
      imageUrl: '/path/to/youtube.png',
    },
    {
      id: 5,
      username: 'Snapchat',
      content: 'snapchat.com',
      imageUrl: '/path/to/snapchat.png',
    },
    {
      id: 6,
      username: 'TikTok',
      content: 'tiktok.com',
      imageUrl: '/path/to/tiktok.png',
    },
  ];

  return (
    <div className="p-12 mx-auto text-center bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-blue-900 text-2xl font-bold mb-4">Turn Any Social Channel Into a Shoppable Storefront</h2>
      <p className="text-gray-600 mb-8">Bring your products to online spaces where your customers enjoy being & start selling on:</p>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-center bg-transparent p-4 rounded-lg hover:scale-110 transition transform duration-200 ease-in-out"
          >
            <Image
              src={post.imageUrl}
              alt={post.username}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <p className="text-gray-700 mt-2 text-sm">{post.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
