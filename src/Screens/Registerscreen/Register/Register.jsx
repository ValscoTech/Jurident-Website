import React from "react";

import "./Register.css";
import RegistrationForm from "../../../Components/Register/RegistrationForm";
import RegistrationInfo from "../../../Components/Register/RegistrationInfo";


const Register = () => {
  return (
    <div id="main">
     <RegistrationForm/>
     <RegistrationInfo/>
    </div>
  );
};

export default Register;
