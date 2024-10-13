import React from "react";
import "../styles/findus.css";
import FINDUS from "../../assets/images/findus.png";

const FindUs = () => {
  const year = new Date().getFullYear();
  return (
    <div className="find_us">
      <div className="img_holder">
        <img src={FINDUS} alt="Ramco Court Image" />
        <div className="overlay"></div>
      </div>

      <div className="texts_holder">
        <h1>Find US</h1>
        <p className="name">Ramco Court</p>
        <p className="cell">+254 724679202</p>
        <div className="email1">sales@zamarsolutions.co.ke</div>
        <p className="email2">marketing@zamarsolutions.co.ke</p>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7617194270465!2d36.832623773959746!3d-1.3186396986688513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b00247a905%3A0x85c5b6c52fd1433b!2sRamco%20court%2C%20Mombasa%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1727359446425!5m2!1sen!2ske"
          style={{ width: "100%", height: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="cp">
        <p>{year} &copy; Zamar Solutions</p>
      </div>

      {/* <div className="pawtech">Designed and developed by Pawtech Labs</div> */}
    </div>
  );
};

export default FindUs;
