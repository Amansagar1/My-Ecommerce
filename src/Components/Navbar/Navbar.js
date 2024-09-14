"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import navigationData from './Navigation.json';
import { colors } from '../../color/color'; 

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
      color: colors.linkHoverColor, // Apply hover color
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <nav className="shadow-md" style={{ background: colors.navbarBackground }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white " >
           T-Shirt Logo
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
                <Link href={item.path} className="hover:text-gray-600" style={{ color: colors.linkColor }}>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          {/* Right Side Icons and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center text-[12px] gap-2">
              {searchOpen && (
                <form onSubmit={handleSearchSubmit} className="">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="rounded-md p-2 border"
                    style={{
                      background: colors.searchBarBackground,
                      borderColor: colors.searchBarBorderColor,
                    }}
                    placeholder="Search products..."
                  />
                </form>
              )}
              <div
                className="rounded-full w-6 h-6 border flex items-center justify-center"
                style={{ background: colors.iconColor }}
              >
                <FaSearch className="cursor-pointer" onClick={toggleSearch} />
              </div>
            </div>
            <Link href="/mycart" className="relative">
              <FaShoppingCart className="cursor-pointer" style={{ color: colors.iconColor }} />
              <span
                className="absolute -top-2 -right-2 text-xs rounded-full px-1"
                style={{ background: colors.cartBadgeColor }}
              >
                0
              </span>
            </Link>
            {/* Hamburger Menu Icon for Mobile */}
            <div className="block xl:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes className="cursor-pointer" /> : <FaBars className="cursor-pointer" />}
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
        className="xl:hidden shadow-md"
        style={{ background: colors.menuBackground }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationData.links.map((item) => (
            <motion.div key={item.name} whileHover="hover" variants={linkVariants}>
              <Link href={item.path} className="block" style={{ color: colors.menuTextColor }}>
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
