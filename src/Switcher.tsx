import { useEffect, useState } from "react";
import { TbSun as Sun, TbMoon as Moon } from "react-icons/tb";

export const Switcher = () => {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, []);

  const onClick = () => {
    const toggle = document.documentElement.classList.toggle("dark");
    const theme = toggle ? "dark" : "light";
    window.localStorage.setItem("theme", theme);
    setMode(theme);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-2xl mr-2 dark:text-white">
          {mode === "dark" ? <Sun /> : <Moon />}
        </span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              onClick={onClick}
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full transition-all duration-300"></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                mode === "dark" ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>
    </>
  );
};
