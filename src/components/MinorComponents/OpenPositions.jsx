

import React, { useState } from "react";
import Button from "../Button";

const OpenPositions = ({ title, deadline, roles, qualifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate.replace(/ /g, " ");
  };

  return (
    <div className="open-positions-card">
      <div className="upper">
        <div className="postion-title">{title}</div>
        <div className="deadline">Deadline: {formatDate(deadline)}</div>
      </div>
      <div className="lower">
        {isOpen && (
          <div className="accordion-content">
            <h3>Roles</h3>
            <ul>
              {roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
            <h3>Qualifications</h3>
            <ul>
              {qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        )}
        <Button
          content={isOpen ? "Show Less" : "Show More"}
          onClick={toggleAccordion}
        />
      </div>
    </div>
  );
};

export default OpenPositions;
