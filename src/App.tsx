import React, { useState } from "react";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  // const [login, setLogin] = useState("");
  // const handleChangeLogin = (event: any) => {
  //   setLogin(event.target.value);
  // };
  // const [password, setPassword] = useState("");
  // const handleChangePassword = (event: any) => {
  //   setPassword(event.target.value);
  // };
  const [number, setNumber] = useState("");
  const handleChangeNumber = (event: any) => {
    setNumber(event.target.value);
  };
  return (
    <div className="App">
      <div className="body">
        <div className="container">
          {/* <div>
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
          </div> */}

          {/* <div>
            <img className="logo" src={logo} alt="logo" />
            <div className="pr">Password recovery</div>
            <div className="enter">Enter your phone number</div>
            <input
              className="inputPhoneNumber"
              value={number}
              type="text"
              onChange={handleChangeNumber}
            />
            <div className="back">back</div>
            <div className="buttonCall">
              <div className="singIn">To call</div>
            </div>
          </div> */}
          <div>
            <img className="logo" src={logo} alt="logo" />
            <div className="password">Password: 1234</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
