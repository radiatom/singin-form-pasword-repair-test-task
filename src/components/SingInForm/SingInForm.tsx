import React, { useState } from "react";
import logo from "./../../img/logo.png";
import "./../../App.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../../redux/reducer";
import {
  incorectAuthDataSelector,
  phoneDataSelector,
} from "../../selectors/selectors";

const SingInForm = () => {
  const phone = useSelector(phoneDataSelector);
  const [login, setLogin] = useState(phone);
  const handleChangeLogin = (event: any) => {
    setLogin(event.target.value);
    setErorr(false);
  };
  const [password, setPassword] = useState('');
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
    setErorr(false);
  };
  const dispatch = useDispatch();
  const incorectAuth = useSelector(incorectAuthDataSelector);
  const [erorr, setErorr] = useState(incorectAuth);
  const click = () => {
    //@ts-ignore
    dispatch(isAuth(login, password));
  };

  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <div className="login">Login</div>
      <input
        className={erorr === false ? "input" : "inputErorr"}
        value={login}
        type="text"
        onChange={handleChangeLogin}
      />
      <div className="password">Password</div>
      <input
        className={erorr === false ? "input" : "inputErorr"}
        value={password}
        type="text"
        onChange={handleChangePassword}
      />
      <NavLink to="/PasswordRecovery">
        <div className="fp">Forgot password?</div>
      </NavLink>
      <NavLink to="/home">
        <div className="button" onClick={click}>
          <div className="singIn">Sing In</div>
        </div>
      </NavLink>
    </div>
  );
};
export default SingInForm;
