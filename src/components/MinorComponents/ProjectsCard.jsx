const ProjectsCard = ({ title }) => {
  return (
    <div className="projects_card">
      {/* <div className="title">{title}</div> */}

      <div className="img-container">
        <div className="left">
          <h2>Kapa Foods Innovation Ltd</h2>
        </div>
        <div className="right">
          <div className="l">
            <div className="card card1"></div>
            <div className="card card2"></div>
          </div>

          <div className="r">
            <div className="card card3"></div>
            <div className="card card4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
