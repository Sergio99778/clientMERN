import React from "react";

//Components
import NewProject from "../proyects/NewProject";
import ProjectsList from "../proyects/ProjectsList";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN <span>Tasks</span>
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Your projects</h2>
        <ProjectsList></ProjectsList>
      </div>
    </aside>
  );
};

export default Sidebar;
