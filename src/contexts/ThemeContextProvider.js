import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("currentTheme", currentTheme);
  }, [currentTheme]);

  const value = {
    currentTheme,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
