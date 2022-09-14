import React, { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./containers/home/home";

function App() {

  const [isBarsClicked, setIsBarsClicked] = useState(true);

  return (
    <div >
      <Header setIsBarsClicked={setIsBarsClicked} isBarsClicked={isBarsClicked}/>
      <Sidebar isBarsClicked={isBarsClicked} />  
      <Home isBarsClicked={isBarsClicked}/>
      
      
    </div>
  );
}

export default App;
