import React from "react";
import Layout from "../../Screens/Layout";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <Layout className="xl:mx-[260px] text-black mx-[25px] ">
      <div className="flex flex-col justify-center xl:flex-row md:flex-row mt-6">
        <Profile />
        <div className="xl:w-[650px] ml-5 xl:h-[700px] w-[380px] h-[800px] mr-[15px] xl:mr-[0px] bg-slate-100 dark:bg-transparent mt-[90px] rounded-xl border-2 border-orange-300 ">
          <h1 className="font-bold text-xl xl:text-xl ml-4 mt-4">About Us</h1>
          <div className="mt-4 ml-4 mr-6  dark:text-white">
            <div>
              <h1 className="font-semibold text-xl xl:text-xl text-[#CFA95E]">
                Name
              </h1>
              <div className="mt-2">
                <p>lorem</p>
              </div>
            </div>
            <div className="mt-6 dark:text-white">
              <h1 className="font-semibold text-xl xl:text-xl text-[#CFA95E]">
                Lawyer Id
              </h1>
              <div className="mt-2 flex flex-col gap-4">
                <p>1223267215xx</p>
              </div>
            </div>
            <div className="mt-6 dark:text-white">
              <h1 className="font-semibold text-xl xl:text-xl text-[#CFA95E]">
                Degree
              </h1>
              <div className="mt-2 flex flex-col gap-4">
                <p>llb</p>
              </div>
            </div>
            <div className="mt-6 dark:text-white">
              <h1 className="font-semibold text-xl xl:text-xl text-[#CFA95E]">
                Email id
              </h1>
              <div className="mt-2 flex flex-col gap-4 dark:text-white">
                <p>jurdie@gmail.com</p>
              </div>
            </div>
            <div className="mt-6 dark:text-white">
              <h1 className="font-semibold text-xl xl:text-xl text-[#CFA95E]">
                Phone No
              </h1>
              <div className="mt-2 flex flex-col gap-4">
                <p>823723727</p>
              </div>
            </div>
          </div>
          <div className="m-7 max-w-[165px] border-2 rounded-3xl border-orange-500 hover:bg-orange-200 font-semibold">
            <button
              className="text-black w-full h-full"
              onClick={() => navigate("/profile")}
            >
              <span className="p-2 dark:text-white">Go To Profile</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
