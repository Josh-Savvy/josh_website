import React from "react";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="mt-10 md:px-10 mb-10">
      <div className="flex justify-between">
        <h1 className="dark:text-white text-zinc-900 font-bold md:text-3xl text-xl">
          Recent Projects
        </h1>
        <Link href="/projects">
          <span className="text-md flex justify-between font-bold dark:text-zinc-200 text-black hover:cursor-pointer">
            <p className="">View more</p>
            <i
              className="bx bxs-right-arrow bxs-like bx-fade-right"
              style={{ marginTop: "5px", zIndex: "-100" }}
            ></i>
          </span>
        </Link>
      </div>
      <div className="md:grid grid-cols-2 p-2">
        <div className="px-3">
          <div className="p-3">
            <img
              src="/static/assets/img/enrolled.jpg"
              className="rounded-lg"
              alt=""
            />
            <div className="mt-2 dark:text-zinc-200 text-zinc-800 ">
              <p className="font-semibold md:text-lg text-md">
                Enrolled Agent -Ecommerce app
              </p>
              <div className="flex justify-between md:w-2/3 relative">
                <span className="hover:cursor-pointer">
                  <i className="bx bxs-layer bx-fw"></i>Stack
                </span>
                <span className="absolute top-0 opacity-0 hover:opacity-100 cursor-pointer pt-10">
                  <ul className="text-sm md:text-md bg-gray-800 bg-gray text-white p-3 px-5 rounded">
                    <li>NextJS</li>
                    <li>Node</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                  </ul>
                </span>
                <a target="_blank" href='https://enrolledagent.com'>
                  <span className="hover:cursor-pointer">
                    <i className="bx bx-fw bx-link-external"></i>Preview
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="p-3">
            <img
              src="/static/assets/img/shopable.jpg"
              className="rounded-lg"
              alt=""
            />

            <div className="mt-2 dark:text-zinc-200 text-zinc-800 ">
              <p className="font-semibold md:text-lg text-md">
                Shopable -Ecommerce app
              </p>
              <div className="flex justify-between md:w-2/3 relative">
                <span className="hover:cursor-pointer">
                  <i className="bx bxs-layer bx-fw"></i>Stack
                </span>
                <span className="absolute top-0 opacity-0 hover:opacity-100 cursor-pointer pt-10">
                  <ul className="text-sm md:text-md text-white bg-gray-800 p-3 px-5 rounded">
                    <li>React </li>
                    <li>NextJS</li>
                    <li>NodeJS</li>
                    <li>Redux</li>
                    <li>Bootstrap</li>
                  </ul>
                </span>
                <a href="https://shopable-app.com" target="_blank">
                  <span className="hover:cursor-pointer">
                    <i className="bx bx-fw bx-link-external"></i>Preview
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="px-3">
          <div className="p-3">
            <img
              src="/static/assets/img/apex-proj.jpg"
              className="rounded-lg"
              alt=""
            />
            <div className="mt-2 dark:text-zinc-200 text-zinc-800 ">
              <p className="font-semibold md:text-lg text-md">Apex Project -Landing Page</p>
              <div className="flex justify-between md:w-2/3 relative">
                <span className="hover:cursor-pointer">
                  <i className="bx bxs-layer bx-fw"></i>Stack
                </span>
                <span className="absolute top-0 opacity-0 hover:opacity-100 cursor-pointer pt-10">
                  <ul className="text-sm md:text-md bg-gray-800 p-3 px-5 rounded">
                    <li>NextJS</li>
                    <li>React</li>
                    <li>TailwindCSS</li>
                  </ul>
                </span>
                <a target="_blank" href='https://enrolledagent.com'>
                  <span className="hover:cursor-pointer">
                    <i className="bx bx-fw bx-link-external"></i>Preview
                  </span>
                </a>
              </div>
            </div> 
      </div>
    </div>
            */}

      </div >
    </div >
  );
};

export default RecentProjects;
