import React, { useState } from "react";

const ThemeToggleBtn = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleState = (e, param) => {
    e.preventDefault();
    const bodyTagName = document.getElementsByTagName("html")[0];
    if (param === "light_mode") {
      localStorage.setItem("theme", "light");
      bodyTagName.setAttribute("class", "light");
      document
        .getElementsByTagName("body")[0]
        .setAttribute("class", "bg-gray-200");
      setDarkMode(false);
    }
    if (param === "dark_mode") {
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
      bodyTagName.setAttribute("class", "dark");
      document
        .getElementsByTagName("body")[0]
        .setAttribute("class", "bg-zinc-900");
    }
  };

  return (
    <div className="flex justify-between mr-8 -mt-3 animate-pulse">
      <div
        className="hover:cursor-pointer bg-zinc-600 rounded-full px-2 p-1 dark:block hidden"
        onClick={(e) => handleToggleState(e, "light_mode")}
      >
        <i className="bx bxs-sun dark:text-yellow-400 duration-300 text-2xl"></i>
      </div>
      <div
        className="hover:cursor-pointer bg-blue-600 rounded-full px-2 p-1 block dark:hidden duration-300"
        onClick={(e) => handleToggleState(e, "dark_mode")}
      >
        <i className="bx bxs-moon text-white text-2xl"></i>
      </div>
    </div>
  );
};
export default ThemeToggleBtn;
