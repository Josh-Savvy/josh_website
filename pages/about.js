import React from "react";
import Layout from "../components/Layout";

const About = () => {
  const ToolsImage = ({ name, alt }) => {
    return (
      <>
        <img
          src={`/static/assets/svgs/${name}.svg`}
          className="dark:bg-zinc-300 p-1 rounded-lg w-2/4"
          alt={alt}
        />
      </>
    );
  };
  return (
    <Layout activeLink="about" title="About">
      <>
        <div>
          <div className="md:flex mt-24">
            <div className="flex justify-center">
              <img
                src="/static/assets/img/blog-author.jpg"
                className="bg-red-300 rounded-xl w-3/4"
                alt=""
              />
            </div>
            <div className="">
              <div className="dark:text-zinc-200 text-zinc-800 px-5">
                <h1 className="md:text-3xl text-xl font-bold mb-2">
                  Joshua Joseph O.
                </h1>
                <p className="mb-2">
                  Software Developer; based in Lagos, Nigeria.
                </p>
                <div className="mb-2">
                  <p className="text-sm">
                    Email me:{" "}
                    <a href="mailto:joshtee28@gmail.com" className="font-bold">
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
              </div>
            </div>
          </div>
          <div className="mb-10 mt-16 border-t dark:border-zinc-700 border-zinc-300">
            <div className="mt-4 p-1 px-3 dark:text-zinc-200">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium saepe reprehenderit rem cumque quidem nostrum, autem
                neque quia inventore nisi assumenda iure exercitationem. Maiores
                recusandae a incidunt ipsum animi explicabo. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Laudantium saepe
                reprehenderit rem cumque quidem nostrum, autem neque quia
                inventore nisi assumenda iure exercitationem. Maiores recusandae
                a incidunt ipsum animi explicabo. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis deserunt officia eaque laboriosam incidunt quod ipsum
                natus nisi consequatur quisquam officiis accusamus expedita a
                ut, eum earum modi ipsam nostrum! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Magnam consequatur cum et velit
                molestiae expedita temporibus debitis recusandae molestias
                facilis dignissimos corrupti voluptas repellendus totam
                blanditiis quaerat excepturi, iusto incidunt.
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <span className="bg-yellow-600 p-3 px-4 text-white rounded-md">
                View Projects
              </span>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default About;
