import React from "react";
import "./styles/careers.css";
import Office from "../assets/images/office.jpeg";
import OpenPositions from "../components/MinorComponents/OpenPositions";

const Careers = () => {
  return (
    <div className="careers">
      <div className="upper-section">
        <div className="bg_image">
          <img src={Office} alt="An Office Imafe" />
        </div>
        <div className="overlay"></div>
        <div className="text-area">
            <h1 className="heading">Careers</h1>
            <div className="s-text">We are always looking to grow with talent whenever possible</div>
        </div>
      </div>
      <div className="lower-section">
        <div className="statement">Zamar Solutions is an equal opportunity employer and selects candidates on merit through fair and open competition from widest range of eligible candidates.</div>
        <div className="title">
            <h2>How to Apply </h2>
            <div className="application-instructions">
              <p className="instruction">-All the applications should be addressed to the <span style={{color:"#18d95f"}}>Human Resource, Zamar Solutions, PO Box 00-0000, Ramco</span> </p>
              <p className="instruction">-Applications should reach the office before or on the specified deadline.(Physical copy)</p>
              <p className="instruction">-Include a copy of all relevant documents like:</p>
              <ul className="requirements">
                <li>National ID</li>
                <li>Valid certificate of good conduct</li>
                <li>Tax compliance certificate</li>
              </ul>
            </div>
        </div>

        <div className="title positions">
          <h2>Open Positions</h2>

          <div className="open-positions">
            <OpenPositions />
            <OpenPositions />
            <OpenPositions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
