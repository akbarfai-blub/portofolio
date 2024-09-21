import React from "react";
import avatar from "../assets/Avatar.jpeg";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center text-center p-8 sm:p-10 md:p-16 pb-16">
      {/* Bagian Hero Utama */}
      <div className="container mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-purple-600 leading-tight">
          Designer, Frontend Developer
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-1xl mx-auto">
          I design and code beautifully simple things, and I love what I do.
        </h2>

        {/* Avatar */}
        <div className="flex justify-center mb-12">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-lg transition transform hover:scale-105 duration-300"
            src={avatar}
            alt="My Avatar"
          />
        </div>
      </div>

      {/* Hiasan Tambahan dengan Garis Full Width */}
      <div className="w-full mt-10">
        <div className="h-1 bg-purple-600"></div>
      </div>
    </section>
  );
};

export default Hero;
