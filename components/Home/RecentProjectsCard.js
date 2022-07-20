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
              style={{ marginTop: "5px" }}
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
              <div className="flex justify-between md:w-2/3">
                <span className="hover:cursor-pointer">
                  <i className="bx bxs-layer bx-fw"></i>Stack
                </span>
                <span className="text-sm hidden">
                  NextJS, React, Node, MySQL, Redux.
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
              <div className="flex justify-between md:w-2/3">
                <span className="hover:cursor-pointer">
                  <i className="bx bxs-layer bx-fw"></i>Stack
                </span>
                <span className="text-sm hidden">
                  React, Node, MongoDB, Redux.
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
      </div>
    </div>
  );
};

export default RecentProjects;
