import React from "react";
import uiux from "../assets/uiux.png";
import frontend from "../assets/frontend.png";
import blender from "../assets/Blender.png";

const About = () => {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="container mx-auto text-center mb-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Hi, I'm Akbar. Nice to meet you.
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          A creative and technically skilled Frontend Developer and UI/UX
          Designer with a background in Software Engineering from Telkom
          Surabaya Institute of Technology. I have 1 years of experience using
          Figma for user-centered designs and ReactJS for building responsive,
          high-quality web applications. I also possess GitHub proficiency for
          version control and experience with backend integration (MySQL,
          MongoDB). Additionally, my skills in 3D modeling using Blender enable
          me to enhance visual storytelling. Passionate about creating
          impactful, user-friendly solutions.
        </p>
      </div>

      {/* Skills Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Designer */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <div className=" p-4 rounded-full">
              <img src={uiux} alt="Designer" className="w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Designer</h3>
          <p className="text-gray-700 mb-4 text-center">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <h4 className="text-purple-600 mb-2">Things I enjoy designing:</h4>
          <p className="text-gray-700 mb-4">UX, UI, Web, Apps, Logos</p>
          <h4 className="text-purple-600 mb-2">Design Tools:</h4>
          <p className="text-gray-700">Figma, Canva</p>
        </div>

        {/* Card 2: Frontend Developer */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <div className=" p-4 rounded-full">
              <img
                src={frontend}
                alt="Frontend Developer"
                className="w-10 h-10"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Frontend Developer
          </h3>
          <p className="text-gray-700 mb-4 text-center">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h4 className="text-purple-600 mb-2">Languages I speak:</h4>
          <p className="text-gray-700 mb-4">HTML, CSS, JavaScript, Git</p>
          <h4 className="text-purple-600 mb-2">Dev Tools:</h4>
          <p className="text-gray-700">
            Bootstrap, GitHub, TailwindCSS, VS Code
          </p>
        </div>

        {/* Card 3: Mentor */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full">
              <img src={blender} alt="Mentor" className="w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            3D Designer
          </h3>
          <p className="text-gray-700 mb-4 text-center">
            I create 3D designs for interior spaces and product visualization.
          </p>
          <h4 className="text-purple-600 mb-2">Areas of Expertise:</h4>
          <p className="text-gray-700 mb-4">Interior Design, Product Design</p>
          <h4 className="text-purple-600 mb-2">3D Designs Stats:</h4>
          <p className="text-gray-700">
            Over 2 years of professional experience in 3D modeling and design
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
