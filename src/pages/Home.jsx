import './styles/home.css'
import LandingPage from '../components/HomeComponents.jsx/LandingPage'
import Values from '../components/HomeComponents.jsx/Values'
import Services from '../components/HomeComponents.jsx/Services'
import Testimonials from '../components/HomeComponents.jsx/Testimonials'

const Home = () => {
  return (
    <div className='home'>
       <LandingPage />
       <Values />
       <Services />
       <Testimonials />
    </div>
  )
}

export default Home