import React, { useState } from "react";
import logo from "./../../img/logo.png";
import "./../../App.css";
import { NavLink } from "react-router-dom";

const Hint = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="password">Password: 1234</div>
      <div className="buttonCall">
        <NavLink to="/singIn">
          <div className="singIn">Ok</div>
        </NavLink>
      </div>
    </div>
  );
};
export default Hint;
