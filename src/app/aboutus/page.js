"use client"
import React, { useEffect, useState } from 'react';
import fastFacts from './Aboutus.json';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About us</h2>
        <p className="text-lg text-gray-600">
        Sagar Sharma  was born in 2001 when two hosts welcomed three guests to their San Francisco home, 
          and has since grown to over 5 million hosts who have welcomed over 1.5 billion guest arrivals 
          in almost every country across the globe. Every day, hosts offer unique stays and experiences 
          that make it possible for guests to connect with communities in a more authentic way.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-8">Fast facts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fastFacts.map((fact) => (
            <motion.div
              key={fact.id}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {fact.prefix && fact.prefix}
                <CountUp end={fact.value} duration={3} separator="," />
                {fact.suffix && fact.suffix}
              </div>
              <p className="text-gray-600">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
