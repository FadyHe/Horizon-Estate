import ProjectsCarousel from "./ProjectsCarousel.jsx";


function Projects() {
  return(
    <>
      <section className="flex flex-col items-center my-40 outfit" id="projects">
        <h1 className="text-5xl font-bold mb-3">Projects <span className=" font-light underline">Completed</span></h1>
        <p className="text-gray-500 mt-3 text-2xl text-center w-[50%] mb-20">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
      
        <ProjectsCarousel />

      </section>
    </>
  )
}
export default Projects;