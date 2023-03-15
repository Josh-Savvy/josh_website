import React, { useState } from "react";

const Hero = ({ viewCounts }) =>
{
  const [showAlert, setShowAlert] = useState(false);
  const handleDownload = () =>
  {
    document.getElementById("link").click();
    setShowAlert(true);
  };
  showAlert === true &&
    setTimeout(() =>
    {
      setShowAlert(false);
    }, 3000);
  return (
    <>
      <div className="relative md:mt-40 flex justify-center">
        {showAlert && (
          <div className="absolute md:-top-20 top-20 animate__animated animate__bounceInDown" style={{ zIndex: "100" }}>
            <div
              className="relative py-3 pl-4 pr-10 leading-normal font-semibold duration-300 text-green-700 bg-green-100 rounded-lg"
              role="alert"
              id="download_alert"
            >
              <i className="bx bx-cloud-download text-3xl absolute inset-y-0 left-0 flex items-center ml-4"></i>
              <p className="pl-10">Resumé download has started</p>
              <span className="absolute inset-y-0 right-0 flex items-center mr-4">
                <svg
                  className="w-4 h-4 fill-current"
                  role="button"
                  viewBox="0 0 20 20"
                  onClick={() => setShowAlert(false)}
                >
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        )}
        <div className="md:grid grid-cols-2">
          <div className="relative md:top-20 top-80 mt-4 md:-mt-4">
            <h1 className="font-semibold text-lg md:block hidden text-gray-600 dark:text-gray-300 mt-2 mb-3">
              Hello!
            </h1>
            <div className="md:grid">
              <div className="">
                <span className="text-gray-700 dark:text-white whitespace-nowrap font-bold md:text-4xl mb-2">
                  <span className="text-2xl">I'm{" "}</span>
                  <span className="dark:text-yellow-600 text-yellow-700 text-3xl">
                    Joshua Joseph.
                  </span>
                  <br />
                  <span className="md:text-xl text-lg animate__animated animate__rubberBand animate__infinite">A Software Developer</span>
                </span>
              </div>
              <span className="animate__animated animate__bounceInRight text-gray-500 dark:text-gray-300 duration-200 text-sm mt-1">
                based in Lagos, Nigeria. I create meaningful solutions, and build products with an optimized user experience.
              </span>
            </div>
            <div className="">
              <div className="flex mt-3">
                <p className="font-semibold text-gray-500 dark:text-gray-300">
                  Follow me:{" "}
                </p>
                <a
                  href="https://github.com/Josh-Savvy"
                  target="_blank"
                  className="ml-4  hover:cursor-pointer"
                >
                  <i className="bx bxl-github dark:hover:text-white dark:text-gray-300 hover:text-black duration-200 text-2xl text-gray-500" />
                </a>
                <a
                  href="https://linkedin.com/in/joshua-joseph28"
                  target="_blank"
                  className="ml-4  hover:cursor-pointer"
                >
                  <i className="bx bxl-linkedin-square dark:hover:text-white dark:text-gray-300 hover:text-black duration-200 text-2xl text-gray-500" />
                </a>
                <a href="/" className="ml-4  hover:cursor-pointer">
                  <i className="bx bxl-facebook-square dark:hover:text-white dark:text-gray-300 hover:text-black duration-200 text-2xl text-gray-500" />
                </a>
              </div>
              <div className="md:flex grid justify-between md:w-1/3 mt-2">
                <a
                  href="mailto:joshtee28@gmail.com"
                  className="mr-3 bg-yellow-600 animate__animated animate__rubberBand animate__infinite text-white select-none whitespace-nowrap px-6 py-4 rounded hover:bg-yellow-500 hover:cursor-pointer duration-200"
                >
                  <i className="bx-fw bx bx-envelope"></i> Mail Me
                </a>

                {/* <span
                  onClick={handleDownload}
                  className="border border-2 dark:text-white select-none whitespace-nowrap rounded border-yellow-500 md:mt-0 mt-4 py-2 px-3 hover:bg-yellow-500 hover:text-white hover:cursor-pointer duration-200"
                >
                  <i className="bx-fw bx bxs-download animate-bounce"></i>{" "}
                  Download CV
                  <a id="link" href="/joshcv.pdf" download hidden></a>
                </span> */}
              </div>
            </div>
          </div>
          <div className="mt-4 relative md:h-full md:top-0 -ml-10 md:m-0 -top-60">
            <div className="flex justify-center md:hidden block mt-auto ml-10 animate__animated animate__bounceIn">
              <img
                src="/static/assets/img/blog-author.jpg"
                className="bg-yellow-200 rounded-full w-60 object-contain shadow-md md:shadow-xl shadow-gray-500 dark:shadow-gray-700"
                alt=""
              />
            </div>
            <div className="md:block hidden animate__animated animate__bounceIn">
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
