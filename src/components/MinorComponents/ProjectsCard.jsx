import React from "react";

const ProjectsCard = ({ title, images }) => {
  return (
    <div className="projects_card">
        <div className="company_title">{title}</div>
        <div className="img_cards">
          {images.map((img, index) => (
            <div key={index} className="img_container">
              {/* <img src={img} alt={`${title} image ${index + 1}`} /> */}
            </div>
          ))}
       
      </div>
    </div>
  );
};

export default ProjectsCard;
