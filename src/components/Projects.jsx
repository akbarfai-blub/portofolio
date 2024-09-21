import React from "react";

const Projects = () => {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="container mx-auto text-center mb-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Hi, I'm Akbar. Nice to meet you.
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Since beginning my journey as a frontend developer, I've built
          responsive, scalable applications, and designed user-friendly
          interfaces. I'm continuously honing my skills and collaborating with
          others to create impactful projects.
        </p>
      </div>

      {/* Skills Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Designer */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-teal-500 p-4 rounded-full">
              <img
                src="/path-to-icon/design-icon.svg"
                alt="Designer"
                className="w-10 h-10"
              />
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
            <div className="bg-teal-500 p-4 rounded-full">
              <img
                src="/path-to-icon/developer-icon.svg"
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
            <div className="bg-teal-500 p-4 rounded-full">
              <img
                src="/path-to-icon/mentor-icon.svg"
                alt="Mentor"
                className="w-10 h-10"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">3D Desing</h3>
          <p className="text-gray-700 mb-4 text-center">
            I make a 3d desing like interior and product 3d
          </p>
          <h4 className="text-purple-600 mb-2">Experience:</h4>
          <p className="text-gray-700 mb-4">Interior Design, Product Design</p>
          <h4 className="text-purple-600 mb-2">3D Designs Stats:</h4>
          <p className="text-gray-700">2 years experience</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
