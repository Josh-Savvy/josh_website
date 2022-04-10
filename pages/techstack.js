import React from "react";
import Layout from "../components/Layout";

const TechStack = () => {
  return (
    <Layout activeLink="tech-stack">
      <div>
        <div className="container py-16 md:py-20" id="services">
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            The technologies I use
          </h3>
          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img src="/static/assets/svgs/html.svg" alt="html-icon" />
                </div>
                <div className="block group-hover:hidden">
                  <img src="/static/assets/svgs/html.svg" alt="html-icon" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  HTML
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/css.svg"
                    className="h-24"
                    alt="css3-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/css.svg"
                    className="h-24"
                    alt="css3-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  CSS3
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img src="/static/assets/svgs/js.svg" alt="js-icon" />
                </div>
                <div className="block group-hover:hidden">
                  <img src="/static/assets/svgs/js.svg" alt="js-icon" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  JAVASCRIPT
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/reactjs.svg"
                    className="h-24"
                    alt="reactjs-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/reactjs.svg"
                    className="h-24"
                    alt="reactjs-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  REACT
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/nodejs.svg"
                    className="h-24"
                    alt="nodejs-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/nodejs.svg"
                    className="h-24"
                    alt="nodejs-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  nodejs
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/aws.svg"
                    className="h-24"
                    alt="aws-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/aws.svg"
                    className="h-24"
                    alt="aws-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  s3 | ses
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/nextjs.svg"
                    className="h-24"
                    alt="nextjs-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/nextjs.svg"
                    className="h-24"
                    alt="nextjs-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  nextjs
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/github.svg"
                    className="h-24"
                    alt="github-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/github.svg"
                    className="h-24"
                    alt="github-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  nextjs
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/typescript.svg"
                    className="h-24"
                    alt="typescript-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/typescript.svg"
                    className="h-24"
                    alt="typescript-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  typescript
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/mongo.svg"
                    className="h-24"
                    alt="mongodb-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/mongo.svg"
                    className="h-24"
                    alt="mongodb-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  mongodb
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/mysql.svg"
                    className="h-28"
                    alt="mysql-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/mysql.svg"
                    className="h-28"
                    alt="mysql-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  mysql
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/ejs.svg"
                    className="h-24"
                    alt="ejs-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/ejs.svg"
                    className="h-24"
                    alt="ejs-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  EJS
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/sass.svg"
                    className="h-24"
                    alt="sass-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/sass.svg"
                    className="h-24"
                    alt="sass-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  sass
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/tailwind.svg"
                    className="h-24"
                    alt="tailwind-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/tailwind.svg"
                    className="h-24"
                    alt="tailwind-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  tailwind
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/jquery.svg"
                    className="h-24"
                    alt="jquery-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/jquery.svg"
                    className="h-24"
                    alt="jquery-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  jquery
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/redux.svg"
                    className="h-24"
                    alt="redux-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/redux.svg"
                    className="h-24"
                    alt="redux-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  redux
                </h3>
              </div>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-sky-600">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/static/assets/svgs/bootstrap.svg"
                    className="h-24"
                    alt="bootstrap-icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/static/assets/svgs/bootstrap.svg"
                    className="h-24"
                    alt="bootstrap-icon"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-sky-600 group-hover:text-white lg:text-2xl">
                  bootstrap
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TechStack;
