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
    <div > 
      <div >  

      <br></br>
      <h1 className='hhh'><b>ADD NEW CASE </b></h1>  
        <form onSubmit={handleSubmit} className="form-container "> 

      
          <div className='firsthalf'>  

          <h2> <b> Enter the Party Details</b></h2> 
          <br></br>
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
          
          
          
          </div>


          <div className='firsthalf2'>
        

          <h2> <b> Enter Adverse Party Details</b></h2> 
          <br></br>
          <b>Adverse Party Name</b> <br />
          <input type="text" name="adversePartyName" size="80" placeholder="Enter Adverse Party Name" onChange={handleInputChange} /> <br /> <br />
          <b>Adverse Party Contact Number</b><br />
          <input type="text" name="adversePartyContact" size="80" placeholder="Enter Adverse Party Contact Number " onChange={handleInputChange} /> <br /> <br />
          <b>Adverse Party Lawyer Name</b> <br />
          <input type="text" name="adversePartyLawyerName" size="80" placeholder="Enter Adverse Party Name " onChange={handleInputChange} /> <br /> <br />
          <b>Adverse Party Lawyer Contact Number</b><br /> 
          <input type="text" name="adversePartyLawyerContact" size="80" placeholder="Enter Adverse Party Lawyer Number "  onChange={handleInputChange}/> <br /> <br />
          
          <div > 
          <button type="submit" className="custom-button" >Add Case Note</button>
          </div> 
        
          </div>
        
                 
          
       

         
        </form>

     
      
      </div>
      
    </div>
  );
};

export default Case5;   
 
