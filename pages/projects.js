import React from "react";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <Layout activeLink="projects">
      <div>
        <div className="container py-16 md:py-20" id="portfolio">
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Notable projects I've worked on
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            <div className="bg-sky-50 shadow-lg rounded-md p-5 mx-auto transform transition-all hover:scale-105 md:mx-0">
              <a
                href="http://shopable-app.herokuapp.com/"
                target="_blank"
                className=""
              >
                <img
                  src="/static/assets/img/shopable.jpg"
                  className="w-full shadow"
                  alt="shopable-app"
                />
              </a>
              <div className="">
                <p className="font-semibold mt-2 text-xl text-center">Shopable App</p>
                <p className="text-gray-400 mt-1 text-center">
                  React | Redux | NodeJS | MongoDB | Bootstrap
                </p>
              </div>
            </div>
            <div className="bg-sky-50 shadow-lg rounded-md p-5 mx-auto transform transition-all hover:scale-105 md:mx-0">
              <a
                href="https://www.enrolledagent.com/"
                target="_blank"
                className=""
              >
                <img
                  src="/static/assets/img/enrolled.jpg"
                  className="w-full shadow"
                  alt="enrolled-agent"
                />
              </a>
              <div className="">
                <p className="font-semibold mt-2 text-xl text-center">Enrolled Agents</p>
                <p className="text-gray-400 mt-1 text-center">
                  NextJS | React | Redux | NodeJS | MySQL | Bootstrap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
