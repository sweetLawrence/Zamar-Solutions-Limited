import ServicesCard from '../MinorComponents/ServicesCard'
import '../styles/services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className="title"><h1>Our Services</h1></div>
        <div className="cards_section">
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
        </div>
    </div>
  )
}

export default Services