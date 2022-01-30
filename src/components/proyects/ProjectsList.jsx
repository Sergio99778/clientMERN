import React from "react";

//Components
import Project from "./Project";

const ProjectsList = () => {
  const projects = [
    { name: "judas" },
    { name: "judas" },
    { name: "judas" },
    { name: "judas" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
