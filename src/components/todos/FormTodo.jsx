import React from "react";

const FormTodo = () => {
  return (
    <div className="formulario">
      <form action="">
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="To-do name"
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <button
            type="submit"
            className="btn btn-primary btn-submit btn-block"
          >
            Add to-do
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
