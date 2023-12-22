import React from "react";
import { Link } from "react-router-dom";
import Mode_btn from "../DarkMode_Btn/Mode_btn";
import { FaUserAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex items-center  mr-[10px] ml-[0px]">
      <div className="w-96 ml-4 md:ml-0">
        <h1 className="text-4xl font-semibold text-gray-600 mb-8 md:text-left text-center">
          PROFILE
        </h1>
        <div className="bg-gray-100 dark:bg-transparent rounded-xl border-2 border-orange-300 p-6">
          <div className="flex items-center justify-center">
            <div className="w-36 h-36 border-4 border-orange-300 rounded-full flex items-center justify-center dark:text-white">
              <FaUserAlt className="w-20 h-20" />
              {/* <img src="./Images/profile.svg" alt="profile" className="w-28 h-28"/> */}
            </div>
          </div>
          <hr className="my-6 border-orange-300" />
          <div className="flex text-black font-Poppins flex-col gap-4 dark:text-white">
            <Link to="/" className="text-xl font-semibold">
              Language
            </Link>

            <Link to="/AboutUs" className="text-xl font-semibold">
              Profile
            </Link>

            <Link to="/" className="text-xl font-semibold">
              Notifications
            </Link>

            <Link to="/ChangePassword" className="text-xl font-semibold">
              Password
            </Link>
          </div>
          <hr className="my-6 border-orange-300" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
