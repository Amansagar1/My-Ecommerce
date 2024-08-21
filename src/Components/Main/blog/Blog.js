import React from 'react';
import blogPosts from './Blog.json';
import Image from "next/image"; 

const Blog = () => {
  return (
    <div className="container mx-auto p-10 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-center text-2xl font-bold mb-6">Our News</h2>
      <h3 className="text-center text-xl text-gray-600 mb-12">Unique Blog Style</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
            <Image 
              href={post.imageUrl} // Changed href to src
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">Posted By: {post.author} - {post.date}</p>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
