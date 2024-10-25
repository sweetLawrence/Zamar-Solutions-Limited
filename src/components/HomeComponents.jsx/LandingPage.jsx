import React from "react";
import Button from "../../components/Button";
import "../styles/landingpage.css";
import Slideshow from "./Slideshow";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigeshen = useNavigate();
  return (
    <div className="landing_page">
      <div className="billboard_image">
        <Slideshow />
        {/* <img src={BillBoard} alt="An image of a billboard" /> */}
      </div>
      <div className="color_overlay">{/* gradient color overlay */}</div>

      <div className="texts_section">
        <div className="top_text">
          <div className="upper"> BRINGING YOUR BRAND</div>
          <div className="lower">
            To life: <span className="yellow">outdoor</span>
          </div>
        </div>
        <div className="bottom_text pc">
          <div className="upper">
            -Indoor & outdoor branding -Digital Marketing
          </div>
          <div className="lower">- Digital screen advertising</div>
        </div>
        <div className="bottom_text mobile">
          <div className="upper">-Indoor & outdoor branding </div>
          <div className="lower">-Digital Marketing</div>
          <div className="lower">-Digital screen advertising</div>
        </div>
        <div className="btn">
          <Button
            content={"Talk to us"}
            onClick={() => navigeshen("/talk-to-us")}
          />
        </div>
      </div>

      <div className="leftside_shape">{/* <HomeLeftShape /> */}</div>
    </div>
  );
};

export default LandingPage;
