import React, { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import BG from "../../Assets/HomePage/first_bg.png";
import Video from '../../Assets/HomePage/HomeVid.mp4'

const FirstPage = () => {
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
  if (screenSize > 800) {
    return (
      <div className="relative ml-8 min-h-screen overflow-hidden w-full max-w-screen-xl flex flex-col md:flex-row ">
        {/* Left section */}
        <div className="relative flex flex-col justify-center left-[-2rem] mr-[20rem] items-start md:items-center  py-12 md:py-0 px-6 md:px-12 lg:px-24">
          <div className=" relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-normal mb-8 relative z-10">
              Jurident
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-normal relative z-10">
              Empowering Justice,
              <br />
              Protecting Rights
            </h2>
          </div>
          <div className="p-4 flex flex-col md:flex-row items-center mt-12 md:mt-24 relative z-10 border rounded-full  bg-bg-loc_sec bg-[#17A1FA] ">
            <div className="flex items-center mb-4 md:mb-0">
              <SlLocationPin className="text-white text-3xl" />
              <h3 className="ml-4 md:ml-6 font-poppins underline text-white text-xl md:text-3xl font-medium">
                <input
                  type="text"
                  placeholder="Search for a City"
                  id="home"
                  className="w-[215px] bg-transparent text-white placeholder-white border-b focus:outline-none md:text-[20px] !important"
                />
              </h3>
            </div>
            <button className="w-full md:w-auto h-12 md:h-16 bg-white text-black rounded-full text-lg md:text-xl font-medium hover:bg-transparent hover:font-bold hover:border hover:border-white hover:text-white hover:bg-blue-700 mt-4 md:mt-0 md:ml-4">
              Detect Location
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="absolute inset-0 w-[100%] md:w-1/2 z-0 top-10 lg:left-[33rem] md:left-[25rem] md:top-[1rem] lg:top-10">
          <div className="relative rounded-lg md:w-[400px] md:h-[600px]  lg:w-[700px] lg:h-[700px] sm:h-[100px]">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
              {/* Replace 'Video' with your video source */}
              <source src={Video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-900 opacity-60 z-10"></div>
          </div>
        </div>
      </div>

    );
  } else {
    return (
      <div className=" h-auto w-auto p-2 flex flex-col items-center justify-center relative overflow-hidden ">
        <div className="relative">
          <div className=" relative">
            <h1 className="text-5xl font-black leading-loose text-center">
              Jurident
            </h1>
          </div>
          <div className=" relative">
            <h2 className="text-3xl font-semibold text-center leading-relaxed">
              Empowering Justice,
              <br />
              Protecting Rights
            </h2>
          </div>
        </div>

        <div className="relative rounded-lg m-5 h-auto">
          <video autoPlay loop muted playsInline className="relative inset-0 h-[400px] w-[400px] object-cover">
            {/* Replace 'Video' with your video source */}
            <source src={Video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-900 opacity-60 z-10"></div>
        </div>

        <div className="relative w-full sm:w-1/2">
          <div className=" p-2 w-full flex gap-4  relative items-center justify-center z-10 border rounded-full  bg-bg-loc_sec bg-[#17A1FA] ">
            <div className="flex relative gap-4 items-center">
              <SlLocationPin className="text-white text-5xl" />
              <h3 className="font-poppins underline text-white text-sm">
                <input
                  type="text"
                  placeholder="Search for a City"
                  id="home"
                  className="w-auto bg-transparent text-white placeholder-white border-b focus:outline-none"
                />
              </h3>
            </div>
            <button className="w-full p-1 pt-3 pb-3 bg-white text-black rounded-full text-sm hover:bg-transparent hover:font-bold hover:border hover:border-white hover:text-white hover:bg-blue-700 ">
              Detect Location
            </button>
          </div>
        </div>
      </div>
    );
  }
};


export default FirstPage;
