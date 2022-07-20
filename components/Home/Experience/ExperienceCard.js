import React from "react";

const ExperienceCard = ({ position, imgUrl, company, duration }) => {
  return (
    <div
      className="mt-8 flex flex-col text-center md:flex-row md:text-left pb-8 border-b dark:border-zinc-700 border-zinc-300"
      style={{ zIndex: "-1" }}
    >
      <div className="md:w-2/5">
        <div className="flex justify-center md:justify-start">
          <span className="shrink-0">
            <img src={imgUrl} className="h-auto w-20 rounded-md mb-6 md:mb-0" alt="" />
          </span>
          <div className="relative ml-3 hidden w-full md:block">
            <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="relative flex md:pl-18">
          <div className="mt-1 flex">
            <i className="bx bxs-right-arrow hidden text-sky-600 md:block"></i>
            <div className="md:-mt-1 md:pl-8">
              <span className="block font-body font-bold text-gray-40 dark:text-white">
                {duration}
              </span>
              <span className="block pt-2 font-header text-xl font-bold text-sky-600">
                {company}, {position}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
