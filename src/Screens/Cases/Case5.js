// Case5.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Case5.css';
import { setFormData, getFormData } from '../Cases/Case5data';

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
    navigate('/caseview', { state: { formData: currentFormData } });
  };
  return ( 
    <div> 
      <div className="form-container form1-container"> 
        <form onSubmit={handleSubmit}>
          <h2>Add a new case</h2>
          <h3>Enter the Party Details</h3> 
          {/* Case Number */}
          <b>Case No</b> <br />
          <input type="text" name="caseno1" size="80" placeholder="Enter Case Number" onChange={handleInputChange} /> <br /> <br /> 
          {/* Case Name */}
          <b>Case Name</b><br />
          <input type="text" name="casename1" size="80" placeholder="Enter Case Name" onChange={handleInputChange} /> <br /> <br />
          {/* Hearing Date */}
          <b>Hearing Date</b><br /> <br />
          <input type="date" name="hearingDate1" onChange={handleInputChange} /> <br />
          {/* Court Name */}
          <b>Court Name</b> <br /> <br />
          <select name="courtName1" onChange={handleInputChange}>
            <option value="court0">Select Court Name</option>
            <option value="court1">Select Court Name1</option>
            <option value="court2">Select Court Name2</option>
            <option value="court3">Select Court Name3</option>
            <option value="court4">Select Court Name4</option>
            <option value="court5">Select Court Name5</option> 
          </select> <br />
          <br />
          {/* Party Name */}
          <b>Party Name</b> <br />
          <input type="text" name="partyname1" size="80" placeholder="Enter Party Name" onChange={handleInputChange} /> <br /> <br />
          {/* Party Contact Number */}
          <b>Party Contact Number</b><br />
          <input type="text" name="partycontact1" size="80" placeholder="Enter Party Contact Number" onChange={handleInputChange} /> <br /> <br />
          <button type="submit" className="custom-button">Add Case Note</button>
        </form>
      </div>

       


      <div className="form-container form2-container">
        <form>
          <h2>Enter Adverse Party Details</h2>
          <b>Adverse Party Name</b> <br />
          <input type="text" id="caseno2" size="80" placeholder="Enter Adverse Party Name" /> <br /> <br />
          <b>Adverse Party Contact Number</b><br />
          <input type="text" id="casename2" size="80" placeholder="Enter Adverse Party Contact Number " /> <br /> <br />
          <b>Adverse Party Lawyer Name</b> <br />
          <input type="text" id="casename2" size="80" placeholder="Enter Adverse Party Name " /> <br /> <br />
          <b>Adverse Party Lawyer Contact Number</b><br />
          <input type="text" id="casename2" size="80" placeholder="Enter Adverse Party Lawyer Number " /> <br /> <br />
          

          <div style={{ textAlign: 'right' }}> 
            <button className="custom-button" type="button" name="addCaseNote">Add Case Note</button>
          </div>






              
         
          
          
        </form>
      </div>
    </div>
  );
};

export default Case5;  
 
