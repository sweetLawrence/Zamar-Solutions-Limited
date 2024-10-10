// import Button from "../Button";

// const OpenPositions = () => {
//   return (
//     <div className="open-positions-card">
//       <div className="upper">
//         <div className="postion-title">Accounts Clerk</div>
//         <div className="deadline">Deadline: Mon 19, Aug 2024</div>
//       </div>
//       <div className="lower">
//         <Button content={'Show More'}/>
//       </div>
//     </div>
//   );
// };

// export default OpenPositions;

import Button from "../Button";
import React, { useState } from "react";

const OpenPositions = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the open/close state
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="open-positions-card">
      <div className="upper">
        <div className="postion-title">Accounts Clerk</div>
        <div className="deadline">Deadline: Mon 19, Aug 2024</div>
      </div>
      <div className="lower">
        {/* Accordion Content */}
        {isOpen && (
          <div className="accordion-content">
            <h3>Roles</h3>
            <ul>
              <li>
                Support day-to-day operations and assist in ongoing projects
                within the engineering department.
              </li>
              <li>
                Participate in technical problem-solving and project development
                activities.
              </li>
            </ul>
            <h3>Qualifications</h3>
            <ul>
              <li>
                Degree in Mechanical Engineering (Production) from a recognized
                institution OR Diploma in Mechanical
              </li>
              <li>Commitment to full training under management terms.</li>
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
