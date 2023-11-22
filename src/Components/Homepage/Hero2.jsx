import React from "react";
import img1 from "../../Assets/HomePage/image 5.png";
import img2 from "../../Assets/HomePage/image 7.png";
import img3 from "../../Assets/HomePage/iPhone 14.png";
import BG_RIBBON from "../../Assets/HomePage/bg-ribbion.png";
import frame5 from "../../Assets/HomePage/2ea817f6a0fefc9c327793b9a7c849de.png";
import frame2 from "../../Assets/HomePage/61e0d319102f602e90d029b0e80c45e0.png";
import frame3 from "../../Assets/HomePage/75c923caef2f358d575e76be8619734f.png";
import frame4 from "../../Assets/HomePage/640a8e81af4104fa0cb3d2e67af9a4a9.png";
import frame1 from "../../Assets/HomePage/ec47a2aa0ceb4170fff05d4138b89f80.png";
import frame6 from "../../Assets/HomePage/ff0f850b0d12f2a9d4d748b953eda585.png";
import vector from "../../Assets/HomePage/Vector.svg";
const Hero2 = () => {
  return (
    <>
      <div
        className="flex flex-col gap-11  justify-center font-poppins bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: `url(${BG_RIBBON})`,
        }}
      >
        <h1 className="text-center font-poppins text-[44px] pt-7 font-gray-800 font-semibold mb-8 dark:text-white">
          Key features
        </h1>
        <div className="justify-center items-center flex flex-wrap px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div className=" mb-5 font-white rounded-3xl flex flex-col flex-wrap shadow-md bg-white relative">
            <img
              src={img1}
              className="w-[1420px] h-[450px] rounded-3xl"
              alt="IMAGE1"
            />
            <div className="absolute overflow-visible top-0 left-9 right-0 bottom-0 flex flex-col gap-11 justify-center p-[20px]">
              <h1 className="text-[40px] pt-4 font-semibold text-white mb-2">
                Everything in one place
              </h1>
              <p className="max-w[30px] text-[22px] text-white">
                Add your personal notes to any case you'd prefer
              </p>
              <div className="flex mt-[140px] gap-4 sm:gap-8">
                <button className="px-4 sm:px-8 py-2 bg-transparent border rounded-3xl">
                  <span className="px-5 text-white">Try it</span>
                </button>
                <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                  <span className="px-5 text-white">Use now</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-row justify-between">
            <div className="font-white mb-5 mr-0 sm:mr-4 rounded-3xl w-[600px] shadow-md">
              <img src={img2} className="w-full h-full rounded-3xl" alt="" />
              <div className="absolute top-[500px] left-[100px] right-0 bottom-0 flex flex-col gap-11 p-[20px] justify-center">
                <h1 className="text-[40px] font-semibold pt-10 mt-11 text-white mb-2">
                  Never be Late
                </h1>
                <p className="text-[22px] max-w-[400px] text-white">
                  Our alarm system integrated within the app will notify you of
                  any upcoming events.
                </p>
                <div className="flex mt-[220px] gap-4 sm:gap-8">
                  <button className="px-4 sm:px-8 py-2 bg-transparent border border-black rounded-3xl">
                    <span className="px-5 text-black">Try it</span>
                  </button>
                  <button className="px-4 sm:px-8 py-2 bg-blue-600  rounded-3xl">
                    <span className="px-5 text-white">Use now</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="font-white mb-5 rounded-3xl shadow-md w-[600px]">
              <img src={img3} className="w-full h-full rounded-3xl" alt="" />
              <div className="absolute top-[500px] bottom-4  flex flex-col gap-11 mt-8 p-[20px] justify-center">
                <h1 className="text-[40px] font-semibold pt-12 mt-11 text-white mb-2">
                  Stay Organized
                </h1>
                <p className=" max-w-[300px] text-[22px] text-white">
                  Ensure that your schedule is accurate by entering new
                  appointments or events into our digital calendar.
                </p>
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
      </div>

      {/* <div className="font-poppins flex flex-col md:flex-row flex-wrap">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="rounded-2xl max-w-[460px] py-6 pl-3">
            <img src={frame1} alt="" className="rounded-[2.7rem] w-full" />
          </div>
          <div className=" md:w-1/2 border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-4 rounded-[30px]">
            <img
              src={vector}
              alt=""
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
          <div className="rounded-lg max-w-[460px]  py-6">
            <img src={frame5} alt="" className="w-full rounded-[2.7rem]" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col max-h-[440px] md:flex-row">
          <div className="border border-gray-600 p-4 flex flex-col max-w-[469px] my-5 md:mx-4 md:w-1/2 rounded-[30px]">
            <img
              src={vector}
              alt=""
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
          <div className="rounded-[2.7rem] max-w-[460px]  py-6 md:pl-6">
            <img src={frame4} alt="" className="w-full h-auto rounded-[2.7rem]" />
          </div>
          <div className="rounded-[2.7rem] max-w-[460px]  py-6 md:pl-6">
            <img src={frame6} alt="" className="w-full rounded-[2.7rem]" />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="rounded-[2.7rem] max-w-[460px] py-6">
            <img src={frame2} alt="" className="w-full rounded-[2.7rem]" />
          </div>
          <div className="border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-4 md:w-1/2 rounded-[30px]">
            <img
              src={vector}
              alt=""
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
          <div className="rounded-[2.7rem] max-w-[460px]  py-6 md:pl-6">
            <img src={frame3} alt="" className="w-full rounded-[2.7rem]" />
          </div>
        </div>
      </div> */}
      <div className="font-poppins flex flex-col md:flex-row flex-wrap">
        {/* 1st */}
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="rounded-[2.7rem] max-w-[460px] py-6 pl-3">
            <img
              src={frame1}
              alt=""
              className="rounded-[2.7rem] w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-4 rounded-[30px]">
            <img
              src={vector}
              alt=""
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
          <div className="rounded-[2.7rem] max-w-[460px] py-6">
            <img
              src={frame5}
              alt=""
              className="rounded-[2.7rem] w-full h-auto"
            />
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="md:w-1/2 border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-4 rounded-[30px]">
            <img
              src={vector}
              alt=""
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
          <div className="rounded-[2.7rem] max-w-[460px] py-6 px-2 pl-3">
            <img
              src={frame4}
              alt=""
              className="rounded-[2.7rem] w-full h-auto"
            />
          </div>
          <div className="rounded-[2.7rem] max-w-[460px] mt-6">
            <img
              src={frame6}
              alt=""
              className="rounded-[2.7rem] w-full h-auto"
            />
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="rounded-[2.7rem] max-w-[460px] py-6 pl-3">
            <img
              src={frame2}
              alt=""
              className="rounded-[2.7rem] w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 border max-w-[469px] flex flex-col border-gray-600 p-4 my-4 md:mx-4 rounded-[30px]">
            <img
              src={vector}
              alt=""
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
          <div className="rounded-[2.7rem] max-w-[460px] py-6">
            <img
              src={frame3}
              alt=""
              className="rounded-[2.7rem] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
