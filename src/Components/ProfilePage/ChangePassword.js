import React from 'react'
import Profile from './Profile';
import {Link} from 'react-router-dom'


const ChangePassword=()=> {
  return (
    <div className="md:mx-[260px] mx-[25px] ">
    <div className="flex flex-col md:flex-row gap-12 ">
    <Profile/>
    <div className=" md:w-[650px] md:h-[700px] w-[380px] h-[750px] mr-[15px] md:mr-[0px] bg-slate-100 mt-[90px] rounded-xl border-2 border-orange-300 px-[40px]">
        <h1 className=' font-bold text-lg mt-[12px]'>Home {'>'} Change Password</h1>
        <h1>Please note changing password will require your login again to the app</h1>
        <div className='w-full h-[100px] mt-[30px] '>
          <h1>Current Passsword</h1>
          <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="password" type='password'></input>
          <h1>Hint</h1>
        </div>
        <div className='w-full h-[100px] mt-[10px] '>
          <h1>New Passsword</h1>
          <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="new password" type='password'></input>
          <h1>Hint</h1>
        </div>
        <div className='w-full h-[100px] mt-[10px] '>
          <h1>Confirm New Passsword</h1>
          <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="confirm password" type='password'></input>
          <h1>Hint</h1>
        </div>
        <div className=" w-[150px] h-[50px] md:ml-[200px] ml-[60px] border-solid rounded-3xl border-2 border-orange-500 hover:bg-orange-200 font-semibold mt-[50px]">
            <Link to="/profile"><button className=" w-full h-full ">Edit Profile</button></Link>
        </div>
        <div className=" w-[150px] h-[50px] md:ml-[200px] ml-[60px] border-solid rounded-3xl border-2 border-orange-500 hover:bg-orange-200 font-semibold mt-[20px]">
              <button className=" w-full h-full ">Save Changes</button>
        </div>
        <div className=" w-[150px] h-[50px] md:ml-[200px] ml-[60px] border-solid rounded-3xl border-2 border-orange-500 hover:bg-orange-200 font-semibold mt-[20px]">
              <button className=" w-full h-full ">Discard Changes</button>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default ChangePassword