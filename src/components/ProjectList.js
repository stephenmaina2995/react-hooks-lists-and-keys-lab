import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  render() {
    console.log(this.props.projects);
  
    const myProjects = this.props.projects.map((project) => {
      return (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      );
    });

    return (
      <div id="projects">
        <h2>My Projects</h2>
        <div id="project-list">{myProjects}</div>
      </div>
    );
  }
}

export default ProjectList;
