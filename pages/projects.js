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
            <a
              href="http://shopable-app.herokuapp.com/"
              target="_blank"
              className=""
            >
              <div className="bg-sky-50 shadow-lg rounded-md p-5 mx-auto transform transition-all md:hover:scale-105 md:mx-0">
                <img
                  src="/static/assets/img/shopable.jpg"
                  className="w-full shadow"
                  alt="shopable-app"
                />

                <div className="">
                  <p className="font-semibold mt-2 text-xl text-center">
                    Shopable App
                  </p>
                  <p className="text-gray-400 mt-1 text-center">
                    React | Redux | NodeJS | MongoDB | Bootstrap
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.enrolledagent.com/"
              target="_blank"
              className=""
            >
              {" "}
              <div className="bg-sky-50 shadow-lg rounded-md p-5 mx-auto transform transition-all md:hover:scale-105 md:mx-0">
                <img
                  src="/static/assets/img/enrolled.jpg"
                  className="w-full shadow"
                  alt="enrolled-agent"
                />

                <div className="">
                  <p className="font-semibold mt-2 text-xl text-center">
                    Enrolled Agents
                  </p>
                  <p className="text-gray-400 mt-1 text-center">
                    NextJS | React | Redux | NodeJS | MySQL | Bootstrap
                  </p>
                </div>
              </div>{" "}
            </a>
            <a
              href="https://socialmed.netlify.app/"
              target="_blank"
              className=""
            >
              <div className="bg-sky-50 shadow-lg rounded-md p-5 mx-auto transform transition-all md:mx-0">
                <span className="flex w-full justify-between">
                  <span
                    className="w-3/4 shadow -ml-3 h-full duration-500"
                    title="Web view"
                  >
                    <img
                      src="/static/assets/img/socialmed.jpg"
                      alt="social-media-app"
                    />
                  </span>
                  <span
                    className="w-1/4 md:ml-5 h-full ml-3 shadow duration-500"
                    title="Mobile view"
                  >
                    <img
                      src="/static/assets/img/socialmed-mobileview.jpg"
                      alt="social-media-app"
                    />
                  </span>
                </span>

                <div className="">
                  <p className="font-semibold mt-2 text-xl text-center">
                    Social Media App
                  </p>
                  <p className="text-gray-400 mt-1 text-center">
                    NextJS | React | Tailwindcss
                  </p>
                  <span className="text-sm text-gray-500">
                    (Still under development...)
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
