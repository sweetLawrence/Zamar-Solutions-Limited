import React, { useState, useEffect } from "react";
import ProjectsCard from "../MinorComponents/ProjectsCard";
import { project_titles } from "../../Data/navdata";
import axios from "axios";
import "../styles/projects.css";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(project_titles[0]);
  const [projectsData, setProjectsData] = useState([]);
  const navigeshen = useNavigate();

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
    <div className="projects">
      <h2 className="title_section">Some of Our Projects</h2>

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
              // images={project.images}
              images={project.images.slice(0, 4)}
              collectionId={project.collectionId}
              id={project.id}
              caption={project.caption}
            />
          ))
        ) : (
          <p className="no-projects">
            <p className="dec">No project available for this category</p>
            <FolderOpenOutlinedIcon
              style={{ fontSize: "10em", color: "#f57c00" }}
            />
          </p>
        )}
      </div>

      <div className="more_projects" onClick={() => navigeshen("/projects")}>
        <h4>
          See More Projects <span className="r-arr">&rarr;</span>
        </h4>
      </div>
    </div>
  );
};

export default Projects;
