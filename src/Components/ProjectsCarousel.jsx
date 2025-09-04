import { useState } from "react";
import { projectsData } from "../assets/assets";

function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-[700px] w-full mx-auto transform transition duration-500 ease-in-out">
      {/* Slides */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ease-in-out ${index === current ? "block" : "hidden"
              }`}
          >
            {/* Keep aspect ratio so image doesn’t grow weirdly */}
            <div className="aspect-video w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-4 bg-white rounded-b-2xl">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-lg font-bold text-gray-600">{project.price}</p>
              <p className="text-gray-600">{project.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full px-2 pb-1 shadow-md text-3xl transform transition duration-500 ease-in-out"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full px-2 pb-1 shadow-md text-3xl transform transition duration-500 ease-in-out"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2 transform transition duration-500 ease-in-out">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index-1)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-gray-900" : "bg-gray-300 transform transition duration-500 ease-in-out"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsCarousel;
