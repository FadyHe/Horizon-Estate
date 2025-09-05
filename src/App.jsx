import AboutUs from "./Components/AboutUs.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import Projects from "./Components/Projects.jsx"
import Testimonial from "./Components/Testimonials.jsx";
import ContactUs from "./Components/ContactUs.jsx";

function App() {



  return (
      <>
    <div className="flex flex-col min-h-screen">
      <Header />
        <main className="flex-grow overflow-y-auto">
        <AboutUs />
        <Projects />
        <Testimonial />
        <ContactUs />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
