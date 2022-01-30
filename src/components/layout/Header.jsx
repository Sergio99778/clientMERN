import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        <span>User name</span>
      </p>

      <nav className="nav-principal">
        <a href="#!">Sign out</a>
      </nav>
    </header>
  );
};

export default Header;
