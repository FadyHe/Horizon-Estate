import TestimonialsCard from "./TestimonialsCards.jsx"

function Testimonial() {
  return (
    <>
      <section className="flex flex-col items-center my-40 outfit" id="testimonials">
        <h1 className="text-5xl font-bold mb-3 text-center">Customer <span className=" font-light underline">Testimonials</span></h1>
        <p className="text-gray-500 mt-3 text-2xl text-center w-[50%] mb-20">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

        <TestimonialsCard />

      </section>
    </>
  )
}
export default Testimonial;