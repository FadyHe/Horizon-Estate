import AboutUs from "./Components/AboutUs.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import Projects from "./Components/Projects.jsx"
import 'flowbite';


function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutUs />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
