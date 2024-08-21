"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaCog, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import navigationData from './Navigation.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#0070f3",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <nav className="bg-gradient-to-b from-white to-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Sagar Sharma
            </Link>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden xl:flex flex-grow justify-center space-x-8">
            {navigationData.links.map((item) => (
              <motion.div
                key={item.name}
                whileHover="hover"
                variants={linkVariants}
                className={router.pathname === item.path ? "text-blue-500" : "text-gray-800"}
              >
                <Link href={item.path} className="hover:text-gray-600">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          {/* Right Side Icons and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center  text-[12px] gap-2">
            
              {searchOpen && (
                <form onSubmit={handleSearchSubmit} className="  ">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="bg-white  rounded-md p-2 border border-gray-300 focus:outline-none"
                    placeholder="Search products..."
                  />
                </form>
              )}
              <div className=" bg-white rounded-full w-6 h-6 border text flex items-center justify-center">
              <FaSearch 
                className="w-full  hover:text-gray-600 cursor-pointer" 
                onClick={toggleSearch} 
              />
              </div>
            </div>
            {/* <FaCog className="text-gray-800 hover:text-gray-600 cursor-pointer" /> */}
            <Link href="/mycart" className="relative">
              <FaShoppingCart className="text-gray-800 hover:text-gray-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </Link>
            {/* Hamburger Menu Icon for Mobile */}
            <div className="block xl:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes className="text-gray-800 hover:text-gray-600 cursor-pointer" /> : <FaBars className="text-gray-800 hover:text-gray-600 cursor-pointer" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="xl:hidden bg-white shadow-md"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationData.links.map((item) => (
            <motion.div key={item.name} whileHover="hover" variants={linkVariants}>
              <Link href={item.path} className="block text-gray-800 hover:text-gray-600">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
