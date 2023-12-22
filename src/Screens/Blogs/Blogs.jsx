import React from "react";

import Search from "../../Components/Blogf/Search";
import Trending from "../../Components/Blogf/Trending";
import BlogsOverall from "../../Components/Blogf/BlogsOverall";
import "./Blogs.css";
import Navbar from "../../Components/Blogf/layout/Navbar";
import Layout from "../Layout";

const Blogs = () => {
  return (
    <Layout>
      <Navbar />
      <Search />
      <Trending />
      <BlogsOverall />
    </Layout>
  );
};

export default Blogs;
