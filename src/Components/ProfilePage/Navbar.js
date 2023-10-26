import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const Navbar=()=>{
  return (
    <div className=" flex md:flex-row text-2xl justify-between w-full h-[130px] pt-[60px] font-semibold ">
        <h1 className="font-bold text-orange-300 text-4xl">Jurident</h1>
        <div className=" flex gap-10 mt-[5px]">
          <h1>Service</h1>
          <h1>News</h1>
          <h1>About Us</h1>
        </div>
        <div className=" flex gap-10">
          <div className=" rounded-full  border-2 border-black w-[40px] h-[40px] pl-2 "><FontAwesomeIcon icon={faUser} style={{color: "#000000",}} /></div>
          <div className="w-[40px] h-[40px] pl-2 rounded-full border-2 border-black"><FontAwesomeIcon icon={faBell} style={{color: "#000000",}} /></div>
        </div>
    </div>
  )
}

export default Navbar