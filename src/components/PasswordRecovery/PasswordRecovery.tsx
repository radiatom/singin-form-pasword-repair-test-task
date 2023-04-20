import React, { useState } from "react";
import logo from "./../../img/logo.png";
import "./../../App.css";
import { NavLink } from "react-router-dom";

const PasswordRecovery = () => {
  const [number, setNumber] = useState("");
  const handleChangeNumber = (event: any) => {
    setNumber(event.target.value);
  };
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="pr">Password recovery</div>
      <div className="enter">Enter your phone number</div>
      <input
        className="inputPhoneNumber"
        value={number}
        type="text"
        onChange={handleChangeNumber}
      />
      <NavLink to="/singIn">
        <div className="back">back</div>
      </NavLink>
      <NavLink to="/hint">
        <div className="buttonCall">
          <div className="singIn">To call</div>
        </div>
      </NavLink>
    </div>
  );
};
export default PasswordRecovery;
