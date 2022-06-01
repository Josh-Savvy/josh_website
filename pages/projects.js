import React from "react";
import Layout from "../components/Layout";

const Projects = () => {
  const ProjectImageCard = ({ title, imgSrc, stack, link }) => {
    const handleStackDropdown = () => {
      if (document.getElementById("stack_dropdown").style.opacity == 0) {
        document.getElementById("stack_dropdown").style.opacity = 1;
      } else {
        document.getElementById("stack_dropdown").style.opacity = 0;
      }
    };
    return (
      <>
        <div className="mb-7">
          <img
            src={`/static/assets/img/${imgSrc}.jpg`}
            className="rounded-xl w-80 mb-4 h-52"
            alt=""
          />
          <div className="">
            <h1 className="text-lg pl-3 font-semibold">{title}</h1>
            <div
              className="flex justify-between px-7 relative"
              style={{ zIndex: "-1" }}
            >
              <span className="hover:cursor-pointer select-none stack_dropdown_btn">
                <i className="bx bxs-layer bx-fw"></i>Stack
                <ul className="absolute bg-gray-800 top-7 rounded stack_dropdown">
                  {stack &&
                    stack.map((s, i) => (
                      <li
                        className="hove:bg-zinc-700 hover:cursor-default text-zinc-200 p-2 px-4"
                        key={i}
                      >
                        {s}
                      </li>
                    ))}
                </ul>
              </span>
              <a
                href={link ? `https://${link}` : "/"}
                target="_blank"
                className="hover:cursor-pointer select-none"
              >
                <i className="bx-fw bx bx-link-external"></i> Live Preview
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <Layout activeLink="projects" footer={true} title="Projects">
      <div className="mt-20 mb-28 text-zinc-800 dark:text-zinc-200 duration-200">
        <h1 className="md:text-2xl text-xl font-bold mb-5 flex justify-center">
          Projects I've worked on
        </h1>
        <div className="flex justify-center">
          <div className="md:grid grid-cols-3 gap-4 border-t pt-12 dark:border-zinc-800 border-gray-300">
            <ProjectImageCard
              imgSrc="enrolled"
              title="Enrolled Agent - Ecommerce"
              link="enrolledagent.com"
              stack={["NextJS", "NodeJS", "Redux", "Bootstrap"]}
            />
            <ProjectImageCard
              imgSrc="shopable"
              title="Shopable - Ecommerce"
              link="shopable-app.herokuapp.com"
              stack={["React", "NodeJS", "Redux", "Bootstrap"]}
            />
            <ProjectImageCard
              imgSrc="socialmed"
              title="Social Media App"
              link="socialmed.netlify.app"
              stack={["NextJS", "NodeJS", "Typescript", "Tailwind"]}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
