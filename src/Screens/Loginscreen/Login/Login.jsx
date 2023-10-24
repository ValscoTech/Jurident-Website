import React from "react";

import "./Login.css";
import LoginForm from "../../../Components/Login/LoginForm";
import LoginInfo from "../../../Components/Login/LoginInfo";

const Login = () => {
  return (
    <div id="main">
      <LoginForm />
      <LoginInfo />
    </div>
  );
};

export default Login;
