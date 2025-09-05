

function ContactUs () {
  return (<>
  <section className="flex flex-col items-center my-40 outfit scroll-mt-16" id="contactus">
      <h1 className="text-5xl font-bold mb-3 text-center">Contact <span className=" font-light underline">With Us</span></h1>
      <p className="text-gray-500 mt-3 text-2xl text-center w-[50%] mb-20">Ready to Make a Move? Let’s Build Your Future Together</p>

      <form action="" className="flex flex-col gap-6 w-[80%] md:w-[40%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label htmlFor="name" className="flex flex-col gap-2 text-xl">
          <span>Your Name</span>
          <input type="text" name="name" id="name" required placeholder="John Doe" className="w-full bg-gray-200 h-10 p-3 rounded-[5px] focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"/>
        </label>
        <label htmlFor="email" className="flex flex-col gap-2 text-xl">
          <span>Your Email</span>
          <input type="email" name="email" id="email" required placeholder="example@mail.com" className="w-full bg-gray-200 h-10 p-3 rounded-[5px] focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"/>
        </label>
        </div>
        <label htmlFor="message" className="flex flex-col gap-2 text-xl">
          <span>Your Message</span>
          <textarea name="message" id="message" rows="5" required placeholder="Type your message here..." className="w-full bg-gray-200 p-3 rounded-[5px] focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200 resize-none"/>
        </label>
        <button type="submit" className="w-[30%] bg-blue-500 p-2 text-white rounded-[5px] hover:opacity-85 active:opacity-100 cursor-pointer ease-in-out duration-300">Send</button>
      </form>
  </section>
  </>)
}
export default ContactUs;