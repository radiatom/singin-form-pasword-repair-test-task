import React, { useState } from "react";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  const [login, setLogin] = useState("");
  const handleChangeLogin = (event: any) => {
    setLogin(event.target.value);
  };
  const [password, setpassword] = useState("");
  const handleChangePassword = (event: any) => {
    setpassword(event.target.value);
  };
  return (
    <div className="App">
      <div className="body">
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
        <div className="fp">Forgot password?</div>
        <div className="button">
          <div className="singIn">Sing In</div>
        </div>
      </div>
    </div>
  );
}

export default App;
