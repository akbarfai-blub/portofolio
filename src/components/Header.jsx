import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 sm:px-10 md:px-20 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center text-3xl font-bold text-purple-600 tracking-wide">
        akbarfai
      </div>

      {/* Links */}
      <div className="flex items-center space-x-8">
        {/* Say Hello Button */}
        <a
          href="#contact"
          className="inline-block border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Say Hello
        </a>
      </div>
    </nav>
  );
};

export default Header;
