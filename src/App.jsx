import { MainContext } from "./context";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import RoadMap from "./components/RoadMap";
import Article from "./components/Article";
import ShareCode from "./components/Code";
import Footer from "./components/Footer";
import SendFeedback from "./components/SendFeedback";

function App() {
  const themeLocalStorage = localStorage.getItem("selectedTheme");
  const [theme, setTheme] = useState(
    themeLocalStorage ? themeLocalStorage : "null"
  );

  useEffect(() => {
    if (localStorage.getItem("selectedTheme") != null) {
      return;
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const data = {
    theme,
    setTheme,
  };
  return (
    <MainContext.Provider value={data}>
      <div className="bg-[#FAF0E6] dark:bg-[#352F44] text-[#352F44] dark:text-[#FAF0E6] w-full flex flex-col">
        <Header />
        <Info />
        <RoadMap />
        <Article />
        <ShareCode />
        <SendFeedback />
        <Footer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
