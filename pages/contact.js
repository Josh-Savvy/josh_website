import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout activeLink="contact" title="Contact">
      <>
        <div className="container py-16 md:py-20" id="contact">
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-semibold text-black text-xl">
              Need me on a project? Let's start a conversation :)
            </p>
          </div>
          <div className="mt-6 flex flex-col justify-center sm:flex-row">
            <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-sky-600 lg:text-lg">
                (+234) 811 199 4693
              </p>
            </div>
            <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  Send me a mail
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-sky-600 lg:text-lg">
                joshtee28@gmail.com
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
