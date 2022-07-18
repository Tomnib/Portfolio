import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="theme_toggler" onClick={themetoggle}>
      <BsFillMoonStarsFill />
    </div>
  );
};

export default Themetoggle;
