  import React, { useState } from "react";
  import Button from "../Button";
import Spinner from "./Spinner";

  const TeamCard = ({ person, personName, designation, orderClass, profileContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openStory = () => {
      setIsModalOpen(true);
    };

    const closeStory = () => {
      setIsModalOpen(false);
    };

    const isMobileDevice = () => {
      return window.innerWidth < 768; 
    };


    const truncateContent = (content) => {
      
      if (typeof content === "string") {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;
  
        const words = tempDiv.innerText.split(" ");
        const wordLimit = isMobileDevice() ? 19 : 30;

  
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : tempDiv.innerHTML;
      }
      
      return <Spinner />;
    };

    return (
      <div className={`team-card ${orderClass}`}>
        <div className={`profile`}>
          <div className="team-dp">{person}</div>
          <div className="name-section">
            <div className="personName">
              <h3>{personName}</h3>
            </div>
            <div className="designation">{designation}</div>
          </div>
        </div>
        <div className={`content ${orderClass}`}>

          <p>
          {profileContent ? truncateContent(profileContent) : "Loading..."}
        </p>

          <Button content={"Read More"} onClick={openStory} />
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeStory}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{personName}</h3>
                <button className="close-icon" onClick={closeStory}>
                  ✖
                </button>
              </div>
              <div className="modal-body">
                <div className="team-dp modal-dp">{person}</div>
                <div className="designation modal-designation">{designation}</div>
                <div className="profile-content" dangerouslySetInnerHTML={{ __html: profileContent || <Spinner /> }} />
                
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default TeamCard;
