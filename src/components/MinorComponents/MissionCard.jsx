import React from "react";

const MissionCard = ({
  img,
  title,
  contentType,
  inline_content,
  list_content,
}) => {
  return (
    <div className="mission-v-card">
      <div className="title_section">
        <div className="index">{img}</div>
        <div className="title">{title}</div>
      </div>
      <div className="content_area">
        {!(contentType === "list") ? (
          <div className="inline_content">{inline_content}</div>
        ) : (
          <div className="list_content">
            {list_content.map((item, index) => {
              return (
                <ul>
                  <li key={index}>{item}</li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionCard;
