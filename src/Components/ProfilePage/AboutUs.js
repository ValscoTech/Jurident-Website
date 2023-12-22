import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Profile from "./Profile";

const AboutUs = () => {
  return (
    <Layout className="md:mx-260 mx-25">
      <div className="flex flex-col justify-center md:flex-row gap-12">
        <Profile />
        
        <div className="md:w-[500px]   w-[360px] h-[600px] mr-[10 px] ml-[15px]  mt-[0px] md:mr-[0px] bg-slate-100 md:mt-[130px] rounded-xl border-2 border-orange-300 ">
      
        <h1 className="font-bold text-lg md:text-xl ml-4 mt-4">About Me</h1>
          <div className="mt-4 ml-4 mr-6">
            <div>
              <h1 className="font-semibold text-lg md:text-xl text-orange-600">
              Name
              </h1>
              <div className="mt-2">
                <p>
                  orem 
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="font-semibold text-lg md:text-xl text-orange-600">
                Lawyer Id
              </h1>
              <div className="mt-2 flex flex-col gap-4">
                <p>
                  1223267215xx
                </p>
               
              </div>
            </div>
            <div className="mt-6">
            <h1 className="font-semibold text-lg md:text-xl text-orange-600">
              Degree
            </h1>
            <div className="mt-2 flex flex-col gap-4">
              <p>
              llb
              </p>
             
            </div>
          </div>
          <div className="mt-6">
          <h1 className="font-semibold text-lg md:text-xl text-orange-600">
          Email id
          </h1>
          <div className="mt-2 flex flex-col gap-4">
            <p>
              jurdie@gmail.com
            </p>
           
          </div>
        </div>
        <div className="mt-6">
        <h1 className="font-semibold text-lg md:text-xl text-orange-600">
          Phone No
        </h1>
        <div className="mt-2 flex flex-col gap-4">
          <p>
          823723727
          </p>
         
        </div>
      </div>
   
          </div>
          <div className="w-36 h-12 ml-8 mt-6 border-2 rounded-3xl border-orange-500 hover:bg-orange-200 font-semibold">
            <Link to="/profile">
              <button className="w-full h-full">Go To Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
