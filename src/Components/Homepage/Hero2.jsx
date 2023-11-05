import React from "react";
import img1 from "./assets/image 5.png";
import img2 from "./assets/image 7.png";
import img3 from "./assets/iPhone 14.png";
import BG_RIBBON from "./assets/bg-ribbion.png";
import frame1 from "./assets/Frame 1000001782.png";
import frame2 from "./assets/Frame 1000001784.png";
import frame3 from "./assets/Frame 1000001786.png";
import frame4 from "./assets/Frame 1000001787.png";
import frame5 from "./assets/Frame 1000001789.png";
import frame6 from "./assets/Frame 1000001790.png";
import vector from "./assets/Vector.svg";
const Hero2 = () => {
  return (
    <>
      <div
        className="flex flex-col gap-11 overflow-hidden justify-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${BG_RIBBON})`,
        }}
      >
        <h1 className="text-center font-poppins text-4xl pt-7 font-medium text-gray-800 mb-8 dark:text-white">
          Key features
        </h1>
        <div className="justify-center items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div className=" mb-5 font-white rounded-3xl shadow-md bg-white relative">
            <img
              src={img1}
              className="w-[1420px] h-[450px] rounded-3xl"
              alt="IMAGE1"
            />
            <div
              className="absolute top-0 left-9 right-0 bottom-0 flex flex-col gap-11 justify-center"
              style={{
                background: "",
                padding: "20px",
              }}
            >
              <h1 className="text-[32px] font-semibold text-white mb-2">
                Everything in one place
              </h1>
              <p className="max-w[30px] text-white">
                Add your personal notes to any case you'd prefer
              </p>
              <div className="flex mt-[140px] gap-4 sm:gap-8">
                <button className="px-4 sm:px-8 py-2 bg-transparent border rounded-3xl">
                  <span className="px-5">Try it</span>
                </button>
                <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                  <span className="px-5">Use now</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <div className="font-white mb-5 mr-0 sm:mr-4 rounded-3xl w-[600px] shadow-md">
              <img src={img2} className="w-full h-full rounded-3xl" alt="" />
              <div
                className="absolute top-[500px] left-[100px] right-0 bottom-0 flex flex-col gap-11 justify-center"
                style={{
                  background: "",
                  padding: "20px",
                }}
              >
                <h1 className="text-[32px] font-semibold text-white mb-2">
                  Never be Late
                </h1>
                <p className=" max-w-[400px] text-white">
                  Our alarm system integrated within the app will notify you of
                  any upcoming events.
                </p>
                <div className="flex mt-[240px] gap-4 sm:gap-8">
                  <button className="px-4 sm:px-8 py-2 bg-transparent border border-black rounded-3xl">
                    <span className="px-5 text-black">Try it</span>
                  </button>
                  <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                    <span className="px-5">Use now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="font-white mb-5 rounded-3xl shadow-md w-[600px]">
              <img src={img3} className="w-full h-full rounded-3xl" alt="" />
              <div
                className="absolute top-[500px] bottom-4  flex flex-col gap-11 mt-8 justify-center"
                style={{
                  background: "",
                  padding: "20px",
                }}
              >
                <h1 className="text-[32px] font-semibold text-white mb-2">
                  Stay Organized
                </h1>
                <p className=" max-w-[300px] text-white">
                  Ensure that your schedule is accurate by entering new
                  appointments or events into our digital calendar.
                </p>
                <div className="flex mt-[210px] gap-4 sm:gap-8">
                  <button className="px-4 sm:px-8 py-2 bg-transparent border rounded-3xl">
                    <span className="px-5">Try it</span>
                  </button>
                  <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                    <span className="px-5">Use now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex">
          <div className="rounded-2xl py-6 pl-6">
            <img src={frame1} alt="" />
          </div>
          <div className="border border-gray-600 p-4 max-w-md mx-auto my-4 rounded-[30px]">
            <img src={vector} alt="" className="max-w-full h-auto" />
            <p className="font-gray-700 text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              temporibus voluptate modi maxime id commodi explicabo rem veniam?
              Pariatur quas eius quo modi repellendus perferendis magni
              voluptas, eligendi at similique?
            </p>
            <div className="mt-4 text-end">
              <h1 className="text-xl font-bold font-gray-800">John Doe</h1>
              <h4 className="text-sm font-normal font-gray-500">Lorem Ipsum</h4>
            </div>
          </div>
          <div className="rounded-2xl py-6 pl-6">
            <img src={frame2} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="border border-gray-600 p-4 max-w-md mx-auto my-4 rounded-[30px]">
            <img src={vector} alt="" className="max-w-full h-auto" />
            <p className="font-gray-700 text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              temporibus voluptate modi maxime id commodi explicabo rem veniam?
              Pariatur quas eius quo modi repellendus perferendis magni
              voluptas, eligendi at similique?
            </p>
            <div className="mt-4 text-end">
              <h1 className="text-xl font-bold font-gray-800">John Doe</h1>
              <h4 className="text-sm font-normal font-gray-500">Lorem Ipsum</h4>
            </div>
          </div>
          <div className="rounded-2xl py-6 pl-6 pr-9 mr-12">
            <img src={frame3} alt="" />
          </div>
          <div className="rounded-2xl py-6 pl-6">
            <img src={frame4} alt="" />
          </div>
        </div>

        <div className="flex">
          <div className="rounded-2xl py-6">
            <img src={frame5} alt="" />
          </div>
          <div className="border border-gray-600 p-4 max-w-md mx-auto my-4 rounded-[30px]">
            <img src={vector} alt="" className="max-w-full h-auto" />
            <p className="font-gray-700 text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              temporibus voluptate modi maxime id commodi explicabo rem veniam?
              Pariatur quas eius quo modi repellendus perferendis magni
              voluptas, eligendi at similique?
            </p>
            <div className="mt-4 text-end">
              <h1 className="text-xl font-bold font-gray-800">John Doe</h1>
              <h4 className="text-sm font-normal font-gray-500">Lorem Ipsum</h4>
            </div>
          </div>
          <div className="rounded-2xl py-6 pl-6">
            <img src={frame6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
