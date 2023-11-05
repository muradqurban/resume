import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import React,{ useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { changeTheme } from "@/store";
import Image from "next/image";

const Header = () => {
    const theme = useSelector((state:any)=>state.theme.theme)

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);


    const handleThemeSwitch = () => {
      if(theme === "dark") {
        changeTheme("light");
      } else if(theme === "light") {
        changeTheme("dark");

      }
    };
    const [menu, setMenu] = useState("close");
    const handleMenuSwitch = () => {
        setMenu(menu === "close" ? "open" : "close");
    };
  return (
    <div
      className="bg-gradient-to-bl from-indigo-300 via-cyan-600 to-purple-600 dark:bg-gradient-to-tr
     p-5 shadow md:flex md:items-center md:justify-between sticky top-0 z-[1] h-[70px]"
    >
      <div className="flex justify-between items-center">
        <span className="text-2xl cursor-pointer">
          <Image
            width={200}
            height={200}
            alt={"logo"}
            src="/assets/img/Logo.png"
            className="h-11 inline hover:scale-105 duration-300"
          />
        </span>
        <span
          className="menu md:hidden cursor-pointer duration-500 text-black"
          onClick={handleMenuSwitch}
        >
          {menu === "close" ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineClose size={30} />
          )}
        </span>
      </div>
      <div>
        <ul
          className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white dark:bg-[#27374D] md:bg-inherit md:dark:bg-inherit
          dark:text-white md:dark:text-inherit w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7
          ${
            menu === "close"
              ? "opacity-0 top-[-400px]"
              : "opacity-100 top-[70px]"
          } md:opacity-100 transition-all easy-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-indigo-500 duration-500 cursor-pointer"
              to="info"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Haqqımda
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-indigo-500 duration-500 cursor-pointer"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Yol xəritəm
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-indigo-500 duration-500 cursor-pointer"
              to="article"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ətraflı
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-indigo-500 duration-500 cursor-pointer"
              to="code"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Kodlarım
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              className="text-xl hover:text-indigo-800 duration-200"
              to="feedback"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Feedback
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            {" "}
            <button
              className="flex flex-row items-center gap-2 text-xl hover:text-indigo-500 duration-500"
              onClick={handleThemeSwitch}
            >
              {" "}
              Mode
              {theme === "light" ? <MdDarkMode /> : <MdWbSunny />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
