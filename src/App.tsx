import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./img/logo.png";
import SingInForm from "./components/SingInForm/SingInForm";
import Hint from "./components/Hint/Hint";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function  App  (props:any) {
  useEffect(() => {
    alert("login:0501234567; password:1234");
  }, [props]);

  return (
    <div className="App">
      <div className="body">
        <div className="container">
          <Routes>
            <Route path="/*" element={<SingInForm />} />
            <Route path="/singIn/*" element={<SingInForm />} />
            <Route path="/PasswordRecovery/*" element={<PasswordRecovery />} />
            <Route path="/hint/*" element={<Hint />} />
            <Route path="/home/*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
