import React, { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./containers/home/home";

function App() {
  const [isBarsClicked, setIsBarsClicked] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        setIsBarsClicked={setIsBarsClicked}
        isBarsClicked={isBarsClicked}
      />
      <Sidebar isBarsClicked={isBarsClicked} darkTheme={darkTheme} />
      <Home isBarsClicked={isBarsClicked} darkTheme={darkTheme} />
    </div>
  );
}

export default App;
