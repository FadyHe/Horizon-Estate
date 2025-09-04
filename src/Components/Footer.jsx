import Brand from "./Brand.jsx"
export function Footer () {
  return(
    <>
      <footer className=" bg-gray-900 flex flex-col justify-start gap-3 outfit p-4 m-auto w-full ">
        <div className="flex flex-col justify-start gap-3 sm:gap-30 sm:flex sm:flex-row sm:justify-between sm:items-start w-full">
          <section className="mb-5">
            <Brand />
            <p className="text-gray-500 outfit -mt-3 ml-5 text-xl ">Horizon Estates – Building Dreams, Creating Futures.</p>
          </section>

          <section className="ml-5 my-5">
            <h1 className="outfit text-3xl text-white -ml-2 sm:text-3xl mb-3">Company</h1>
            <ul className="text-gray-500 outfit text-xl gap-y-1.5 flex flex-col ">
            
            
              <li className="hover:opacity-85 cursor-pointer active:scale-97 duration-300"><a href="">Home</a></li>
              <li className="hover:opacity-85 cursor-pointer active:scale-97 duration-300"><a href="">About Us</a></li>
              <li className="hover:opacity-85 cursor-pointer active:scale-97 duration-300"><a href="">Contact Us</a></li>
              <li className="hover:opacity-85 cursor-pointer active:scale-97 duration-300"><a href="">Privacy Policy</a></li>
            
            
            </ul>
          </section>

          <section className="ml-5 my-5">
            <h1 className="outfit text-3xl text-white -ml-2 sm:text-3xl mb-3">Subscribe to our newsletter</h1>
            <p className="text-gray-500 outfit text-xl mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <label htmlFor="email" className="flex flex-row gap-2">
              <input type="email" name="email" id="email" required placeholder="example@mail.com" className="w-full bg-gray-600 h-10 text-white p-3 rounded-[5px] focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"/>

              <button type="submit" className="mr-5 bg-blue-500 p-2 text-white rounded-[5px] hover:opacity-85 active:opacity-100 cursor-pointer ease-in-out duration-300">Subscribe</button>
            </label>
          </section>
        </div>
        
        <hr className="w-[80%] text-gray-400 m-auto "/>
        <p className="text-gray-500 outfit text-center mb-3">© {new Date().getFullYear()} Horizon Estates. All rights reserved.</p>
      </footer>
    </>
  )
}