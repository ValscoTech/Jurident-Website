import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const lineStyle = {
    height: "5px",
    borderWidth: "0",
    backgroundColor: "gray",
    width: "95%",
    marginLeft: "2.5%",
  };

  return (
    <div>
      <div className="d-flex justify-content-between p-4 mx-3">
        <div className="bold-content text-sm md:text-base">Monday, 15 May 2023</div>
        <div className="bold-content text-sm md:text-base">Chennai, India</div>
      </div>
      <hr style={lineStyle} />
      <div className="heading py-5 d-flex justify-content-center">
        <div className="text-center d-flex flex-column">
          <Link to="/Blogs">
            <h1 className="bold-content text-lg md:text-2xl">JURIDENT</h1>
          </Link>
          <h6 className="align-self-end text-xs md:text-sm">The Blog</h6>
        </div>
      </div>
      <hr style={lineStyle} />

      <div className="flex flex-row">
        <nav className="flex md:flex md:flex-grow justify-center space-x-1 pb-4">
          <ul className="nav flex lg:flex-row sm:flex-col flex-col justify-between lg:gap-20 sm:gap-10">
            <li className="">
              <a className="nav-link bold-content text-dark text-xs md:text-base" href="!#">
                My Feed
              </a>
            </li>
            <li className="">
              <Link to="/" className="nav-link bold-content text-dark text-xs md:text-base">
                All Blogs
              </Link>
            </li>
            <li className="">
              <a className="nav-link bold-content text-dark text-xs md:text-base" href="!#">
                Top Blogs
              </a>
            </li>
            <li className="">
              <a className="nav-link bold-content text-dark text-xs md:text-base" href="!#">
                Trending
              </a>
            </li>
            <li className="">
              <a className="nav-link bold-content text-dark text-xs md:text-base" href="!#">
                Bookmarks
              </a>
            </li>
            <li className="">
              <a className="nav-link bold-content text-dark text-xs md:text-base" href="!#">
                Unread
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <hr style={lineStyle} />
    </div>
  );
};

export default Navbar;
