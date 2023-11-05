import React from 'react'
import {Link} from "react-router-dom"

const Profile=()=>{
  return (
    <>
    <div className=" w-[300px] h-[700px] rounded-xl md:ml-[0px] ml-[40px]  ">
        <h1 className="text-5xl font-semibold text-gray-500 my-[20px] md:text-left text-center">PROFILE</h1>
        <div className="h-[700px] w-[300px] rounded-xl border-2 border-orange-300 bg-slate-100">
            <div className=" w-full h-[200px] pt-3">
                <div className=" rounded-full border-2 border-orange-600 w-[180px] h-[180px] pl-[12px] pt-[20px] ml-[50px] " >
                    <img  src="./Images/profile.svg" alt="profile.jpg"></img>
                </div>
            </div>
            <hr className="h-[3px] w-[250px] mx-[20px] mt-[10px] bg-orange-300 "></hr>
            <div className="flex flex-col gap-3 mx-[20px] mt-[10px] font-semibold md:text-left text-center">
                <h1>Language</h1>
                <h1><Link to="/TermsAndCondition">Terms And Conditions</Link></h1>
                <h1><Link to="/AboutUs">About Us</Link></h1>
                <h1>Dark Mode</h1>
                <h1>Notifications</h1>
                <h1>Contact Us</h1>
                <h1>Support Chat</h1>
                <h1>Super Chat</h1>
                <h1>FAQ</h1>
                <h1>Feedback Page</h1>
            </div>
            <hr className="h-[3px] w-[250px] mx-[20px] mt-[10px] bg-orange-300 "></hr>
            <div>
                <button className=" w-[250px] h-[50px] bg-orange-400 rounded-xl mt-[30px] mx-[20px] font-semibold hover:bg-orange-300">Log Out</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile