import React from "react";
import avatar from "../assets/Avatar.jpeg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 min-h-screen flex flex-col justify-center items-center text-center p-8 sm:p-10 md:p-16 pb-16 relative">
      {/* Bagian Hero Utama */}
      <div className="container mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-600 leading-tight">
          Designer, Frontend Developer
        </h1>

        {/* Deskripsi singkat */}
        <p className="text-md sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
          Specializing in UI/UX Design and Frontend Development with over 1
          years of experience in building responsive and user-centric web
          applications.
        </p>

        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 border-4 border-purple-600"
            src={avatar}
            alt="My Avatar"
          />
        </div>

        {/* Tombol CTA */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.behance.net/akbfai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105"
          >
            See My Portfolio
          </a>
          <a
            href="https://drive.google.com/file/d/149QjDoOWim1zdm8y8AOAIPidVhJ6VpsX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-purple-600 text-purple-600 py-2 px-6 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 shadow-lg transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Hiasan Tambahan dengan Garis Full Width */}
      <div className="w-full mt-10">
        <div className="h-1 bg-purple-600 w-1/2 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
