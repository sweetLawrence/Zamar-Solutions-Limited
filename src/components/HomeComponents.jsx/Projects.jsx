import React, { useState, useEffect } from "react";
import ProjectsCard from "../MinorComponents/ProjectsCard";
import { project_titles } from "../../Data/navdata";
import axios from 'axios';
import '../styles/projects.css'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(project_titles[0]);
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://zamar.pockethost.io/api/collections/Projects/records'); // Replace with your Pockethost URL
        console.log('Fetched Projects Data:', response.data); 
        setProjectsData(response.data.items || []); 
      } catch (error) {
        console.error('Error fetching projects data:', error);
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
            className={`row ${selectedCategory === item ? 'active' : ''}`} 
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
            />
          ))
        ) : (
          <p>No projects available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
