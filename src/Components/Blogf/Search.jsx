import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiTrendingUp } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import dhoni from "../../Assets/BlogF/dhoni.jpg"

const Search = () => {
  return (
    <div className="mx-3 px-4 py-5 d-flex justify-content-between">
      <div className="d-flex">
        <IconContext.Provider value={{ style: { fontSize: "35px" } }}>
          <HiTrendingUp />
        </IconContext.Provider>
        <span className="px-1"></span>
        <h6 className="bold-content"> Trending on Jurident</h6>
      </div>

      <form>
        <div className="flex flex-row">
        
        {/* <input
          // class="form-control"
          type="text"
          id="name"
          name="text"
          placeholder="Search"
        >
          <BsSearch   style={{ top:"25%", left: "2%" }}/>
          <img src={dhoni} alt="" />
        </input> */}
        <div className="flex items-center justify-end">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 ml-4 pl-4"
        />
        <button className="absolute left-44 top-0 h-full px-3 flex items-center justify-center rounded-l text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="grey"
          >
            <path
              fillRule="evenodd"
              d="M14.291 12.637a6.5 6.5 0 111.414-1.414l3.771 3.771a1 1 0 01-1.414 1.414l-3.771-3.771zM6.5 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

        </div>

        {/* */}
        <RxCross2
          style={{ position: "relative", bottom: "65%", left: "90%" }}
        />
      </form>
    </div>
  );
};

export default Search;
