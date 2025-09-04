import brandImg from "../assets/brand_img.png"
function AboutUs() {
  return(
    <>
      <section className="w-full outfit flex flex-col items-center my-10">
        
        <section className="flex flex-col items-center mb-10">
          <h1 className="text-5xl font-bold">About <span className=" font-light underline">Our Brand</span></h1>
          <p className="text-gray-500 mt-3 text-2xl text-center w-[80%]">Passionate About Properties, Dedicated to Your Vision</p>
        </section>


        <section className="flex flex-col sm:grid sm:grid-cols-2 gap-x-20 mx-6">
          <section>
            <img src={brandImg} alt="" className="mb-20 max-auto rounded-b-2xl"/>
          </section>


          <section className="flex flex-col justify-center items-center">
            <section className="grid grid-cols-2 gap-x-20 mb-10">
              <h2 className="text-center text-4xl font-bold">10+</h2>
              <h2 className="text-center text-4xl font-bold">12+</h2>
              <p className="text-center text-xl text-gray-500">Years of Excellence</p>
              <p className="text-center text-xl text-gray-500">Projects Completed</p>
            </section>

            <section className="grid grid-cols-2 gap-x-20 mb-10">
              <h2 className="text-center text-4xl font-bold">20+</h2>
              <h2 className="text-center text-4xl font-bold">25+</h2>
              <p className="text-center text-xl text-gray-500">Mn. Sq. Ft. Delivered</p>
              <p className="text-center text-xl text-gray-500">Ongoing Projects</p>
            </section>

            <hr className="text-gray-500 w-[80%] m-auto h-1 gap-0 my-0"/>

            <section className="flex flex-col gap-6 mt-10 text-gray-600 text-lg">
              <p className="wrap-break-word">At Horizon Estates, we believe real estate is more than just property—it’s about building futures, creating opportunities, and finding a place you can truly call home.
                Founded on trust, transparency, and innovation, we are dedicated to connecting people with the right spaces—whether it’s a first home, an investment, or a commercial property. Our team combines deep market expertise with a forward-thinking vision, ensuring that every client’s journey is seamless, secure, and successful.</p>
              <div className="flex justify-start">
                <button className="p-2 px-6 text-white text-xl bg-blue-400 border-none rounded-2xl hover:opacity-85 active:opacity-100 active:scale-95 cursor-pointer ease-in-out duration-300">
                Learn More
              </button>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}
export default AboutUs;