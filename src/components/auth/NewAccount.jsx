import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  //State
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate Data
    //Password should have at least 10 caracters
    //Validate that both passwords are equal
    //PassData
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>New Account</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="User name"
              onChange={handleChange}
              value={name}
            />
          </div>
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
              placeholder="Password"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirm password</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              onChange={handleChange}
              value={confirm}
              placeholder="Confirm password"
            />
          </div>
          <div className="campo-form">
            <button type="submit" className="btn btn-primary btn-block">
              New Account
            </button>
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
