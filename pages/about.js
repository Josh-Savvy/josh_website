import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  const ToolsImage = ({ name, alt }) => {
    return (
      <>
        <img
          src={`/static/assets/svgs/${name}.svg`}
          className="bg-zinc-300 p-1 rounded-lg w-3/4 md:w-2/4"
          alt={alt}
        />
      </>
    );
  };
  return (
    <Layout activeLink="About" title="About" footer={true}>
      <>
        <div>
          <div className="md:flex justify-center mt-24">
            <div className="flex justify-center">
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                animateOnce={true}
              >
                <img
                  src="/static/assets/img/blog-author.jpg"
                  className="bg-red-300 rounded-xl w-3/4"
                  alt=""
                />
              </AnimationOnScroll>
            </div>
            <div className="">
              <div className="dark:text-zinc-200 text-zinc-800 px-5">
                <AnimationOnScroll
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                >
                  <h1 className="md:text-3xl text-xl font-bold mb-2 md:mt-0 mt-5">
                    Joshua Joseph O.
                  </h1>
                  <p className="mb-2">
                    Software Developer; based in Lagos, Nigeria.
                  </p>
                  <div className="mb-2">
                    <p className="text-sm text-black dark:text-white">
                      Send me a mail:{" "}
                      <a
                        href="mailto:joshtee28@gmail.com"
                        className="font-bold text-blue-500"
                      >
                        joshtee28@gmail.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold mb-3 text-lg">
                      Tools and skills:
                    </h1>

                    <div className="grid grid-cols-4 gap-1">
                      <ToolsImage name="nextjs" />
                      <ToolsImage name="reactjs" />
                      <ToolsImage name="nodejs" />
                      <ToolsImage name="typescript" />
                      <ToolsImage name="mongo" />
                      <ToolsImage name="express" />
                      <ToolsImage name="aws" />
                      <ToolsImage name="redux" />
                      <ToolsImage name="sass" />
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
          <div className="mb-10 mt-12 md:mt-16 border-t dark:border-zinc-700 border-zinc-300">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <div className="mt-4 p-1 px-3 dark:text-zinc-200">
                <p>
                  I'm an innovative software developer with 3+ years of
                  experience managing aspects of the development process and
                  developing dynamic web applications for small to medium-sized
                  companies, transforming the way brands interact with audiences
                  through creation of digital contents.
                  <br />
                  <br />I am confident in my ability and I'm extremely motivated
                  to constantly develop my skills and grow professionally. While
                  I have a preferred technology stack, eventually I select the
                  most excellent innovations for the work at hand and utilize my
                  experience to recognize significant design patterns. I'm also
                  an entrepreneur and a collaborative team player with excellent
                  technical abilities.
                </p>
              </div>
            </AnimationOnScroll>
            <div className="flex justify-center mt-10">
              <Link href="/projects">
                <span className="bg-yellow-600 hover:bg-yellow-700 duration-200 hover:cursor-pointer p-3 px-4 text-white rounded-md">
                  View Projects
                </span>
              </Link>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
