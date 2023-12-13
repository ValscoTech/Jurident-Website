import React from "react";
import BG_RIBBON from "../../Assets/HomePage/bg-ribbion.png";
import BG_MAN from "../../Assets/HomePage/bg-man.png";
import { TiTick } from "react-icons/ti";
import { GoArrowDownRight } from "react-icons/go";

const SecondPage = () => {
  return (
    <div
      className="flex flex-col gap-11 lg:m-8 p-2 lg:p-[2rem] overflow-hidden justify-center h-screen bg-no-repeat bg-cover -z-10 relative"
      style={{
        backgroundImage: `url(${BG_RIBBON})`,
      }}
    >
      <div className="relative grid grid-cols-2 ">
        <div className=" flex flex-col gap-10 max-lg:gap-5  relative">
          <div className="flex flex-col justify-center align-middle relative">
            <div className="flex flex-col justify-center font-poppins relative font-bold text-[80px] max-lg:text-[60px] max-md:text-[30px] max-sm:text-[25px]">
              <h1 className="gap-2 flex">
                <span className="text-blue-500">EMPOWERING</span>JUSTICE
                <span className=" inline-block text-blue-500">,</span>
              </h1>
              <h1 className="flex gap-3">
                <span className="text-blue-500">PROCTECTING </span> RIGHTS<span className="inline-block text-blue-500">.</span>{" "}
              </h1>
            </div>
          </div>

          <div className="flex flex-col font-poppins justify-center gap-11 pb-11">
            <div className="flex text-xl font-semibold  max-md:justify-centre text-gray-800  text-left max-md:text-lg max-md:font-normal max-sm:text-sm">
              
              <p className=" w-[500px] max-md:w-auto dark:text-white">
                <TiTick className=" text-lg inline-block mt-1 text-white bg-green-400 rounded-full  mr-2 " />
                {" "}
                <span className=" text-yellow-500">Case Management</span> - keep
                all of your case details and documents in one location.
              </p>
            </div>
            <div className="flex text-xl font-semibold max-md:justify-centre text-gray-800 text-left max-md:text-lg max-md:font-normal max-sm:text-sm">
              <p className="w-[500px] max-md:w-auto dark:text-white">
                <TiTick className=" text-lg inline-block mt-1 text-white bg-green-400 rounded-full  mr-2" />
                {" "}
                <span className=" text-yellow-500">Calendering</span> - Remember
                to hit every Deadline
              </p>
            </div>
            <div className="flex text-xl font-semibold max-md:justify-centre text-gray-800 text-left max-md:text-lg max-md:font-normal max-sm:text-sm">
              <p className="w-[500px] max-md:w-auto dark:text-white">
                <TiTick className=" text-lg inline-block mt-1 text-white bg-green-400 rounded-full  mr-2" />
                {" "}
                <span className=" text-yellow-500">Secure</span> - Every byte of
                data - yours and your clients' - securely stored.
              </p>
            </div>
          </div>
        </div>
        <div className="relative -z-10 lg:top-40">
          <img
            src={BG_MAN}
            alt="bgman"
            className="absolute sm:h-[300px] lg:h-[600px] bottom-[-30px] lg:left-14 -z-1"
          />
        </div>

        <button type="button" href='#' className=" flex relative flex-row sm:w-[200px] lg:w-[400px] hover:border-spacing-4 items-center active:border hover:bg-transparent hover:text-black justify-center sm:gap-1  lg:gap-5 p-4 bg-[#2A4ECA] rounded-full">
          <GoArrowDownRight className=" text-white sm:text-lg lg:text-5xl hover:text-black"/>
          <span className="text-white text-sm sm:text-lg lg:text-3xl hover:text-black">Download App</span>
        </button>
        
      </div>
      
    </div>
  );
};

export default SecondPage;
