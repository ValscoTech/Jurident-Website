import React from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import Layout from "../../Screens/Layout";

const ChangePassword = () => {
  return (
    <Layout className="md:mx-[260px] text-black mx-[25px]">
      <div className="flex flex-col justify-center md:flex-row mt-6">
        <Profile />
        <div className="p-4 md:w-[650px] ml-5 md:h-[700px] w-[380px] h-[800px] mr-[15px] md:mr-[0px] bg-slate-100  dark:bg-transparent mt-[90px] rounded-xl border-2 border-orange-300 ">
          <h1 className="font-bold text-black text-lg mt-[12px] dark:text-white">
            Home {" > "} Change Password
          </h1>
          <p className="text-gray-600 mt-[10px]">
            Please note changing your password will require you to log in again.
          </p>
          <form className="mt-[30px] text-black space-y-6">
            <div className="w-full dark:text-[#CFA95E]">
              <label htmlFor="currentPassword" className="block">
                Current Password
              </label>
              <input
                id="currentPassword"
                className="w-full dark:text-[#CFA95E] dark:bg-transparent h-[40px] rounded-lg border-2 border-orange-300 outline-none pl-[10px]"
                placeholder="Enter current password"
                type="password"
              />
              <h1>Hint</h1>
            </div>
            <div className="w-full dark:text-[#CFA95E] ">
              <label htmlFor="newPassword" className="block">
                New Password
              </label>
              <input
                id="newPassword"
                className="w-full dark:text-[#CFA95E] dark:bg-transparent h-[40px] rounded-lg border-2 border-orange-300 outline-none pl-[10px]"
                placeholder="Enter new password"
                type="password"
              />
              <h1>Hint</h1>
            </div>
            <div className="w-full dark:text-[#CFA95E]">
              <label htmlFor="confirmPassword" className="block">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                className="w-full dark:text-[#CFA95E] h-[40px] dark:bg-transparent rounded-lg border-2 border-orange-300 outline-none pl-[10px]"
                placeholder="Confirm new password"
                type="password"
              />
              <h1>Hint</h1>
            </div>
            <div className="flex space-x-4">
              <button className="rounded-3xl border-2 border-orange-500  hover:bg-orange-200 font-semibold mt-[20px] dark:text-white">
                <span className="p-4">Edit Profile</span>
              </button>
              <button className="rounded-3xl border-2 border-orange-500  hover:bg-orange-200 font-semibold mt-[20px] dark:text-white">
                <span className="p-4">Save Changes</span>
              </button>
              <button className="rounded-3xl border-2 border-orange-500  hover:bg-orange-200 font-semibold mt-[20px] dark:text-white">
                <span className="p-4">Discard Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
