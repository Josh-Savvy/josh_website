import Link from "next/link";

const SideBar = ({ mobileMenu, setMobileMenu, activeLink }) => {
  return (
    <div
      className={
        mobileMenu
          ? "opacity-100 pointer-events-auto fixed inset-0 z-100 min-h-screen bg-black bg-opacity-80 transition-opacity lg:hidden"
          : "pointer-events-none opacity-0"
      }
      onClick={() => setMobileMenu(false)}
    >
      <div
        className="absolute right-0 h-screen w-2/3 bg-zinc-900 py-4 px-8 shadow md:w-1/3"
        style={{ zIndex: "500" }}
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={() => setMobileMenu(false)}
        >
          <img
            src="/static/assets/svgs/icon-close.svg"
            className="h-10 w-auto"
            alt=""
          />
        </button>

        <ul className="mt-12 flex flex-col">
          <li className="group pl-6 p-3">
            <span className="cursor-pointer pt-0 font-header text-white">
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
            <span className="cursor-pointer pt-0.5 font-header text-white">
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
            <span className="cursor-pointer pt-0.5 font-header text-white">
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
            <span className="cursor-pointer pt-0.5 font-header text-white">
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
  );
};

export default SideBar;
