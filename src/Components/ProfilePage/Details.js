import React,{useState} from 'react'
import Select from 'react-dropdown-select'
import {Link} from "react-router-dom"
import Profile from './Profile';

const Details=()=>{
  const [value,setValue]=useState(null);
  const options=[
    {
      value:'1',
      label:"B.Sc.LL.B",
    },
    {
      value:2,
      label:"BBA.LLB",
    },
    {
      value:3,
      label:"B.Com.LL.B",
    },
    {
      value:4,
      label:"B.A.LL.B"
    },
    {
      value:5,
      label:"Other"
    }
  ]
  
  return (
    <div className=" flex flex-col md:flex-row gap-12 ">
    <Profile/>
    <div className=" md:w-[650px] md:h-[700px] w-[380px] h-[800px] mr-[15px] md:mr-[0px] bg-slate-100 mt-[90px] rounded-xl border-2 border-orange-300 ">
      <h1 className=' font-bold text-lg ml-[40px] mt-[12px]'>Profile {'>'} Home</h1>
      <div className="  md:w-[570px] md:h-[610px] w-[310px] h-[710px] ml-[40px] text-sm">
                <div className='w-full h-[100px] mt-[20px] '>
                  <h1>LAWYER NAME</h1>
                  <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="Name"></input>
                  <h1>Hint</h1>
                </div>
                <div className='w-full h-[100px]  '>
                  <h1>LAWYER ID</h1>
                  <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="id"></input>
                  <h1>Hint</h1>
                </div>
                <div className='w-full h-[100px]  '>
                  <h1>LAWYER Degree</h1>
                  <div>
                    <Select
                    placeholder='select degree...'
                    options={options}
                    onChange={setValue}
                    isSearchable
                    style={{borderColor:"orange", borderRadius:"6px", borderWidth:"1px", background:"white", fontSize:"16px", paddingLeft:"20px"}}
                    color="orange"
                    />
                  </div>
                  <h1>Hint</h1>
                </div>
                <div className='w-full h-[100px] '>
                  <h1>Email</h1>
                  <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="email"></input>
                  <h1>Hint</h1>
                </div>
                <div className='w-full h-[100px]  '>
                  <h1>Phone Number</h1>
                  <input className=" w-full h-[40px]  rounded-lg border-solid border-orange-300 border-2 outline-none pl-[20px] " placeholder="phone"></input>
                  <h1>Hint</h1>
                </div>


                <div>
                    <div className="md:mt-[0px] mt-[50px] w-[150px] h-[50px] md:ml-[200px] ml-[60px] border-solid rounded-3xl border-2 border-orange-500 hover:bg-orange-200 font-semibold">
                      <Link to="/profile"><button className=" w-full h-full ">Edit Profile</button></Link>
                    </div>
                    <div className="md:mt-[15px] mt-[20px] w-[200px]  md:ml-[175px] ml-[40px] h-[50px]">
                    <Link to="/ChangePassword"><button className=" w-full h-full  border-2 border-solid rounded-3xl border-orange-500 hover:bg-orange-200 font-semibold">Change Passsword</button></Link> 
                    </div>
                </div>
      </div>
    </div>
    </div>
  )
}

export default Details