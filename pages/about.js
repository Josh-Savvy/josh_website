import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout activeLink="about" title="About">
      <>
        <div className="bg-grey-50 lg:p-2 lg:mt-0 mt-10" id="about">
          <div className="lg:m-10 lg:px-24">
            <div className="container flex flex-col justify-between items-center py-16 md:py-20">
              <div className="rounded-full border-8 border-sky-500 shadow-2xl">
                <img
                  src="/static/assets/img/blog-author.jpg"
                  className="rounded-full sm:h-56"
                  alt="joshua-joseph"
                />
              </div>
              <div className="w-full text-center sm:w-3/4 lg:w-4/5 lg:text-center">
                <h4 className="pt-6 font-header text-xl font-bold text-black sm:text-2xl lg:text-3xl">
                  I'm Joshua Joseph, a Software Developer,
                </h4>
                <p className="pt-3 font-body leading-relaxed text-grey-20">
                  <span className="text-black font-semibold">from Lagos, Nigeria.</span> I'm
                  an innovative software developer with some years of experience
                  managing aspects of the development process and developing
                  dynamic web applications for small to medium-sized companies,
                  transforming the way brands interact with audiences through
                  creation of digital contents. Entrepreneurial at heart and a
                  team player recognized for impassioned approach and colorful
                  ideas. I am confident in my ability and I'm extremely
                  motivated to constantly develop my skills and grow
                  professionally.
                </p>
                <div className="flex justify-center pt-6">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-md font-semibold uppercase text-grey-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-3xl text-sky-600"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pl-2 sm:justify-start pt-0">
                    <a href="/">
                      <i className="bx bxl-github text-4xl text-sky-600 hover:text-gray-600"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joshua-joseph28/"
                      className="pl-4"
                    >
                      <i className="bx bxl-linkedin text-4xl text-sky-600 hover:text-gray-600"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="rounded-full border-8 border-sky-500 shadow-2xl">
                <img
                  src="/static/assets/img/blog-author.jpg"
                  className="rounded-full sm:h-56"
                  alt="joshua-joseph"
                />
              </div> */}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
