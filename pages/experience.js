import React from "react";
import Layout from "../components/Layout";

const Experience = () => {
  return (
    <Layout activeLink="experience" title='Experience'>
      <>
        <div className="container py-16 md:py-20" id="work">
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            My work experience
          </h3>
          <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
            <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0">
                    <img
                      src="/static/assets/img/bamix.jpg"
                      className="h-auto w-20 rounded-md"
                      alt="royalgate-logo"
                    />
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-sky-600 md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">
                        Jan 2020 - Till Date
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-sky-600">
                        BAMYX TECHNOLOGIES, S
                        <span className="lowercase">oftware</span> D
                        <span className="lowercase">eveloper</span>
                      </span>
                      <div className="pt-2">
                        {/* <span className="block font-body text-black">
                          Created exceptional UI designs: designed styling,
                          colors, and interface, using figma. Designed and
                          edited templates for Next framework Partnered with
                          backend developers to create dynamic web pages using
                          vanilla Javascript, React library and NodeJs.
                          Collaborated with team on API designs.
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div class="md:w-2/5">
                <div class="flex justify-center md:justify-start">
                  <span class="shrink-0">
                    <img
                      src="/static/assets/img/hngi.jpg"
                      class="h-auto w-24"
                      alt="hngi logo"
                    />
                  </span>
                  <div class="relative ml-3 hidden w-full md:block">
                    <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-sky-600 md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">
                        Aug 2021 - Dec 2021
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-sky-600">
                        HNG internship programme, S
                        <span className="lowercase">oftware</span> D
                        <span className="lowercase">eveloper (Intern)</span>
                      </span>
                      <div className="pt-2">
                        {/* <span className="block font-body text-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim.
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span class="shrink-0">
                    <img
                      src="/static/assets/img/royalgate.jpg"
                      className="h-auto w-20"
                      alt="royalgate-logo"
                    />
                  </span>
                  <div class="relative ml-3 hidden w-full md:block">
                    <span class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div class="md:w-3/5">
                <div class="relative flex md:pl-18">
                  <span class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div class="mt-1 flex">
                    <i class="bx bxs-right-arrow hidden text-sky-600 md:block"></i>
                    <div class="md:-mt-1 md:pl-8">
                      <span class="block font-body font-bold text-grey-40">
                        Jan 2017 - Jan 2020
                      </span>
                      <span class="block pt-2 font-header text-xl font-bold uppercase text-sky-600">
                        RoyalGates Technology, G
                        <span className="lowercase">raphics</span> D
                        <span className="lowercase">esigner</span>
                      </span>
                      <div class="pt-2">
                        {/* <span class="block font-body text-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum mattis felis vitae risus pulvinar
                          tincidunt. Nam ac venenatis enim.
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Experience;
