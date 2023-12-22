import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 ml-8 md:ml-0">
        <h1 className="text-4xl font-semibold text-gray-600 mb-8 md:text-left text-center">
          PROFILE
        </h1>
        <div className="bg-gray-100 rounded-xl border-2 border-orange-300 p-6">
          <div className="flex items-center justify-center">
            <div className="w-36 h-36 border-4 border-orange-300 rounded-full flex items-center justify-center">
              <img
                src="./Images/profile.svg"
                alt="profile"
                className="w-28 h-28"
              />
            </div>
          </div>
          <hr className="my-6 border-orange-300" />
          <div className="flex font-Poppins flex-col gap-4">
            <Link to="/" className="text-xl font-semibold">
              Language
            </Link>
            <Link to="/TermsAndCondition" className="text-xl font-semibold">
              Terms And Conditions
            </Link>
            <Link to="/AboutUs" className="text-xl font-semibold">
              About Us
            </Link>
            <div className="justify-between">
              <Link to="/" className="text-xl font-semibold">
                Dark Mode
              </Link>
            </div>

            <Link to="/" className="text-xl font-semibold">
              Notifications
            </Link>
            <Link to="/" className="text-xl font-semibold">
              Contact Us
            </Link>
            <Link to="/" className="text-xl font-semibold">
              Support Chat
            </Link>
            <Link to="/" className="text-xl font-semibold">
              Super Chat
            </Link>
            <Link to="/" className="text-xl font-semibold">
              FAQ
            </Link>
            <Link to="/" className="text-xl font-semibold">
              Feedback Page
            </Link>
          </div>
          <hr className="my-6 border-orange-300" />
          <div className="flex justify-center">
            <button className="w-full md:w-80 h-12 bg-orange-400 rounded-lg font-semibold hover:bg-orange-300 text-white">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
