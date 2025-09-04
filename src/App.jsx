import AboutUs from "./Components/AboutUs.jsx"
import Brand from "./Components/Brand.jsx"
import { Footer } from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
