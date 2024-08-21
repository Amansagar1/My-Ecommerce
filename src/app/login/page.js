import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from "next/image";
import Link from 'next/link';
import bgimg from "../../Components/Assets/ai-generated-8520240_1920.jpg"
const LoginPage = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-white to-blue-100">
      {/* Left Side with Image and Quote */}
      
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-200 p-8">
   
          <div className="relative">
          <Image 
            src={bgimg}
            alt="Pablo Escanor"
            width={600} 
            height={800} 
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <FaQuoteLeft className="text-3xl" />
            <p className="mt-2">
              The flexibility is truly remarkable. It effortlessly adapts to a wide range of research methodologies and study designs.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side with Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6">Welcome back!</h2>
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Create account
          </button>
          <p className="text-center text-gray-500 text-xs mt-6">
            Already have an account? <Link href="/" className="text-blue-500">Sign in</Link>
          </p>
        </div>

        <div className="w-full max-w-sm mt-6">
          <button className="bg-white border border-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2 flex justify-center items-center">
            Continue with Google
          </button>
          <button className="bg-white border border-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2 flex justify-center items-center">
            Continue with Apple
          </button>
          <button className="bg-white border border-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex justify-center items-center">
            Continue with Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
