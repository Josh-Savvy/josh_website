import React from "react";
import Layout from "../components/Layout";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projects = () =>
{
  const ProjectImageCard = ({ title, imgSrc, stack, link }) =>
  {
    return (
      <>
        <div className="mb-7 w-full">
          <img
            src={`/static/assets/img/${imgSrc}`}
            className="rounded-xl w-80 mb-4 h-52"
            alt=""
          />
          <div className="select-none">
            <h1 className="text-lg pl-3 font-semibold">{title}</h1>
            <div className="flex justify-between px-7 relative group">
              <span className="hover:cursor-pointer -ml-4 select-none">
                <i className="bx bxs-layer bx-fw"></i>Stack
                <ul className="hidden group-hover:inline absolute left-6 bg-gray-800 top-7 rounded stack_dropdown w-full">
                  {stack &&
                    stack.map((s, i) => (
                      <li
                        className="text-zinc-200 p-2 px-3"
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
    <Layout activeLink="Projects" footer={true} title="Projects">
      <div className="mt-20 mb-28 text-zinc-800 dark:text-zinc-200 duration-200">
        <h1 className="md:text-2xl text-xl font-bold mb-5 flex justify-center">
          Projects I've worked on
        </h1>
        <div className="flex justify-center">
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <div className="md:grid grid-cols-3 gap-4 border-t pt-12 dark:border-zinc-800 border-gray-300">
              <ProjectImageCard
                imgSrc="enrolled.jpg"
                title="Enrolled Agent - Ecommerce"
                link="enrolledagent.com"
                stack={["NodeJS", "Redux", "Bootstrap"]}
              />
              <ProjectImageCard
                imgSrc="ig.png"
                title="Instagram Clone App"
                link="josh-instagram-clone.vercel.app"
                stack={["React/NextJS", "TailwindCSS"]}
              />
              <ProjectImageCard
                imgSrc="youtube.png"
                title="Youtube Clone"
                link="https://youtube-clone-client-x223.vercel.app"
                stack={["React/NextJS", "NodeJS", "Tailwind", "GSAP"]}
              />
              <ProjectImageCard
                imgSrc="mernprojec.png"
                title="Blog App - MERN stack"
                link="mernprojectclient2022.herokuapp.com"
                stack={["React/NextJS", "Bootstrap", "NodeJS"]}
              />
              <ProjectImageCard
                imgSrc="socialmed.jpg"
                title="Social Media App"
                link="socialmed.netlify.app"
                stack={["NodeJS", "Typescript", "Tailwind"]}
              />
              <ProjectImageCard
                imgSrc="shopable.jpg"
                title="Shopable - Ecommerce"
                link="shopable-app.herokuapp.com"
                stack={["React/NextJS", "NodeJS", "Redux", "Bootstrap"]}
              />
              <ProjectImageCard
                imgSrc="kachabazar-store.jpg"
                title="KachaBazzar Store (FE Contract)"
                link="geolocation-web-store.vercel.app"
                stack={["React/NextJS", "TailwindCSS"]}
              />
              {/* <ProjectImageCard
                imgSrc="apex-proj.jpg"
                title="Apex Project -Landing Page"
                link="apex-project-test.netlify.app"
                stack={["React/NextJS", "TailwindCSS"]}
              /> */}
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
