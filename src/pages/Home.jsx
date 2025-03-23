import React from "react";
import { Categories } from "../assets/mockData";
import HeroImage from "../assets/Images/hero-image.avif";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-6/24">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5 mb-2">
            Shop By Catergories
          </div>
          <ul className="space-y-4 bg-gray-100 p-3  ">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-16/24 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImage} alt="" className="h-full w-full" />
          <div className="absolute top-40 left-4">
            <p className="text-gray-800">Online Fashion-Mart</p>
            <h2 className="font-bold text-lg">
              Welcome to Online Fashion Mart
            </h2>
            <p className="mt-2 font-bold text-gray-900 text-lg">
              Millions+ Products
            </p>
            <button className="bg-red-500 text-white px-3 py-1.5 text-sm mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
