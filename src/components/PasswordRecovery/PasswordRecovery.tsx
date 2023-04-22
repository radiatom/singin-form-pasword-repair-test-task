import React, { useState } from "react";
import logo from "./../../img/logo.png";
import "./../../App.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { acountExists, setPhone } from "../../redux/reducer";
import { accountExistsDataSelector } from "../../selectors/selectors";

const PasswordRecovery = () => {
  const accountExists = useSelector(accountExistsDataSelector);
  const [erorr, setErorr] = useState(accountExists);

  const [number, setNumber] = useState("");
  
  const handleChangeNumber = (event: any) => {
    setNumber(event.target.value);
    setErorr(false)
  };
  const dispatch = useDispatch();
  const click = () => {
    //@ts-ignore
    dispatch(acountExists(number));
  };
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="pr">Password recovery</div>
      <div className="enter">Enter your phone number</div>
      <input
        className={erorr===true?'inputErorr':'input'}
        value={number}
        type="text"
        onChange={handleChangeNumber}
      />
      <NavLink className='navLink' to="/singIn" >
        <div className="back">back</div>
      </NavLink>
      <NavLink className='navLink' to="/hint" >
        <div className="button" onClick={click}>
          <div className="singIn">To call</div>
        </div>
      </NavLink>
    </div>
  );
};
export default PasswordRecovery;
