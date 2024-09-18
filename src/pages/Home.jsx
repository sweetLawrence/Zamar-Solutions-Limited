import './styles/home.css'
import LandingPage from '../components/HomeComponents.jsx/LandingPage'
import Values from '../components/HomeComponents.jsx/Values'
import Services from '../components/HomeComponents.jsx/Services'
import Testimonials from '../components/HomeComponents.jsx/Testimonials'
import Projects from '../components/HomeComponents.jsx/Projects'

const Home = () => {
  return (
    <div className='home'>
       <LandingPage />
       <Values />
       <Services />
       <Testimonials />
       <Projects />
    </div>
  )
}

export default Home