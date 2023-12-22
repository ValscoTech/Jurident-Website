import React from "react";
import { BlogData } from "./dyummyData";
import BlogItem from "./BlogItem";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blogs = () => {
  return (
    <div className=" flex-column flex-md-row mx-2 px-4 mt-5">
      <div className="flex flex-wrap">
        {BlogData.map((blog) => (
          <div key={blog.id} className="w-full p-6 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <BlogItem blog={blog} />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Blogs;
