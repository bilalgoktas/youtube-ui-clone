import React, { createContext, useEffect, useState } from "react";
import categories from "../data/categories";
import countries from "../data/countries";
import {
  firstSection,
  secondSection,
  thirdSection,
  fourthSection,
  fifthSection,
  sixthSection,
  firstQuickLinks,
  secondQuickLinks,
  smallSidebarItems,
} from "../data/sidebarLinks";
import videos from "../data/videos";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || "light"
  );

  const categoriesToDraw = categories;
  const countriesToDraw = countries;
  const sidebarLinksToDraw = {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
    firstQuickLinks,
    secondQuickLinks,
    smallSidebarItems,
  };
  const videosToDraw = videos;

  useEffect(() => {
    localStorage.setItem("currentTheme", currentTheme);
  }, [currentTheme]);

  const value = {
    currentTheme,
    setCurrentTheme,
    categoriesToDraw,
    countriesToDraw,
    sidebarLinksToDraw,
    videosToDraw,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
