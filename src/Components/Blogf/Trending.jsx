import React from "react";
import  {TrendingData}  from "./dyummyData";
import TrendingItem from "../Blogf/TrendingItem";
import  dhoni  from "../../Assets/BlogF/dhoni.jpg";

const Trending = () => {
  return (
    <div>
      <div className="trending-grid flex flex-col mx-2 px-4">
        <div className="flex flex-col md:flex-row">
          <img src={dhoni} alt="Dhoni" className="w-full md:w-1/5 mb-4 md:mb-0 md:mr-8" />
          <div className="flex flex-col">
            {TrendingData.slice(0, 2).map((trending) => (
              <TrendingItem key={trending.id} trending={trending} className="text-xs md:text-base" />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {TrendingData.slice(2).map((trending) => (
            <TrendingItem key={trending.id} trending={trending} className="text-xs md:text-base" />
          ))}
        </div>
      </div>
      <hr style={line_style} />
    </div>
  );
};

const line_style = {
  height: "5px",
  borderWidth: "0",
  color: "gray",
  marginLeft: "3%",
  backgroundColor: "gray",
  width: "94%",
};

export default Trending;
