import React from "react";

import "./Login.css";
import LoginForm from "../../../Components/Login/LoginForm";
import LoginInfo from "../../../Components/Login/LoginInfo";
import Layout from "../../Layout";

const Login = () => {
  return (
    <div>
    <div id="main">
      <LoginForm />
      <LoginInfo />
    
      </div>
      <Layout/>
    </div>
  );
};

export default Login;
