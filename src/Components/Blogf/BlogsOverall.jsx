import React from "react";
import { BlogData } from "./dyummyData";
import BlogItem from "./BlogItem";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blogs = () => {
  return (
    <div className=" flex-column flex-md-row mx-2 px-4 mt-5">
      <div className="flex flex-wrap">
        {BlogData.map((blog) => (
          <div key={blog.id} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <BlogItem blog={blog} />
          </div>
        ))}
      </div>

      <div className="ml-4 flex flex-col md:flex-row blog-side-section mt-5 w-full">
      
        <div className="mb-5 w-full md:w-1/2 px-4 md:px-24 pr-4 md:pr-32">
          <p className="bold-content pb-8 lg:pr-48 lg:px-16">Discover more</p>
          {/* <div className="flex flex-wrap gap-2 md:gap-16"> */}
          <div>
            <div className="flex flex-col gap-16 lg:pr-48 lg:px-16">

              <div className="flex gap-5 ">
                <div className=" col-auto mb-2">
                  <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Crime</button>
                </div>
                <div className="col-auto mb-2">
                  <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Constitution</button>
                </div>
                <div className="col-auto mb-2">
                  <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Legal</button>
                </div>
              </div>

              <div className="flex  gap-5">
                <div className="col-auto mb-2">
                  <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Lorem</button>
                </div>
                <div className="col-auto mb-2">
                  <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Murder</button>
                </div>
                <div className="col-auto mb-2">
                  <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Trial</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <section className="flex flex-col items-stretch px-4 md:px-5">
          <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-5 self-start max-md:max-w-full max-md:flex-wrap">
            <div className="flex-grow md:flex-basis-0 flex-col items-stretch">
              <h2 className="text-black text-2xl font-semibold leading-6 tracking-tight">
                Follow us on
              </h2>
              <div className="flex items-stretch justify-between gap-5 mt-7 max-md:justify-center">
                <a
                  href="..."
                  className="aspect-[1.12] object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&" alt="Social Media Icon"
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

            <div className="self-stretch md:flex-grow md:flex-basis-0 flex-col items-stretch mt-4 md:mt-0">
              <h2 className="text-black text-2xl font-semibold leading-7 whitespace-nowrap">
                Join Our Newsletter
              </h2>
              <form>
                <div className="rounded shadow-sm bg-neutral-50 flex items-center justify-between gap-2 md:gap-5 mt-2 md:mt-8 pl-2.5">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 rounded-l focus:outline-none focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                    <button
                      className="bg-gray-700 text-white p-2 rounded-r hover:bg-gray-600 focus:outline-none"
                    >
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













{/* <div className="ml-4 d-flex flex-row blog-side-section mt-5 w-full">
      <div className="mb-5 w-full md:w-1/2 px-24 pr-32">
  <p className="bold-content pb-6">Discover more</p>
  <div className="flex flex-wrap gap-16">
            <div className=" col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Crime</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Constitution</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Legal</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Lorem</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Murder</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Trial</button>
            </div>
  </div>
</div>

      
        <section className="flex flex-col items-stretch px-5">
      <div className="flex justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <h2 className="text-black text-2xl font-semibold leading-6 tracking-tight">
            Follow us on
          </h2>
          <div className="flex items-stretch justify-between gap-5 mt-7 max-md:justify-center">
            <a
              href="..."
              className="aspect-[1.12] object-contain object-center w-[38px] overflow-hidden shrink-0 max-w-full"
            >
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0f6fa41-2d5e-4bcc-b44f-09b594d02c2a?apiKey=43fb8e14405a4c269a4c04bced08c304&"alt="Social Media Icon"
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
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
          <h2 className="text-black text-2xl font-semibold leading-7 whitespace-nowrap">
            Join Our Newsletter
          </h2>
          <form>
            <div className="rounded shadow-sm bg-neutral-50 flex items-center justify-between gap-5 mt-8 pl-2.5">
              
              <div className="flex items-center">
  <input
    type="text"
    className="border border-gray-300 p-2 rounded-l focus:outline-none focus:border-blue-500"
    placeholder="Enter your email"
  />
  <button
    className="bg-gray-700 text-white p-2 rounded-r hover:bg-gray-600 focus:outline-none"
  >
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
      <div className="items-stretch bg-neutral-50 flex w-[255px] max-w-full flex-col mt-5 self-start max-md:-ml-1">
        <address className="text-slate-950 text-base font-medium leading-8">
          <span className="font-semibold">
            E8/16, ABC, CHENNAI <br /> TAMILNADU, India, 46203
          </span>
          <span className="font-medium">9</span>
        </address>
        <div className="text-slate-950 text-base font-semibold leading-8 mt-7">
          <a href="mailto:info@jurident.com">info@jurident.com</a>
        </div>
      </div>
    </section>


      </div> */}
