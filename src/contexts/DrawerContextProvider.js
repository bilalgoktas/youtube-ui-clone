import React, { createContext, useState } from "react";

export const DrawerContext = createContext(null);

export const DrawerContextProvider = ({ children }) => {
  const [isThemeTogglerOpen, setIsThemeTogglerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);

  const value = {
    isThemeTogglerOpen,
    isDrawerOpen,
    isCountriesOpen,
    setIsThemeTogglerOpen,
    setIsDrawerOpen,
    setIsCountriesOpen,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
