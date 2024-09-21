import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/email.png";
import behance from "../assets/behnaceB.png";

const Contact = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Start a project</h2>
          <p className="text-lg mb-4 md:mb-0 flex-1">
            Interested in working together? We should queue up a time to chat.
            I'll buy the coffee.
          </p>
          <a
            href="mailto:akbarfai2428@gmail.com"
            className="inline-block bg-transparent border-2 border-teal-400 text-teal-400 font-semibold py-3 px-6 rounded-full hover:bg-teal-400 hover:text-white transition duration-300 flex items-center space-x-2"
          >
            <span>Let’s do this</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-600 text-white py-12 px-4">
        <div className="container mx-auto text-center space-y-6">
          {/* Logo */}
          <div className="mb-4 text-3xl font-bold text-white tracking-wide transform hover:scale-105 transition duration-300">
            akbarfai
          </div>

          {/* Motivational Statement */}
          <p className="text-lg mb-4">
            Living, learning, & leveling up one day at a time.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.behance.net/akbfai"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src={behance} alt="Behance" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/akbrfai28/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/akbarfai-blub"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src={github} alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="mailto:akbarfai2428@gmail.com"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src={gmail} alt="Email" className="w-8 h-8" />
            </a>
          </div>

          {/* Footer Credits */}
          <p className="text-sm">Handcrafted by me © akbarfai</p>
          <p className="text-sm">
            Made with <span className="text-blue-300">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
