import React, { useEffect, useState } from "react";
import img1 from "../../Assets/HomePage/4d3bb97d91b0e9b8785533e0b3fd79fc.png";
import img2 from "../../Assets/HomePage/83708bb58714e127bf6bc5ecfaf0d2b5.png";
import img3a from "../../Assets/HomePage/image 5.png";
import img3b from "../../Assets/HomePage/image 6.png";
import BG_RIBBON from "../../Assets/HomePage/bg-ribbion.png";
import frame2 from "../../Assets/HomePage/16eb1abdbdc8ba568969d5037bff5543.png";
import frame5 from "../../Assets/HomePage/a0b808cb7da08294a9aacaaffa61185d.png";
import frame3 from "../../Assets/HomePage/c1a0937cbce2bef8485ad1d64006cd13.png";
import frame4 from "../../Assets/HomePage/c7b02227d780c4425cfda2561c190078.png";
import frame6 from "../../Assets/HomePage/dcb17dce4308fc8cc08c632b19f61d50.png";
import frame1 from "../../Assets/HomePage/df24e7f7d35dc2556c9124e1d32f9a26.png";
import vector from "../../Assets/HomePage/Vector.svg";

const Hero2 = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        className="flex flex-col gap-11 justify-center font-poppins bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${BG_RIBBON})`,
        }}
      >
        <h1 className="text-center font-poppins text-[44px] pt-7 font-gray-800 font-semibold mb-8 dark:text-white">
          Key features
        </h1>
        {/* 3 boxes part */}

        <div className=" mb-3 mx-6 font-white rounded-3xl flex flex-col flex-wrap shadow-md bg-white relative">
          <img
            src={windowWidth < 1024 ? img3b : img3a}
            className="w-full h-[26rem] rounded-3xl"
            alt="IMAGE1"
          />
          <div className="absolute overflow-visible top-0 left-9 right-0 bottom-0 flex flex-col gap-11 justify-between pt-[12px]">
            <div>
              <h1 className="text-[40px] font-semibold text-white mb-2">
                Everything in one place
              </h1>
              <p className="max-w-[280px] text-[22px] text-white">
                Add your personal notes to any case you'd prefer
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 sm:gap-8">
              <button className="px-4 sm:px-8 py-2 bg-blue-600 rounded-3xl">
                <span className="px-5 text-white">Use now</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-row gap-4 p-2 justify-center">
          <div
            className="font-white bg-cover bg-no-repeat mb-5 mr-0 p-2 sm:mr-4 rounded-3xl w-fit sm:min-w-[600px] lg:w-fit shadow-md"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="flex flex-col gap-11 p-[20px] justify-between">
              <div className="">
                <h1 className="text-[40px] font-semibold pt-4 text-white mb-2">
                  Never be Late
                </h1>
                <p className="text-[22px] max-w-[400px] text-white">
                  Our alarm system integrated within the app will notify you of
                  any upcoming events.
                </p>
              </div>

              <div className="flex mt-[240px] gap-4 sm:gap-8">
                <button className="px-4 sm:px-8 py-2 bg-transparent border border-black rounded-3xl">
                  <span className="px-5 text-black">Try it</span>
                </button>
                <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                  <span className="px-5 text-white">Use now</span>
                </button>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div
            className="font-white bg-cover bg-no-repeat mb-5 mr-0 p-2 sm:mr-4 rounded-3xl w-fit sm:min-w-[600px] lg:w-fit shadow-md"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="bottom-4 justify-between flex flex-col gap-11 mt-2 p-[20px]">
              <div className="">
                <h1 className="text-[40px] font-semibold text-white">
                  Stay Organized
                </h1>
                <p className=" max-w-[300px] text-[22px] text-white">
                  Ensure that your schedule is accurate by entering new
                  appointments or events into our digital calendar.
                </p>
              </div>

              <div className="flex mt-[190px] gap-4 sm:gap-8">
                <button className="px-4 sm:px-8 py-2 bg-transparent border rounded-3xl">
                  <span className="px-5 text-white">Try it</span>
                </button>
                <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                  <span className="px-5 text-white">Use now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lawyer images and text area  */}

      <div className="font-poppins justify-center flex flex-col md:flex-row flex-wrap px-2">
        {/* 1st */}
        <div className="flex flex-wrap justify-center flex-row max-w-screen">
          <div className="rounded-[2.7rem] py-6 pl-1">
            <img
              src={frame1}
              alt="image3"
              className="rounded-[2.7rem] w-[456px] h-[310px]"
            />
          </div>
          <div className="md:w-1/2 border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-3 rounded-[30px]">
            <img
              src={vector}
              alt="image3"
              className="w-12 h-auto mb-4 md:mb-0 md:mr-4 float-left"
            />
            <p className="font-gray-700 text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              temporibus voluptate modi maxime id commodi explicabo rem veniam?
              Pariatur quas eius quo modi repellendus perferendis magni
              voluptas, eligendi at similique?
            </p>
            <div className="mt-4 text-right">
              <h1 className="text-xl font-bold font-gray-800">John Doe</h1>
              <h4 className="text-sm font-normal font-gray-500">Lorem Ipsum</h4>
            </div>
          </div>
          <div className="rounded-[2.7rem]  py-6">
            <img
              src={frame5}
              alt="image2"
              className="rounded-[2.7rem] w-[456px] h-[310px]"
            />
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-wrap justify-center flex-row max-w-screen">
          <div className="md:w-1/2 border flex flex-col max-w-[469px] border-gray-600 p-4 my-4 md:mx-3 rounded-[30px]">
            <img
              src={vector}
              alt="image5"
              className="w-12 h-auto mb-4 md:mb-0 md:mr-4 float-left"
            />
            <p className="font-gray-700 text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              temporibus voluptate modi maxime id commodi explicabo rem veniam?
              Pariatur quas eius quo modi repellendus perferendis magni
              voluptas, eligendi at similique?
            </p>
            <div className="mt-4 text-right">
              <h1 className="text-xl font-bold font-gray-800">John Doe</h1>
              <h4 className="text-sm font-normal font-gray-500">Lorem Ipsum</h4>
            </div>
          </div>
          <div className="rounded-[2.7rem] py-6 pr-2">
            <img
              src={frame3}
              alt="image5"
              className="rounded-[2.7rem] w-[452px] h-[314px]"
            />
          </div>
          <div className="rounded-[2.7rem] mt-6">
            <img
              src={frame2}
              alt="image4"
              className="rounded-[2.7rem] w-[456px] h-[310px]"
            />
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-wrap justify-center flex-row max-w-screen">
          <div className="rounded-[2.7rem] py-6">
            <img
              src={frame6}
              alt="image3"
              className="rounded-[2.7rem] w-[456px] h-[310px]"
            />
          </div>
          <div className="md:w-1/2 border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-4 rounded-[30px]">
            <img
              src={vector}
              alt="image2"
              className="w-12 h-auto mb-4 md:mb-0 md:mr-3 float-left"
            />
            <p className="font-gray-700 text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              temporibus voluptate modi maxime id commodi explicabo rem veniam?
              Pariatur quas eius quo modi repellendus perferendis magni
              voluptas, eligendi at similique?
            </p>
            <div className="mt-4 text-right">
              <h1 className="text-xl font-bold font-gray-800">John Doe</h1>
              <h4 className="text-sm font-normal font-gray-500">Lorem Ipsum</h4>
            </div>
          </div>
          <div className="mt-3 rounded-[2.7rem]">
            <img
              src={frame4}
              alt="image1"
              className="rounded-[2.7rem] w-[448px] h-[318px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
