import React, { useState } from "react";
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Layout from "../../Screens/Layout";

const Details = () => {
  const [value, setValue] = useState(null);
  const options = [
    {
      value: "1",
      label: "B.Sc.LL.B",
    },
    {
      value: 2,
      label: "BBA.LLB",
    },
    {
      value: 3,
      label: "B.Com.LL.B",
    },
    {
      value: 4,
      label: "B.A.LL.B",
    },
    {
      value: 5,
      label: "Other",
    },
  ];

  return (
    <Layout className="xl:mx-[260px] text-black mx-[25px] ">
      <div className=" flex flex-col xl:flex-row md:flex-row justify-center pt-6 ">
        <Profile />
        <div className="xl:w-[650px] ml-5 xl:h-[700px] w-[380px] h-[800px] mr-[15px] xl:mr-[0px] bg-slate-100 mt-[90px] rounded-xl border-2 border-orange-300 dark:bg-transparent ">
          <h1 className="text-black font-bold text-xl ml-[40px] mt-[12px] dark:text-white">
            Profile {">"} Home
          </h1>
          <div className=" text-black xl:w-[570px] xl:h-[610px] w-[310px] h-[710px] ml-[40px] text-sm ">
            <div className="w-full h-[100px] mt-[20px] dark:text-[#CFA95E]">
              <h1>LAWYER NAME</h1>
              <input
                className=" w-full h-[40px]  rounded-xl border-solid border-orange-300 border-2 outline-none pl-[20px] dark:bg-transparent"
                placeholder="Name"
              ></input>
              <h1>Hint</h1>
            </div>
            <div className="w-full h-[100px] dark:text-[#CFA95E]">
              <h1>LAWYER ID</h1>
              <input
                className=" w-full h-[40px]  rounded-xl border-solid border-orange-300 border-2 outline-none pl-[20px] dark:bg-transparent"
                placeholder="id"
              ></input>
              <h1>Hint</h1>
            </div>
            <div className="w-full h-[100px]  dark:text-[#CFA95E]">
              <h1>LAWYER DEGREE</h1>
              <div>
                <Select
                  placeholder="select degree..."
                  options={options}
                  onChange={setValue}
                  isSearchable
                  style={{
                    borderColor: "orange",
                    borderRadius: "6px",
                    borderWidth: "1px",
                    background: "white",
                    fontSize: "16px",
                    paddingLeft: "20px",
                  }}
                  color="orange"
                  className="bg-white dark:bg-transparent"
                />
              </div>
              <h1>Hint</h1>
            </div>
            <div className="w-full h-[100px] dark:text-[#CFA95E]">
              <h1>EMAIL</h1>
              <input
                className=" w-full h-[40px]  rounded-xl border-solid border-orange-300 border-2 outline-none pl-[20px] dark:bg-transparent"
                placeholder="email"
              ></input>
              <h1>Hint</h1>
            </div>
            <div className="w-full h-[100px] dark:text-[#CFA95E]">
              <h1>PHONE NUMBER</h1>
              <input
                className=" w-full h-[40px]  rounded-xl border-solid border-orange-300 border-2 outline-none pl-[20px] dark:bg-transparent"
                placeholder="phone"
              ></input>
              <h1>Hint</h1>
            </div>

            <div>
              <div className="xl:mt-[0px] mt-[50px] w-[150px] h-[50px] xl:ml-[200px] ml-[60px] border-solid rounded-3xl border-2 border-orange-500 hover:bg-orange-200 font-semibold">
                <Link to="/profile">
                  <button className=" w-full h-full dark:text-white">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className="xl:mt-[15px] mt-[20px] w-[200px]  xl:ml-[175px] ml-[40px] h-[50px]">
                <Link to="/ChangePassword">
                  <button className=" w-full h-full  border-2 border-solid rounded-3xl border-orange-500 hover:bg-orange-200 font-semibold dark:text-white">
                    Change Passsword
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
