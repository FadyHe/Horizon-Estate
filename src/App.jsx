import AboutUs from "./Components/AboutUs.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import Projects from "./Components/Projects.jsx"
import Testimonial from "./Components/Testimonials.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {



  return (
      <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutUs />
        <Projects />
        <Testimonial />
      </main>
      <Footer />
    </div>
    <Router> 
      <Routes>

      </Routes>
    </Router>
    </>
  )
}

export default App
