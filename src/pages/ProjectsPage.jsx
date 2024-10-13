import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/projects.css";
import Team from "../assets/images/about.jpg";
import { project_titles } from "../Data/navdata";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ProjectsCard from "../components/MinorComponents/ProjectsCard";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(project_titles[0]);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://zamar.pockethost.io/api/collections/Projects/records"
        ); 
        // console.log("Fetched Projects Data:", response.data);
        setProjectsData(response.data.items || []);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = Array.isArray(projectsData)
  ? projectsData.filter((project) => project.category === selectedCategory)
  : [];


  return (
    <div className="projects-page">

      <div className="upper">
        <img className="projects-image" src={Team} alt="people" />
        <div className="the-title">Projects</div>
        <div className="overlay"></div>
      </div>

      <div className="navigation">
        {project_titles.map((item, index) => (
          <div
            key={index}
            className={`row ${selectedCategory === item ? "active" : ""}`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="projects_section">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              images={project.images}
              collectionId={project.collectionId}
              id={project.id}
              caption={project.caption}
            />
          ))
        ) : (
          <p className="no-projects">
            <p className="dec">No project available for this category</p>
            <FolderOpenOutlinedIcon style={{fontSize:"10em",color:"#f57c00"
          }}/></p>
        )}
      </div>

      {/* <div className="more_projects">
        <h4>
    
          See More Projects <span className="r-arr">&rarr;</span>
        </h4>
      </div> */}


    </div>
  );
};

export default ProjectsPage;
