import React from "react";
import Top from "../Components/Banner/Top";
import Navbar from "../Components/Navbar/Navbar";
import Main1stsection from "../Components/Main/Main1stsection";
import ProductSection from "../Components/Main/Productsection1/ProductSection";
import ProductSection2 from "../Components/Main/ProductSection2/ProductSection2"
import Blog from "../Components/Main/blog/Blog";
import SocialMediaFeeod from "../Components/Main/SocialMedeaFeed/SocialMediaFeeod";
import Footer from "../Components/Footer/Footer";
const page = () => {
  return (
    <div>
           <Top />
      <Main1stsection />
      <ProductSection/>
      <ProductSection2/>
      <Blog/>
      <SocialMediaFeeod/>
      
    </div>
  );
};

export default page;
