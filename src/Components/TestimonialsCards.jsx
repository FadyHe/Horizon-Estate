import testimonialsData from '../assets/assets.js'
import star from '../assets/star_icon.svg'
import empty from '../assets/Empty.png'
function TestimonialsCard() {
  
  const maxStars = 5;
  return(
    <>
      <div className='flex flex-col justify-center md:flex md:flex-row md:flex-wrap md:justify-center'>
      {testimonialsData.map((testimonial, index) => (
        
        


        <section className='flex flex-col justify-center items-center text-center outfit bg-gray-100 m-10 w-fit p-20 shadow-xl hover:cursor-pointer hover:scale-105 hover:shadow-2xl duration-300 max-w-[500px] ' key={index}>


          <section className='mb-5'>
            <img src={testimonial.image} alt={testimonial.alt} />
          </section>


          <section className='mb-5 text-2xl font-bold'>
            <h1>
              {testimonial.name}
            </h1>
            <p className='text-gray-500 text-xl font-normal'>
              {testimonial.title}
            </p>
          </section>


          <section className="flex space-x-1 mb-5 justify-center">
            {[...Array(maxStars)].map((_, i) => (
              <img 
                key={i}
                src={i < testimonial.rating ? star : empty}
                alt={i < testimonial.rating ? "Filled star" : "Empty star"}
                className="w-5 h-5"
              />
            ))}
          </section>


          <section>
            <p className='text-gray-600 text-lg wrap-break-word'>
              {testimonial.text}
            </p>
          </section>
        </section>
      ))}
      </div>

    </>

  )
}
export default TestimonialsCard;

