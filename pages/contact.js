import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Contact = () => {
  const HireCard = ({ title, def }) => {
    return (
      <>
        <div className="bg-zinc-300 p-2 md:mb-0 mb-10 rounded-lg">
          <div className="text-lg font-semibold mb-2 flex justify-center px-5">
            {title}
          </div>
          <div className="px-5 break-words">{def}</div>
        </div>
      </>
    );
  };
  return (
    <Layout activeLink="contact" title="Contact">
      <>
        <div className="m-5 mt-28">
          <div className="mb-32">
            <h1 className="text-2xl mb-4 font-bold dark:text-white px-3">
              Why hire me?
            </h1>
            <div className="md:grid grid-cols-4 gap-8">
              <HireCard
                title="Communicative"
                def="lormedjsbn fksncm sdfiknsd fckns fk wsfconsfiub jsfoiujhwks f"
              />
              <HireCard
                title="Professional"
                def="dksjdgnbmnj,skdnlibh gjbsmndfjnliuqsjdcvkd fsdfkjednf fdkfvf"
              />
              <HireCard
                title="Collaborative"
                def="dksjdgnbmnj,skdnlibh gjbsmndfjnliuhgjbmns,mfklciluhjgbnmsnm ,flkiukhjgbmnf"
              />
              <HireCard
                title="Honest"
                def="dksjdgnbmnj,skdnlibh gjbsmndfjnliuhgjbmns,mfklciluhjgbnmsnm,fjhgjvnbsmn,jlfkicuhgbjmsdnj,flkiukhjgbmnf"
              />
            </div>
          </div>
          <div className="bg-yellow-700 p-5 rounded-lg px-4 mb-16">
            <div className="flex justify-center">
              <div className="text-white md:flex gap-20">
                <h1 className="font-semibold md:text-2xl text-xl mb-7">
                  Intrested in working with me?
                </h1>
                <div className="flex gap-8">
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
          <div className="flex justify-between px-20 text-4xl">
            <p className="text-2xl dark:text-zinc-200">
              Social links <i className="bx bx-right-arrow-alt"></i>
            </p>
            <a
              href="https://linkedin.com/in/joshua-joseph28"
              target="_blank"
              className=""
            >
              <div title="LinkedIn" className="text-blue-700 text-4xl">
                <i className="bx bxl-linkedin-square"></i>
              </div>
            </a>

            <a href="https://wa.me/+2348111994693" target="_blank" className="">
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
        </div>
      </>
    </Layout>
  );
};

export default Contact;
