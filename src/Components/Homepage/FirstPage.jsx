import React, { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import BG from "./assets/first_bg.png";

function FirstPage() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  if (screenSize > 1200) {
    return (
      <div className=" h-screen">
        <img
          src={BG}
          alt="bg"
          className="absolute ml-[546px]  w-[732px] h-[800px] pb-16"
        />
        <div className="absolute h-[100%] w-[100%]">
          <h1 className=" w-[406px] h-[74px] text-[100px] font-poppins ml-[163px] mt-[173px]  font-black leading-[135px]">
            Jurident
          </h1>
          <h2 className="mt-[79px] ml-[158px] w-[773px] h-[164px] font-poppins font-bold text-[70px] leading-[108px]">
            Empowering Justice,
            <br />
            Protecting Rights
          </h2>
          <div
            className="flex justify-center align-middle mt-[103px] w-[800px] h-[125px] ml-[161px] box-border rounded-full  bg-bg-loc_sec bg-[#17A1FA] "
          >
            <div className=" flex flex-col justify-center  align-center px-[1.5rem]">
              <div className=" px-2">
                <SlLocationPin className=" inline-block text-white text-3xl " />
                <h3 className="w-[196px] h-[19px] ml-[46px] md-[50px] font-poppins underline  underline-offset-[14px] inline p-4 text-[26px] text-white font-medium ">
                  <input
                    type="text"
                    placeholder="Search for a City"
                    className=" inline-block w-[215px] bg-transparent text-white placeholder:text-white border-b focus:outline-none"
                  />
                </h3>
                <button className=" ml-[159px] w-[239px] h-[50px] border-2 bg-white text-black rounded-full text-lg hover:bg-transparent hover:font-bold hover:border-white hover:text-white hover:bg-blue-700">
                  Detect Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center text-center justify-center">
          <h1 className="text-[90px] font-poppins font-black leading-[135px]">
            Jurident
          </h1>
          <h2 className="text-[30px] font-poppins  font-black leading-[135px]">
            <span className=" text-blue-500">Empowring</span> Justice,{" "}
            <span className="text-blue-500">Protecting</span> Rights
          </h2>
          <div className="flex items-center justify-center  space-x-2">
            <div className="flex items-center gap-8 text-xl h-16 border-2 border-gray-800 rounded-md">
              <SlLocationPin className=" text-center ml-8" />
              <h3 className="font-poppins w-[40%] text-center text-black font-medium ">
                <input
                  type="text"
                  placeholder="Search for a City"
                  className=" inline-block w-[215px] bg-transparent border-black focus:outline-none"
                />
              </h3>
            </div>
            <button className=" ml-[159px] w-[239px] h-[50px] border-2 bg-blue-500 text-white rounded-full text-lg hover:bg-transparent hover:font-bold hover:border-black hover:text-black hover:bg-blue-700">
              Detect Location
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
