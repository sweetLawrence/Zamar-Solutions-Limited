import './styles/home.css'
import LandingPage from '../components/HomeComponents.jsx/LandingPage'
import Values from '../components/HomeComponents.jsx/Values'
import Services from '../components/HomeComponents.jsx/Services'

const Home = () => {
  return (
    <div className='home'>
       <LandingPage />
       <Values />
       <Services />
    </div>
  )
}

export default Home