import React from 'react';
import './Style.css'; //  CSS file 
import { setFormData, getFormData } from './formData'; // Import functions


const App = () => {
  const formData = getFormData(); // Get the initial form data

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentFormData = getFormData();
    // Access the form data from the state
    console.log(currentFormData);  
    // You can send the data to a server or perform other actions here
  };

  return ( 
    <div> 
      <div className="form-container form1-container"> 
        <form>
          <h2>Add a new case</h2>
          <h3>Enter the Party Details</h3> 
          <b>Case No</b> <br />
          <input type="text" id="caseno1" size="80" placeholder="Enter Case Number" /> <br /> <br />
          <b>Case Name</b><br />
          <input type="text" id="casename1" size="80" placeholder="Enter Case Name" /> <br /> <br />
          <b>Hearing Date</b><br /> <br />
          <input type="date" id="datepicker1" name="datepicker1" />
          <br /> <b>Court Name</b> <br /> <br />
          <select name="CourtName1">
            <option value="court0">Select Court Name</option>
            <option value="court1">Select Court Name1</option>
            <option value="court2">Select Court Name2</option>
            <option value="court2">Select Court Name3</option>
            <option value="court2">Select Court Name4</option>
            <option value="court2">Select Court Name5</option> 
          </select> <br />
          <br /><b>Party Name</b> <br />
          <input type="text" id="partyname1" size="80" placeholder="Enter Party Name" /> <br /> <br />
          <b>Party Contact Number</b><br />
          <input type="text" id="partycontact1" size="80" placeholder="Enter Party Contact Number" /> <br /> <br />
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
          <br></br>  <br></br><br></br><br></br><br></br><br></br> <br></br> <br></br><br></br>     
         
          
          
        </form>
      </div>
    </div>
  );
};

export default App;
