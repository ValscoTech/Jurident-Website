import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Screens/Layout";
import Profile from "./Profile";

function TermsAndCondition() {
  return (
    <Layout className="md:mx-260 mx-25">
      <div className="flex flex-col mt-6 justify-center md:flex-row">
        <Profile />
        <div className="md:w-[650px] ml-5 md:h-[700px] w-[380px] h-[800px] mr-[15px] md:mr-[0px] bg-slate-100 mt-[90px] rounded-xl border-2 border-orange-300 ">
          <h1 className="font-bold text-lg md:text-xl ml-4 mt-4">
            Terms & Conditions
          </h1>
          <div className="mt-4 ml-4 mr-6">
            <div>
              <h1 className="font-semibold text-xl text-orange-600">
                1. Terms & Conditions
              </h1>
              <div className="mt-2">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="font-semibold text-lg text-orange-600">
                2. Privacy Policy
              </h1>
              <div className="mt-2 flex flex-col gap-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
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
}

export default TermsAndCondition;
