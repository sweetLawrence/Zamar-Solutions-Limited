import React from "react";
import { imageUrlConstructor } from "../../utils/imageUrl";

const ProjectsCard = ({ title, images, collectionId, id ,caption}) => {
  return (
    <div className="projects_card">
      <div className="company_title">{title}</div>
      <div className="img_cards">
        {images.map((img, index) => (
          <div key={index} className="img_container">
            <img
              src={imageUrlConstructor(collectionId, id, img)}
              alt={`${title} image ${index + 1}`}
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
