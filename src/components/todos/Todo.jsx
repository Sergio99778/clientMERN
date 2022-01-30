import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="tarea sombra">
      <p>{todo.name}</p>
      <div className="estado">
        {todo.state ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button className="btn btn-primario" type="button">
          Edit
        </button>
        <button className="btn btn-secundario" type="button">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
