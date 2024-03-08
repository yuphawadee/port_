import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {


  return (
    <div>
      <Navbar />
      <div>
        <div id="hero-section">
          <Hero />
        </div>
        <div id="about-section">
          <About />
        </div>
        {/* <div id="skill-section">
        <Skill />
      </div> */}
        <div id="work-section">
          <Work />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
