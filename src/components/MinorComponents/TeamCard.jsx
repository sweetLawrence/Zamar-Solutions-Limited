import Button from "../Button";

const TeamCard = ({ person, personName, designation, orderClass }) => {
  return (
    <div className={`team-card ${orderClass}`}>
      <div className={`profile`}>
        <div className="team-dp">{person}</div>
        <div className="name-section">
          <div className="personName">
            {/* <h3>Samuel Rakara</h3> */}
            <h3>{personName}</h3>
          </div>
          <div className="designation">{designation}</div>
          {/* <div className="designation">Founder</div> */}
        </div>
      </div>
      <div className={`content ${orderClass}`}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima
          doloremque neque totam quaerat et obcaecati culpa sed voluptates
          perferendis 
        </p>

        <Button content={"Read More"} />
      </div>
    </div>
  );
};

export default TeamCard;
