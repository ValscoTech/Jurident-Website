import React from "react";

import Search from "../../Components/Blogf/Search";
import Trending from "../../Components/Blogf/Trending";
import BlogsOverall from "../../Components/Blogf/BlogsOverall";
import "./Blogs.css";
import Navbar from "../../Components/Blogf/layout/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Trending />
      <BlogsOverall />
    </div>
  );
};

export default Blogs;
