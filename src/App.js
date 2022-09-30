import React, { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./containers/home/home";
import AppContextProvider from "./contexts/AppContextProvider";

function App() {
  const [isBarsClicked, setIsBarsClicked] = useState(true);
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <AppContextProvider>
      <Header
        setIsBarsClicked={setIsBarsClicked}
        isBarsClicked={isBarsClicked}
      />
      <Sidebar
        isBarsClicked={isBarsClicked}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <Home isBarsClicked={isBarsClicked} />
    </AppContextProvider>
  );
}

export default App;
