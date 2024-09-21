import React from "react";

const RecentWork = () => {
  const projects = [
    { id: 1, imgSrc: "/path-to-image/project1.jpg", alt: "Project 1" },
    { id: 2, imgSrc: "/path-to-image/project2.jpg", alt: "Project 2" },
    { id: 3, imgSrc: "/path-to-image/project3.jpg", alt: "Project 3" },
    { id: 4, imgSrc: "/path-to-image/project4.jpg", alt: "Project 4" },
    { id: 5, imgSrc: "/path-to-image/project5.jpg", alt: "Project 5" },
    { id: 6, imgSrc: "/path-to-image/project6.jpg", alt: "Project 6" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">My Recent Work</h2>
        <p className="text-lg text-gray-600 mt-4">
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <a
            href="mailto:youremail@example.com"
            className="text-blue-500 hover:underline"
          >
            Email me.
          </a>
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={project.imgSrc}
              alt={project.alt}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-12">
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-transparent border-2 border-purple-600 text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300"
        >
          See more on Behance
        </a>
      </div>
    </section>
  );
};

export default RecentWork;
