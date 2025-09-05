import Brand from "./Brand.jsx";
import headerImg from "../assets/header_img.png"
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }


  return (
    <>
    <header style={{ backgroundImage: `url(${headerImg})` }} className="min-h-screen bg-cover bg-center w-full outfit flex flex-col" id="hero">
      
      <section>
        <nav className="backdrop-blur-3xl h-20 flex flex-row justify-around items-center  rounded-full w-[95%] m-auto">
        <section className="-ml-5">
          <Brand />
        </section>
        <section>
          <ul className=" flex-row m-auto gap-10 text-white text-xl hidden md:flex">
              <li className="hover:opacity-85 cursor-pointer duration-300 active:scale-95 transform transition"><a href="#hero">Home</a></li>
              <li className="hover:opacity-85 cursor-pointer duration-300 active:scale-95 transform transition"><a href="#projects">Projects</a></li>
              <li className="hover:opacity-85 cursor-pointer duration-300 active:scale-95 transform transition"><a href="#testimonials">Testimonials</a></li>
              <li className="hover:opacity-85 cursor-pointer duration-300 active:scale-95 transform transition"><a href="#aboutus">About</a></li>
          </ul>
        </section>
        <section className="hidden md:block">
          <button className="bg-white p-2 rounded-full px-6 hover:opacity-85 active:opacity-100 active:scale-95 cursor-pointer ease-in-out duration-300">Sign Up</button>
        </section>
        <button
          id="hamburgerButton"
          className={`hamburger-btn md:hidden cursor-pointer ${menuOpen ? "toggle-btn" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
        </button>
      </nav>
      {menuOpen && (
        <section
          id="mobileMenu"
          className=" backdrop-blur-xl absolute rounded-3xl w-full text-4xl flex-col justify-center text-white animate-open-menu flex"
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8
            "
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90 mb-6"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#projects"
              className="w-full py-6 text-center hover:opacity-90 mb-6"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="w-full py-6 text-center hover:opacity-90 mb-6"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contactus"
              className="w-full py-6 text-center hover:opacity-90 mb-6"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
            <a
              href="#aboutus"
              className="w-full py-6 text-center hover:opacity-90 mb-6"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <button className="bg-white text-black p-2 rounded-full px-6 hover:opacity-85 active:opacity-100 active:scale-95 cursor-pointer ease-in-out duration-300">Sign Up</button>
          </nav>
        </section>)}
      </section>


      <section className="flex flex-col justify-center items-center gap-6 mt-auto mb-auto">
        <h1 className="text-5xl/[1.5] md:text-7xl text-center text-white font-bold line-">Explore homes that fit your dreams</h1>
        <div className="flex flex-row gap-6 mt-15">
          <button className="p-2 px-6 text-white text-xl bg-none border border-white rounded-2xl hover:opacity-85 active:opacity-100 active:scale-95 cursor-pointer ease-in-out duration-300">Projects</button>
          <button className="p-2 px-6 text-white text-xl bg-blue-400 border-none rounded-2xl hover:opacity-85 active:opacity-100 active:scale-95 cursor-pointer ease-in-out duration-300">Contact Us</button>
        </div>
      </section>
    
    </header>
    </>
          );
}
export default Header;