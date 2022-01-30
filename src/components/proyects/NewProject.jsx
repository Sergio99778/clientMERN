import React, { Fragment, useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate project
    //Add to state
    //Restar form
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New project
      </button>

      <form
        action=""
        className="formulario-nuevo-proyecto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Project name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primario btn-block">
          Add project
        </button>
      </form>
    </Fragment>
  );
};

export default NewProject;
