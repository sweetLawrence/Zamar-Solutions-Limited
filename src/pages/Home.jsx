import './styles/home.css'
import LandingPage from '../components/HomeComponents.jsx/LandingPage'
import Values from '../components/HomeComponents.jsx/Values'

const Home = () => {
  return (
    <div className='home'>
       <LandingPage />
       <Values />
    </div>
  )
}

export default Home