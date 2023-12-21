import React from "react";
import { BlogData } from "../dummyData";
import BlogItem from "./BlogItem";

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsImage } from "react-icons/bs";

const Blogs = () => {
  return (
    <div className="flex mx-2 px-4 mt-5">
      <div className="flex flex-col">
        {BlogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="flex flex-col">
        <div className="mb-5">
          <p className="font-bold">Discover more</p>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Crime
          </button>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Constitution
          </button>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Legal
          </button>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Murder
          </button>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Trial
          </button>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Lorem Ipsum
          </button>
          <button className="btn border border-dark rounded-pill mx-2 my-2">
            Lorem Ipsum
          </button>
        </div>
        <div className="blog-img-end text-center pt-5 mb-5">
          <BsImage />
        </div>
        <div>
          <p className="font-bold">{BlogData[1].content}</p>
          <div className="flex justify-between">
            <div className="flex">
              <div className="text-sm">{BlogData[1].timing}</div>
              <span className="px-2"></span>
              <p className="font-bold text-black">{BlogData[1].date}</p>
            </div>
            <a href="!#">
              <MdOutlineBookmarkAdd />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
