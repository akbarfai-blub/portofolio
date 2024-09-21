import React from "react";
import P1 from "../assets/Project1.png";
import P2 from "../assets/Project2.png";
import P3 from "../assets/Project3.png";

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      imgSrc: P1,
      alt: "Project 1",
      title: "Tour Package Website",
      description: "A website showcasing popular tour packages for Haji.",
    },
    {
      id: 2,
      imgSrc: P2,
      alt: "Project 2",
      title: "UI/UX Design",
      description: "UI/UX design project for a product management platform.",
    },
    {
      id: 3,
      imgSrc: P3,
      alt: "Project 3",
      title: "Product Solo",
      description: "A product management learning platform for everyone.",
    },
    {
      id: 4,
      imgSrc: "https://via.placeholder.com/300x200",
      alt: "Project 4",
      title: "Project 4",
      description: "Placeholder project description.",
    },
    {
      id: 5,
      imgSrc: "https://via.placeholder.com/300x200",
      alt: "Project 5",
      title: "Project 5",
      description: "Placeholder project description.",
    },
    {
      id: 6,
      imgSrc: "https://via.placeholder.com/300x200",
      alt: "Project 6",
      title: "Project 6",
      description: "Placeholder project description.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">My Recent Work</h2>
        <p className="text-lg text-gray-600 mt-4">
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <a
            href="mailto:akbarfai2428@gmail.com"
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
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.imgSrc}
              alt={project.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:opacity-80"
            />

            {/* Overlay with Project Information */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-4 text-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-12">
        <a
          href="https://www.behance.net/akbfai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-transparent border-2 border-purple-600 text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 hover:shadow-lg transform hover:scale-105"
        >
          See more on Behance
        </a>
      </div>
    </section>
  );
};

export default RecentWork;
