import './styles/home.css'
import LandingPage from '../components/HomeComponents.jsx/LandingPage'
import Values from '../components/HomeComponents.jsx/Values'
import Services from '../components/HomeComponents.jsx/Services'
import Testimonials from '../components/HomeComponents.jsx/Testimonials'
import Projects from '../components/HomeComponents.jsx/Projects'
import FindUs from '../components/HomeComponents.jsx/FindUs'
import Clients from '../components/HomeComponents.jsx/Clients'

const Home = () => {
  return (
    <div className='home'>
       <LandingPage />
       <Values />
       <Services />
       <Testimonials />
       <Projects />
       <Clients />
       <FindUs />
    </div>
  )
}

export default Home