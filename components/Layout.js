import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Layout = ({ children, activeLink, title }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const head = () => (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <title>Joshua Joseph | {title} </title>
        <meta property="og:title" content="Joshua Joseph | Homepage" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="//" />
        <meta property="og:url" content="//" />
        <meta name="description" content="Joshua Joseph's Portfolio" />
        <link
          rel="icon"
          type="image/png"
          href="/static/assets/img/favicon.ico"
        />
        <meta name="theme-color" content="#5540af" />
        <meta property="og:site_name" content="Joshua Joseph's Portfolio" />
        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          crossOrigin="anonymous"
          href="/static/assets/styles/main.min.css"
          rel="stylesheet"
        />
      </Head>
    </>
  );

  const toggleMobileMenu = (value) => {
    if (value === "open") {
      setMobileMenu(true);
    }
    if (value === "close") {
      setMobileMenu(false);
    }
  };

  return (
    <>
      {head()}
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5 fixed bg-sky-600 shadow-lg">
          <div className="container flex items-center justify-between">
            <div>
              <Link href="/">
                <a>
                  <span className="text-white text-4xl font-bold">
                    JOSH
                    <span className="text-3xl text-lime-400">.</span>
                  </span>
                </a>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                    <Link href="/about">About</Link>
                  </span>

                  <span
                    className={
                      activeLink === "about"
                        ? "block h-0.5 w-full bg-yellow"
                        : "block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                    }
                  ></span>
                </li>

                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                    <Link href="/techstack">Tech-Stack</Link>
                  </span>

                  <span
                    className={
                      activeLink === "tech-stack"
                        ? "block h-0.5 w-full bg-yellow"
                        : "block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                    }
                  ></span>
                </li>

                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                    <Link href="/projects">Projects</Link>
                  </span>

                  <span
                    className={
                      activeLink === "projects"
                        ? "block h-0.5 w-full bg-yellow"
                        : "block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                    }
                  ></span>
                </li>

                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                    <Link href="/experience">Experience</Link>
                  </span>

                  <span
                    className={
                      activeLink === "experience"
                        ? "block h-0.5 w-full bg-yellow"
                        : "block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                    }
                  ></span>
                </li>

                <li className="group pl-6">
                  <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                    <Link href="/contact">Contact</Link>
                  </span>

                  <span
                    className={
                      activeLink === "contact"
                        ? "block h-0.5 w-full bg-yellow"
                        : "block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                    }
                  ></span>
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button onClick={() => toggleMobileMenu("open")}>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            mobileMenu
              ? "opacity-100 pointer-events-auto fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden"
              : "pointer-events-none opacity-0 fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden"
          }
          onClick={() => toggleMobileMenu("close")}
        >
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={() => toggleMobileMenu("close")}
            >
              <img
                src="/static/assets/svgs/icon-close.svg"
                className="h-10 w-auto"
                alt=""
              />
            </button>

            <ul className="mt-8 flex flex-col">
              <li className="group pl-6 p-3">
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                  <Link href="/about">About</Link>
                </span>

                <span
                  className={
                    activeLink === "about"
                      ? "block h-0.5 w-1/2 bg-yellow"
                      : "block h-0.5 w-1/2 bg-transparent group-hover:bg-yellow"
                  }
                ></span>
              </li>
              <li className="group pl-6 p-3">
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                  <Link href="/techstack">tech-stack</Link>
                </span>

                <span
                  className={
                    activeLink === "tech-stack"
                      ? "block h-0.5 w-1/2 bg-yellow"
                      : "block h-0.5 w-1/2 bg-transparent group-hover:bg-yellow"
                  }
                ></span>
              </li>
              <li className="group pl-6 p-3">
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                  <Link href="/projects">projects</Link>
                </span>

                <span
                  className={
                    activeLink === "projects"
                      ? "block h-0.5 w-1/2 bg-yellow"
                      : "block h-0.5 w-1/2 bg-transparent group-hover:bg-yellow"
                  }
                ></span>
              </li>
              <li className="group pl-6 p-3">
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                  <Link href="/experience">experience</Link>
                </span>

                <span
                  className={
                    activeLink === "experience"
                      ? "block h-0.5 w-1/2 bg-yellow"
                      : "block h-0.5 w-1/2 bg-transparent group-hover:bg-yellow"
                  }
                ></span>
              </li>
              <li className="group pl-6 p-3">
                <span className="cursor-pointer pt-0.5 font-header font-bold uppercase text-white">
                  <Link href="/contact">contact</Link>
                </span>

                <span
                  className={
                    activeLink === "contact"
                      ? "block h-0.5 w-1/2 bg-yellow"
                      : "block h-0.5 w-1/2 bg-transparent group-hover:bg-yellow"
                  }
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default Layout;
