import React from 'react'
import Profile from './Profile';
import {Link} from "react-router-dom"

const AboutUs=()=> {
  return (
    <div className="md:mx-[260px] mx-[25px] ">
    <div className=" flex flex-col md:flex-row gap-12 ">
    <Profile/>
    <div className=" md:w-[650px] md:h-[700px] w-[380px] h-[1000px] mr-[15px] md:mr-[0px] bg-slate-100 mt-[90px] rounded-xl border-2 border-orange-300 md:pl-[40px] pl-[20px]">
         <h1 className=' font-bold text-lg ml-[40px] mt-[12px]'>About Us</h1>
         <div className="mt-[20px] mr-[50px]">
            <div >
                <h1 className=" font-semibold text-xl text-orange-600">Vission</h1>
                <div className="mt-[10px]">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
            <div className="mt-[20px]">
                <h1 className=" font-semibold text-xl text-orange-600">About Us</h1>
                <div className="mt-[10px] flex flex-col gap-5">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
            </div>
        </div>    
        <div className=" w-[150px] h-[50px] md:ml-[200px] ml-[80px]  mt-[30px] border-solid rounded-3xl border-2 border-orange-500 hover:bg-orange-200 font-semibold">
            <Link to="/profile"><button className=" w-full h-full ">Go To Profile</button></Link> 
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default AboutUs