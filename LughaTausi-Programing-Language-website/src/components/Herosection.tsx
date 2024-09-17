"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-800 via-black to-black text-white min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 opacity-75 animate-pulse"></div>

      <div className="flex flex-col items-center text-center mt-24 z-10 relative">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 animate__fadeIn">
          Unlock the Future with LughaTausi
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-purple-300 mb-6 animate__fadeIn">
          Discover the programming language that transforms complexity into simplicity.
        </p>
        <button className="bg-transparent border-2 border-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-600 transition-all duration-300">
          Jua Zaidi
        </button>
      </div>

      {/* Logo */}
      <div className="mt-12 flex justify-center relative z-10">
        <img
          src="/Logo.png"
          alt="LughaTausi Logo"
          className="rounded-full w-32 h-32 md:w-48 lg:w-64 animate__zoomIn"
        />
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 w-full flex justify-center z-10 relative">
        <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto hover:scale-105 transition-transform">
          <div className="p-6 flex flex-col items-center">
            <img src="/Tausi.png" alt="Learn More" className="w-full object-cover mb-4" />
            <button className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
