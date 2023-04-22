import React, { useState } from "react";
import logo from "./../../img/logo.png";
import "./../../App.css";
import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { accountExistsDataSelector } from "../../selectors/selectors";

const Hint = () => {
  const accountExists = useSelector(accountExistsDataSelector);
  if (accountExists === false) {
    return (
      <div>
        <img className="logo" src={logo} alt="logo" />
        <div className="password">Password: 1234</div>
        <div className="buttonCall">
          <NavLink className='navLink' to="/singIn">
            <div className="singIn">Ok</div>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/PasswordRecovery" />;
  }
};
export default Hint;
