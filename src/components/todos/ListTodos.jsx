import React, { Fragment } from "react";

//Components
import Todo from "./Todo";

const ListTodos = () => {
  const projectTodos = [
    { name: "Set plataform", state: true },
    { name: "Set plataform", state: true },
    { name: "Set plataform", state: false },
    { name: "Set plataform", state: true },
    { name: "Set plataform", state: false },
  ];

  return (
    <Fragment>
      <h2>Project : Virtual store</h2>
      <ul className="listado-tareas">
        {projectTodos.length === 0 ? (
          <li className="tarea">
            <p>The project doesn't has to-dos</p>
          </li>
        ) : (
          projectTodos.map((todo) => <Todo todo={todo} />)
        )}
      </ul>
      <button className="btn btn-eliminar" type="button">
        Delete project &times;
      </button>
    </Fragment>
  );
};

export default ListTodos;
