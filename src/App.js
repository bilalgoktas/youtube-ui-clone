import React, { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./containers/home/home";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

function App() {
  const [isBarsClicked, setIsBarsClicked] = useState(true);
  return (
    <ThemeContextProvider>
      <Header
        setIsBarsClicked={setIsBarsClicked}
        isBarsClicked={isBarsClicked}
      />
      <Sidebar isBarsClicked={isBarsClicked} />
      <Home isBarsClicked={isBarsClicked} />
    </ThemeContextProvider>
  );
}

export default App;
