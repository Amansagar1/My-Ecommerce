"use client";
import React, { useEffect, useState } from "react";
import Top from "../Components/Banner/Top";
import Main1stsection from "../Components/Main/Main1stsection";
import ProductSection from "../Components/Main/Productsection1/ProductSection";
import ProductSection2 from "../Components/Main/ProductSection2/ProductSection2";
import Blog from "../Components/Main/blog/Blog";
import SocialMediaFeed from "../Components/Main/SocialMedeaFeed/SocialMediaFeeod";

const Page = () => {
  return (
    <div>
      <Top />
      <Main1stsection />
      <ProductSection />
      <ProductSection2 />
      <Blog />
      <SocialMediaFeed />
    </div>
  );
};

export default Page;
