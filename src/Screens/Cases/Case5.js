// Case5.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Case5.css";
import { setFormData, getFormData } from "../Cases/Case5data";
import Layout from "../Layout";

const Case5 = () => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...getFormData(), [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentFormData = getFormData();
    console.log(currentFormData);
    navigate("/caseview", { state: { formData: currentFormData } });
  };
  return (
    <Layout>
      <div>
        <br></br>
        <h1 className="hhh">
          <b>ADD NEW CASE </b>
        </h1>
        <form onSubmit={handleSubmit} className="text-black form-container ">
          <div className="firsthalf dark:text-white dark:bg-[#433952]">
            <h2>
              {" "}
              <b> Enter the Party Details</b>
            </h2>
            <br></br>
            {/* Case Number */}
            Case No <br />
            <input
              type="text"
              name="caseno1"
              size="80"
              placeholder="Enter Case Number"
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
              />
  
            {" "}
            <br /> <br />
            {/* Case Name */}
           Case Name
            <br />
            <input
              type="text"
              name="casename1"
              size="80"
              placeholder="Enter Case Name"
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
            {/* Hearing Date */}
            Hearing Date
            <input
              type="date"
              name="hearingDate1"
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br />
            <br />
            {/* Court Name */}
           Court Name
            <select name="courtName1" onChange={handleInputChange}
            class="peer h-10 w-50 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" >
              <option value="court0">Select Court Name</option>
              <option value="court1">Select Court Name1</option>
              <option value="court2">Select Court Name2</option>
              <option value="court3">Select Court Name3</option>
              <option value="court4">Select Court Name4</option>
              <option value="court5">Select Court Name5</option>
            </select>{" "}
            <br />
            <br />
            {/* Party Name */}
            Party Name<br />
            <input
              type="text"
              name="partyname1"
              size="80"
              placeholder="Enter Party Name"
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
            {/* Party Contact Number */}
            Party Contact Number
            <br />
            <input
              type="text"
              name="partycontact1"
              size="80"
              placeholder="Enter Party Contact Number"
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
          </div>

          <div className="firsthalf2 dark:text-white dark:bg-[#433952]">
            <h2>
              {" "}
              <b>Enter Adverse Party Details</b>
            </h2>
            <br></br>
            Adverse Party Name<br />
            <input
              type="text"
              name="adversePartyName"
              size="80"
              placeholder="Enter Adverse Party Name"
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
            Adverse Party Contact Number
            <br />
            <input
              type="text"
              name="adversePartyContact"
              size="80"
              placeholder="Enter Adverse Party Contact Number "
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
            Adverse Party Lawyer Name <br />
            <input
              type="text"
              name="adversePartyLawyerName"
              size="80"
              placeholder="Enter Adverse Party Name "
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
            Adverse Party Lawyer Contact Number
            <br />
            <input
              type="text"
              name="adversePartyLawyerContact"
              size="80"
              placeholder="Enter Adverse Party Lawyer Number "
              onChange={handleInputChange}
              class="peer h-9 w-32 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-blue-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" 
            />{" "}
            <br /> <br />
            <button
              type="submit"
              className="custom-button bg-[#C99F4A] text-white m-auto border-2 border-solid border-[#C99F4A]"
            >
              Add Case Note
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Case5;
