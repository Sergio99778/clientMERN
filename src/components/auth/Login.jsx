import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //State
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate Data
    //PassData
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@gmail.com"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </form>
        <Link to="/new-account" className="enlace-cuenta">
          Create account
        </Link>
      </div>
    </div>
  );
};

export default Login;
