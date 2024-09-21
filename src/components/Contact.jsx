import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/email.png";
import behance from "../assets/behance.png";

const Contact = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Start a project</h2>
          <p className="text-lg mb-4 md:mb-0">
            Interested in working together? We should queue up a time to chat.
            I'll buy the coffee.
          </p>
          <a
            href="mailto:akbarfai2428@gmail.com"
            className="inline-block bg-transparent border-2 border-teal-400 text-teal-400 font-semibold py-3 px-6 rounded-full hover:bg-teal-400 hover:text-white transition duration-300"
          >
            Let’s do this
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-purple-600 text-white py-12">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 text-3xl font-bold text-white tracking-wide">
            akbarfai
          </div>

          {/* Motivational Statement */}
          <p className="text-lg mb-6">
            Living, learning, & leveling up one day at a time.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.behance.net/akbfai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={behance} alt="Dribbble" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akbrfai28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/akbarfai-blub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="mailto:akbarfai2428@gmail.com">
              <img src={gmail} alt="Email" className="w-6 h-6" />
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
