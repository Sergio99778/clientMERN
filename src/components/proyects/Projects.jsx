import React from "react";

//Components
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import FormTodo from "../todos/FormTodo";
import ListTodos from "../todos/ListTodos";

const Proyects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTodo />
          <div className="contenedor-tareas">
            <ListTodos />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyects;
