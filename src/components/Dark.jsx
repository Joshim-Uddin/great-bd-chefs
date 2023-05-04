import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Dark = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "dark" : "light");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <DarkModeSwitch
      style={{ marginBottom: "0", color: "white" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}
    />
  );
};

export default Dark;
