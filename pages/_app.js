import { useEffect } from "react";
import "../public/static/assets/css/main.css";
import "../public/static/assets/css/globals.css";
import "nprogress/nprogress.css";
import "animate.css/animate.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      let localStorageTheme = localStorage.getItem("theme");
      if (!localStorageTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const setTheme = () => {
    if (window) {
      const bodyTagName = document.getElementsByTagName("html")[0];
      let localStorageTheme = localStorage.getItem("theme");

      if (localStorageTheme === "light") {
        bodyTagName.setAttribute("class", "light");
        document
          .getElementsByTagName("body")[0]
          .setAttribute("class", "bg-gray-200");
      } else {
        bodyTagName.setAttribute("class", "dark");
        document
          .getElementsByTagName("body")[0]
          .setAttribute("class", "bg-zinc-900");
      }
    }
  };

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("class", "duration-300");
    setTheme();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
