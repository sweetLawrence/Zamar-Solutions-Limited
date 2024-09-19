import React from "react";
import "../styles/findus.css";
import FINDUS from '../../assets/images/findus.png'

const FindUs = () => {
  return (
    <div className="find_us">
      <div className="img_holder">
        <img src={FINDUS} alt="Ramco Court Image" />
        <div className="overlay"></div>
      </div>

      <div className="texts_holder"></div>
    </div>
  );
};

export default FindUs;
