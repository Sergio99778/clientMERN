import React from "react";

//Components
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

const Proyects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <main>
          <Header />
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyects;
