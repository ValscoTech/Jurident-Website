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
            <b>Case No</b> <br />
            <input
              type="text"
              name="caseno1"
              size="80"
              placeholder="Enter Case Number"
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
            {/* Case Name */}
            <b>Case Name</b>
            <br />
            <input
              type="text"
              name="casename1"
              size="80"
              placeholder="Enter Case Name"
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
            {/* Hearing Date */}
            <b>Hearing Date</b>
            <input
              type="date"
              name="hearingDate1"
              onChange={handleInputChange}
            />{" "}
            <br />
            <br />
            {/* Court Name */}
            <b>Court Name</b>
            <select name="courtName1" onChange={handleInputChange}>
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
            <b>Party Name</b> <br />
            <input
              type="text"
              name="partyname1"
              size="80"
              placeholder="Enter Party Name"
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
            {/* Party Contact Number */}
            <b>Party Contact Number</b>
            <br />
            <input
              type="text"
              name="partycontact1"
              size="80"
              placeholder="Enter Party Contact Number"
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
          </div>

          <div className="firsthalf2 dark:text-white dark:bg-[#433952]">
            <h2>
              {" "}
              <b> Enter Adverse Party Details</b>
            </h2>
            <br></br>
            <b>Adverse Party Name</b> <br />
            <input
              type="text"
              name="adversePartyName"
              size="80"
              placeholder="Enter Adverse Party Name"
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
            <b>Adverse Party Contact Number</b>
            <br />
            <input
              type="text"
              name="adversePartyContact"
              size="80"
              placeholder="Enter Adverse Party Contact Number "
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
            <b>Adverse Party Lawyer Name</b> <br />
            <input
              type="text"
              name="adversePartyLawyerName"
              size="80"
              placeholder="Enter Adverse Party Name "
              onChange={handleInputChange}
            />{" "}
            <br /> <br />
            <b>Adverse Party Lawyer Contact Number</b>
            <br />
            <input
              type="text"
              name="adversePartyLawyerContact"
              size="80"
              placeholder="Enter Adverse Party Lawyer Number "
              onChange={handleInputChange}
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
