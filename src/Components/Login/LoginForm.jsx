import React from "react";
// import { userSchema } from "../../Screens/Loginscreen/validations/LoginValidation";
import { Link } from "react-router-dom";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithFacebook,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const signInWithFB = () => {
    signInWithFacebook();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Jurident Login Page" />
      </Helmet>

      <form id="form" className="w-1/3 m-auto gap-8" onSubmit={handleSubmit}>
        <h3 id="login-intro" className="mb-8">Log into your account</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            for="email"
          >
            Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="johndoe@gmail.com"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            for="password"
          >
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="* * * * *"
            onChange={handleChange}
            name="password"
            value={password}
          />

          <div id="rememberMe">
            <input
              className="border rounded"
              type="checkbox"
              id="rememberMe"
            />
            <div id="rememberText">
              <p id="rememberMain">Remember Me</p>
              <p id="rememberSub">Save my login details for next time</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <input
            className="login-btn dark:bg-[#C99F4A] dark:text-black"
            type="submit"
            value={"Log In"}
          />
        </div>
        <div id="seperator">
          <div className="h-1 w-1/2 bg-black dark:bg-white mt-[12px] mr-[15px]"></div>
          or
          <div className="h-1 w-1/2 bg-black dark:bg-white mt-[12px] ml-[15px]"></div>
        </div>
        <div id="signup-option">
          Don't have an account?{" "}
          <Link to={"/register"} id="signup">
            Sign Up
          </Link>
        </div>
        <button
          className="googleLog bg-slate-50 dark:text-black flex items-center justify-center gap-3"
          onClick={signInWithGoogle}
        >
          <FcGoogle /> <span>Continue with Google</span>
        </button>
        <button
          className="facebookLog flex items-center justify-center gap-3"
          onClick={signInWithFB}
        >
          <RiFacebookCircleFill />
          <span>Continue with Facebook</span>
        </button>
      </form>
    </>
  );
};

export default LoginForm;
