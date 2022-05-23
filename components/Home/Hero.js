import React from "react";
// import "boxicons";

const Hero = ({ viewCounts }) => {
  return (
    <>
      <div className="relative md:mt-40 flex justify-center">
        <div className="md:grid grid-cols-2">
          <div className="relative md:top-20 top-80 mt-8 md:-mt-4">
            <h1 className="font-semibold text-lg md:block hidden text-gray-600 dark:text-gray-300 mt-2 mb-3">
              Hello!
            </h1>
            <div className="md:grid">
              <div className="">
                <span className=" text-gray-700 dark:text-white text-2xl whitespace-nowrap font-bold md:text-4xl mb-2">
                  I'm{" "}
                  <span className="dark:text-yellow-600 text-yellow-700 text-3xl">
                    Joshua Joseph.
                  </span>
                  <br />
                  <span className="md">A Software Developer</span>
                </span>
                <span className="hidden md:block bg-teal-400 p-1 w-40 rounded-lg ml-28 mb-4"></span>
              </div>
              <span className="text-gray-500 dark:text-gray-300 duration-200">
                based in Lagos, Nigeria. I design with a minimal and beautiful
                design in mind.
              </span>
            </div>
            <div className="">
              <div className="flex mt-3">
                <p className="font-semibold text-gray-500 dark:text-gray-300">
                  Follow me:{" "}
                </p>
                <span className="ml-4  hover:cursor-pointer">
                  <i className="bx bxl-github dark:hover:text-white dark:text-gray-300 hover:text-black duration-200 text-2xl text-gray-500" />
                </span>
                <span className="ml-4  hover:cursor-pointer">
                  <i className="bx bxl-linkedin-square dark:hover:text-white dark:text-gray-300 hover:text-black duration-200 text-2xl text-gray-500" />
                </span>
                <span className="ml-4  hover:cursor-pointer">
                  <i className="bx bxl-facebook-square dark:hover:text-white dark:text-gray-300 hover:text-black duration-200 text-2xl text-gray-500" />
                </span>
              </div>
              <div className="md:flex grid justify-between md:w-1/3 mt-2">
                <span className="mr-3 bg-yellow-600 text-white select-none whitespace-nowrap px-3 py-2 rounded hover:bg-yellow-500 hover:cursor-pointer duration-200">
                  <i className="bx-fw bx bx-envelope"></i> Mail Me
                </span>
                <span className="border border-2 dark:text-white select-none whitespace-nowrap rounded border-yellow-500 md:mt-0 mt-4 py-1 px-3 hover:bg-yellow-500 hover:text-white hover:cursor-pointer duration-200">
                  <i className="bx-fw bx bx-download"></i> Download CV
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 relative md:h-full md:top-0 -ml-10 md:m-0 -top-60">
            <div className="flex justify-center md:hidden block mt-7 ml-10">
              <img
                src="/static/assets/img/blog-author.jpg"
                className="bg-yellow-200 rounded-full w-60 object-contain shadow-md md:shadow-xl shadow-gray-500 dark:shadow-gray-700"
                alt=""
              />
            </div>
            <div className="md:block hidden">
              {/* <div className="md:block hidden border border-2 p-3 rounded-full border-white w-3/4 h-full absolute"></div> */}
              <img
                src="/static/assets/img/blog-author.jpg"
                className="bg-yellow-200 dark:border-white border-yellow-500 border border-2 shadow-xl shadow-gray-500 dark:shadow-gray-700 rounded-full w-3/4 ml-20 object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
