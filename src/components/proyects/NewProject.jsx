import React, { Fragment } from "react";

const NewProject = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New project
      </button>

      <form action="" className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project name"
          name="name"
        />
        <button type="submit" className="btn btn-primario btn-block">
          Add project
        </button>
      </form>
    </Fragment>
  );
};

export default NewProject;
