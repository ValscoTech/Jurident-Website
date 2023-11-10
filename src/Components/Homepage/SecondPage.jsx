import React from "react";
import BG_RIBBON from "./assets/bg-ribbion.png";
import BG_MAN from "./assets/bg-man.png";
import { TiTick } from "react-icons/ti";
const SecondPage = () => {
  return (
    <div
      className="flex flex-col gap-11 p-[2rem] overflow-hidden justify-center h-screen bg-no-repeat bg-cover  relative"
      style={{
        backgroundImage: `url(${BG_RIBBON})`,
      }}
    >
      <div className="flex relative">
        <div className=" flex flex-col gap-10 max-lg:gap-5 flex-wrap">
          <div className="flex flex-col justify-center align-middle ">
            <div className="flex flex-col justify-center font-poppins font-bold text-[80px] max-lg:text-[60px] max-md:text-[30px] max-sm:text-[25px]">
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
              <TiTick className=" text-lg inline-block mt-1 text-white bg-green-400 rounded-full  mr-2 " />
              <p className=" w-[500px] max-md:w-auto dark:text-white">
                {" "}
                <span className=" text-yellow-500">Case Management</span> - keep
                all of your case details and documents in one location.
              </p>
            </div>
            <div className="flex text-xl font-semibold max-md:justify-centre text-gray-800 text-left max-md:text-lg max-md:font-normal max-sm:text-sm">
              <TiTick className=" text-lg inline-block mt-1 text-white bg-green-400 rounded-full  mr-2" />
              <p className="w-[500px] max-md:w-auto dark:text-white">
                {" "}
                <span className=" text-yellow-500">Calendering</span> - Remember
                to hit every Deadline
              </p>
            </div>
            <div className="flex text-xl font-semibold max-md:justify-centre text-gray-800 text-left max-md:text-lg max-md:font-normal max-sm:text-sm">
              <TiTick className=" text-lg inline-block mt-1 text-white bg-green-400 rounded-full  mr-2" />
              <p className="w-[500px] max-md:w-auto dark:text-white">
                {" "}
                <span className=" text-yellow-500">Secure</span> - Every byte of
                data - yours and your clients' - securely stored.
              </p>
            </div>
          </div>
        </div>
        <img
          src={BG_MAN}
          alt="bgman"
          className=" float-right relative visible inline-block h-[600px] bottom-[-153px] bg-cover max-lg:h-[300px] max-lg:bottom-[-340px] max-md:invisible"
        />
      </div>
    </div>
  );
};

export default SecondPage;
