import React from "react";

import "./Register.css";
import RegistrationForm from "../../../Components/Register/RegistrationForm";
import RegistrationInfo from "../../../Components/Register/RegistrationInfo";
import Layout from "../../Layout";

const Register = () => {
  return (
    <div>
      <div id="main">
        <RegistrationForm />
        <RegistrationInfo />
      </div>
      <Layout />
    </div>
  );
};

export default Register;
