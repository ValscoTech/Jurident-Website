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

      <div className="ml-4 flex blog-side-section mt-5 w-full">
        <div className="mb-5 w-full md:w-1/2 px-4 md:px-12">
          <p className="font-bold pb-4 lg:px-8">Discover more</p>
          <div className="flex flex-wrap gap-3 lg:px-8">
            <button className="border bg-[#010125] text-white border-dark rounded-full px-3 py-1">
              Crime
            </button>
            <button className="border bg-[#010125] text-white border-dark rounded-full px-3 py-1">
              Constitution
            </button>
            <button className="border bg-[#010125] text-white border-dark rounded-full px-3 py-1">
              Legal
            </button>
            <button className="border bg-[#010125] text-white border-dark rounded-full px-3 py-1">
              Lorem
            </button>
            <button className="border bg-[#010125] text-white border-dark rounded-full px-3 py-1">
              Murder
            </button>
            <button className="border bg-[#010125] text-white border-dark rounded-full px-3 py-1">
              Trial
            </button>
          </div>
        </div>

        <section className="flex flex-col items-stretch px-4 md:px-5 w-full md:w-1/2">
          <div className="flex flex-col md:flex-row justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
            <div className="flex-grow flex-col items-stretch">
              <h2 className="text-black text-2xl font-semibold leading-6 tracking-tight">
                Follow us on
              </h2>
              <div className="flex items-stretch gap-5 mt-7 max-md:justify-center">
                <a
                  href="..."
                  className="aspect-[1.12] object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&"
                    alt="Social Media Icon"
                  />
                </a>
                <a
                  href="https://cdn.builder.io/api/v1/image/assets/TEMP/33d26239-5955-4877-991c-316bdb6140bf?apiKey=43fb8e14405a4c269a4c04bced08c304&"
                  className="aspect-[1.03] object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d26239-5955-4877-991c-316bdb6140bf?apiKey=43fb8e14405a4c269a4c04bced08c304&"
                    alt="Social Media Icon"
                  />
                </a>
                <a
                  href="https://cdn.builder.io/api/v1/image/assets/TEMP/8fbcb0e6-96d7-41e4-95a2-5e57389526a9?apiKey=43fb8e14405a4c269a4c04bced08c304&"
                  className="aspect-[1.03] object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fbcb0e6-96d7-41e4-95a2-5e57389526a9?apiKey=43fb8e14405a4c269a4c04bced08c304&"
                    alt="Social Media Icon"
                  />
                </a>
              </div>
            </div>

            <div className="flex-grow flex-col items-stretch mt-4 md:mt-0">
              <h2 className="text-black text-2xl font-semibold leading-7 whitespace-nowrap">
                Join Our Newsletter
              </h2>
              <form>
                <div className="bg-neutral-50 flex items-center justify-between md:gap-5 mt-2 md:mt-8 pl-2.5">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="border border-gray-300 focus:outline-none p-4 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                    <button className="bg-gray-700 text-white p-2 rounded-r hover:bg-gray-600 focus:outline-none">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <h2 className="text-slate-950 text-2xl font-semibold leading-6 tracking-tight w-full -mr-5 max-md:max-w-full">
            Contact Us
          </h2>

          <div className="items-stretch bg-neutral-50 flex flex-col mt-2 md:mt-5 self-start max-md:-ml-1">
            <address className="text-slate-950 text-base font-medium leading-8">
              <span className="font-semibold">
                E8/16, ABC, CHENNAI <br /> TAMILNADU, India, 46203
              </span>
              <span className="font-medium">9</span>
            </address>
            <div className="text-slate-950 text-base font-semibold leading-8 mt-2 md:mt-7">
              <a href="mailto:info@jurident.com">info@jurident.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
