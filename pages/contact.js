import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  const HireCard = ({ title, def }) => {
    return (
      <>
        <div className="bg-zinc-300 p-2 md:mb-0 mb-10 rounded-lg">
          <div className="text-lg font-semibold mb-2 flex justify-center px-5">
            {title}
          </div>
          <div className="px-4 break-words">{def}</div>
        </div>
      </>
    );
  };
  return (
    <Layout activeLink="Contact" title="Contact">
      <>
        <div className="mt-28 mb-10">
          <div className="mb-32">
            <h1 className="text-2xl mb-4 font-bold dark:text-white px-3">
              Why hire me?
            </h1>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <div className="md:grid grid-cols-4 gap-8">
                <HireCard
                  title="Communicative"
                  def="I believe good communication improves the overall efficiency of processes and projects.
                 My communication skills are second to none, and this has increased client management. 
                 I also believe feedback, sharing ideas and knowledge are the keys to effective software development."
                />
                <HireCard
                  title="Professional"
                  def="I understand problems clearly, break them down into hypotheses, and propose solutions in a coherent manner. I understand concepts quickly, or ask the right questions to help make them clear, 
                and sometimes, I don't even need to have everything written down in a specifications document to develop a software or applications."
                />
                <HireCard
                  title="Collaborative"
                  def="I have worked with companies to produce elegnant and amazing websites for consumers to enjoy."
                />
                <HireCard
                  title="Honest"
                  def="I chose a career in software development because I find satisfaction in helping consumers, companies and organizaions. I provide solutions the need for easy and access."
                />
              </div>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
            <div className="bg-yellow-700 p-5 rounded-lg px-4 mb-16">
              <div className="md:flex justify-center">
                <div className="text-white md:flex gap-20">
                  <h1 className="font-semibold md:text-2xl whitespace-nowrap mb-7">
                    Intrested in working with me?
                  </h1>
                  <div className="md:flex flex-cols-2 gap-8">
                    <Link href="mailto:joshtee28@gmail.com">
                      <button className="bg-zinc-200 hover:bg-white p-4 duration-200 rounded-lg text-black mb-4 md:mb-0">
                        <i className="bx bx-fw bxs-envelope"></i> Email me
                      </button>
                    </Link>
                    <Link href="/projects">
                      <button className="hover:bg-white text-white border border-gray-100 p-4 duration-200 rounded-lg hover:text-black mb-4 md:mb-0">
                        <i className="bx bx-fw bxs-layer"></i> See More projects
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <div className="flex justify-between gap-1 text-4xl">
              <a
                href="https://linkedin.com/in/joshua-joseph28"
                target="_blank"
                className=""
              >
                <div title="LinkedIn" className="text-blue-700 text-4xl">
                  <i className="bx bxl-linkedin-square"></i>
                </div>
              </a>

              <a
                href="https://wa.me/+2348111994693"
                target="_blank"
                className=""
              >
                <div
                  title="WhatsApp"
                  className="dark:text-green-500 text-green-700 text-4xl"
                >
                  <i className="bx bxl-whatsapp"></i>
                </div>
              </a>

              <a
                href="https://josh-web.herokuapp.com"
                target="_blank"
                className=""
              >
                <div
                  title="Website"
                  className="dark:hover:text-yellow-500 dark:text-yellow-700 text-4xl"
                >
                  <i className="bx bxl-dribbble"></i>
                </div>
              </a>

              <a
                href="https://github.com/Josh-Savyy"
                target="_blank"
                className=""
              >
                <div
                  title="Github"
                  className="dark:hover:text-yellow-500 dark:text-white text-4xl"
                >
                  <i className="bx bxl-github"></i>
                </div>
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
