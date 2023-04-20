import React, { useState } from "react";
import logo from "./../../img/logo.png";
import "./../../App.css";
import { NavLink } from "react-router-dom";

const SingInForm = () => {
  const [login, setLogin] = useState("");
  const handleChangeLogin = (event: any) => {
    setLogin(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="login">Login</div>
      <input
        className="inputLogin"
        value={login}
        type="text"
        onChange={handleChangeLogin}
      />
      <div className="password">Password</div>
      <input
        className="inputPassword"
        value={password}
        type="text"
        onChange={handleChangePassword}
      />
      <NavLink to="/PasswordRecovery">
        <div className="fp">Forgot password?</div>
      </NavLink>
      <NavLink to="/home">
        <div className="button">
          <div className="singIn">Sing In</div>
        </div>
      </NavLink>
    </div>
  );
};
export default SingInForm;
