import billboard from '../../assets/images/billboard.png'
import HomeLeftShape from '../../components/HomeLeftShape'
import Button from '../../components/Button'
import '../styles/landingpage.css'

const LandingPage = () => {
    return (
        <div className='landing_page'>
            <div className="billboard_image">
                <img src={billboard} alt="An image of a billboard"/>
            </div>
            <div className="color_overlay">
                {/* gradient color overlay */}
            </div>


            <div className="texts_section">
                <div className="top_text">
                    <div className="upper"> BRINGING YOUR BRAND</div>
                    <div className="lower">To life: <span className="yellow">outdoor</span></div>
                </div>
                <div className="bottom_text">
                    <div className="upper">-Indoor & outdoor branding -Digital Marketing</div>
                    <div className="lower">- Digital screen advertising</div>
                </div>
                <div className="btn"><Button content={"Talk to us"}/></div>
            </div>


            <div className="leftside_shape">
                <HomeLeftShape/>
            </div>
        </div>
    )
}

export default LandingPage
