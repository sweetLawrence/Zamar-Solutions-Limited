import React from "react";
import '../styles/projects.css'
import ProjectsCard from "../MinorComponents/ProjectsCard";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="title_section">Some of Our Projects</h2>

      <div className="projects_section">
        <ProjectsCard title = "Kapa Foods Innovation Ltd" url={"Hello"}/>
        {/* <ProjectsCard title = "Kapa Foods Innovation Ltd" url={"Hello"}/> */}
      </div>
    </div>
  );
};

export default Projects;
