import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import nProgress from "nprogress";
import SideBar from "./SideBar";

Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = (url) => nProgress.done();
Router.onRouteChangeError = (url) => nProgress.done();

const Layout = ({ children, activeLink, title, footer }) => {
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
        <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js" />
      </Head>
    </>
  );

  return (
    <>
      {head()}
      <div className="">
        <div className="w-full top-0 bg-gray-200 duration-300 dark:bg-zinc-900 dark:shadow-zinc-800 shadow py-2 pt-7 px-5 md:px-24 fixed">
          <div className="container flex items-center justify-between">
            <div>
              <Link href="/">
                <a>
                  <span className="text-black dark:text-white font-bold text-lg">
                    Joshua Joseph
                  </span>
                </a>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <span
                    className={
                      activeLink === "about"
                        ? "cursor-pointer pt-0.5 font-header dark:text-white text-yellow-500 dark:text-yellow-500"
                        : "cursor-pointer pt-0.5 font-header dark:text-white text-black duration-200 dark:hover:text-yellow-500 hover:text-yellow-500"
                    }
                  >
                    <Link href="/about">About</Link>
                  </span>
                </li>

                <li className="group pl-6">
                  <span
                    className={
                      activeLink === "projects"
                        ? "cursor-pointer pt-0.5 font-header dark:text-white text-yellow-500 dark:text-yellow-500"
                        : "cursor-pointer pt-0.5 font-header dark:text-white text-black duration-200 dark:hover:text-yellow-500 hover:text-yellow-500"
                    }
                  >
                    <Link href="/projects">Projects</Link>
                  </span>
                </li>

                <li className="group pl-6">
                  <span
                    className={
                      activeLink === "experience"
                        ? "cursor-pointer pt-0.5 font-header dark:text-white text-yellow-500 dark:text-yellow-500"
                        : "cursor-pointer pt-0.5 font-header dark:text-white text-black duration-200 dark:hover:text-yellow-500 hover:text-yellow-500"
                    }
                  >
                    <Link href="/experience">Experience</Link>
                  </span>
                </li>

                <li className="group pl-6">
                  <span
                    className={
                      activeLink === "contact"
                        ? "cursor-pointer pt-0.5 font-header dark:text-white text-yellow-500 dark:text-yellow-500"
                        : "cursor-pointer pt-0.5 font-header dark:text-white text-black duration-200 dark:hover:text-yellow-500 hover:text-yellow-500"
                    }
                  >
                    <Link href="/contact">Contact</Link>
                  </span>
                </li>
                <li className="absolute right-0">
                  <ThemeToggleBtn />
                </li>
              </ul>
            </div>
            <div className="block lg:hidden relative">
              <div className="absolute right-4 -top-3">
                <ThemeToggleBtn />
              </div>
              <button
                onClick={() => setMobileMenu(true)}
                className="absolute right-0 -top-6"
              >
                <i className="bx bx-menu text-4xl dark:text-white text-black"></i>
              </button>
            </div>
          </div>
        </div>

        <SideBar
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          activeLink={activeLink}
        />
      </div>
      <div className="md:px-24 px-5">{children}</div>

      {footer && (
        <div className="bg-black duration-300 p-4 md:px-12 w-full flex justify-center text-zinc-200">
          <div className="text-2xl font-semibold">
            Let's Connect
            <div className="flex justify-between">
              <a href="https://linkedin.com/in/joshua-joseph28" target="_blank">
                <div title="LinkedIn" className="text-3xl">
                  <i className="bx bxl-linkedin-square"></i>
                </div>
              </a>

              <a href="https://wa.me/+2348111994693" target="_blank">
                <div title="WhatsApp" className="text-3xl">
                  <i className="bx bxl-whatsapp"></i>
                </div>
              </a>

              <a href="https://josh-web.herokuapp.com" target="_blank">
                <div title="Website" className="text-3xl">
                  <i className="bx bxl-dribbble"></i>
                </div>
              </a>

              <a href="mailto:joshtee28@gmail.com" target="_blank">
                <div title="Email" className="text-3xl">
                  <i className="bx bx-envelope"></i>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="md:block hidden hover:cursor-pointer select-none">
          Back to top
          <i className="bx bx-fw bxs-up-arrow-alt text-indigo-500"></i>
        </div>
        <div className="md:hidden block bg-zinc-900 rounded">
          <div className="bg-zinc-900 text-2xl rounded">
            <i className="bx bx-fw bxs-up-arrow-alt bx-fade-up -mb-2 text-indigo-500"></i>
          </div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default Layout;
