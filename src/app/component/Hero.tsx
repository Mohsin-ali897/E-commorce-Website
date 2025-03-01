
import React from "react";
import Image from "next/image";
import ruby from "../../../public/Ruby Diamond.png";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[700px] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 w-full text-center md:text-left mt-12 md:mt-24">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          FIND STONES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-4 sm:mt-6">
          Browse through our diverse range of meticulously crafted stones,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black text-white rounded-full text-base sm:text-lg font-medium mt-6 px-6 py-3 hover:scale-105 transition-transform">
          Shop Now
        </button>

        {/* Stats Section */}
        <div className="flex justify-center md:justify-start gap-6 sm:gap-8 mt-10 sm:mt-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">200+</h2>
            <p className="text-gray-600 text-xs sm:text-sm">International Brands</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">2,000+</h2>
            <p className="text-gray-600 text-xs sm:text-sm">High-Quality Products</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">30,000+</h2>
            <p className="text-gray-600 text-xs sm:text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-10 md:mt-0">
        <Image
          src={ruby}
          alt="Ruby Diamond"
          width={500}
          height={500}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
