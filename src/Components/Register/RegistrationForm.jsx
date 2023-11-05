import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithFacebook, signInWithGooglePopup } from "../../utils/firebase.utils";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { firstName, lastName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  let validator = true;


  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const signInWithFB = () => {
    signInWithFacebook();
  };

  return (<>

    <Helmet>

      <title>Registeration</title>
      <meta name="description" content="registration form of Jurident Site" />
    </Helmet>
    <form id="form" className="w-1/3 m-auto gap-8" onSubmit={handleSubmit}>
      <h3 id="login-intro" className="mb-8">Create an account</h3>
      <br />
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
      <div id="seperator" className="mb-4">
        <div className="h-1 w-1/2 bg-black dark:bg-white mt-[12px] mr-[15px]"></div>
        or
        <div className="h-1 w-1/2 bg-black dark:bg-white mt-[12px] ml-[15px]"></div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="pr-2 mb-4 flex-1">
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />

        </div>
        <div className="pl-2 mb-4 flex-1">
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={lastName}
          />

        </div>
      </div>



      <div className="mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={email}
        />

      </div>
      <div className="mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={password}
        />

      </div>
      <div className="mb-4">
        <input
          className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </div>
      <input className="login-btn dark:bg-[#C99F4A] dark:text-black" type="submit" value={"Create Account"} />
      <div id="signup-option">
        Already have an account?{" "}
        <Link to={"/login"} id="login">
          Login
        </Link>
      </div>
    </form>
  </>

  );
};

export default RegistrationForm;