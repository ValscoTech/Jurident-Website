import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const BlogItem = ({ blog }) => {
  return (
    <div className="mb-3 md:flex m-2">
      <div className="md:flex-shrink-0 md:w-1/3 md:pr-4">
        {/* Blog Image */}
        <div className="flex flex-col w-500 mr-1">
          <div
            className="blog-img text-center p-5 mb-5"
            style={{ backgroundColor: "#f2f2f2" }} // Set your background color here
          > 
          </div>
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="bold-content flex items-center">
          <BiUserCircle />
          <div className="mx-3">{blog.author}</div>
        </div>
        <Link to={`/Blogs/${blog.topic}`} className="blog-heading">
          {blog.heading}
        </Link>
        <div className="">
          <Link to={`/Blogs/${blog.topic}`} className="blog-content">
            {blog.content}
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <p className="lighter-text-content">{blog.timing}</p>
            <span className="px-2"></span>
            <p className="bold-content text-dark">{blog.date}</p>
          </div>
          <a href="!#">
            <MdOutlineBookmarkAdd />
          </a>
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogItem;
