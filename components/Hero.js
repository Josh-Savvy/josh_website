import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-8"
        style={{ backgroundImage: "url(/static/assets/img/bg-hero.jpg)" }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>
        <div className="ml-2">
          <div className="container relative z-30">
            <div className="flex flex-col items-center justify-center lg:flex-row hero_component">
              <div className="rounded-full border-8 border-primary shadow-xl">
                <img
                  src="/static/assets/img/blog-author.jpg"
                  className="h-32 rounded sm:h-56"
                  alt="joshua-joseph"
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                <h1 className="text-center font-bold text-4xl text-white sm:text-left sm:text-5xl md:text-6xl font-semibold">
                  Hello, I'm Joshua Joseph.
                </h1>
                <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <div className="flex justify-between mt-6">
                      <div className="sm:block hidden">
                        <i className="bx bx-chevron-right text-4xl text-yellow" />
                      </div>
                      <div className="flex items-center justify-center pt-2 pl-2 sm:justify-start sm:pt-0">
                        <a href="/" target="_blank">
                          <i className="bx bxl-github text-3xl text-white hover:text-gray-500" />
                        </a>

                        <a
                          href="https://www.linkedin.com/in/joshua-joseph28/"
                          target="_blank"
                          className="pl-4"
                        >
                          <i className="bx bxl-linkedin text-3xl text-white hover:text-blue-500" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
