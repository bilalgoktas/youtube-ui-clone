import React, { useState } from "react";
import Header from "./components/header/header";
import LargeSidebar from "./components/largeSidebar/largeSidebar";
import SmallSidebar from "./components/smallSidebar/smallSidebar";
import Home from "./containers/home/home";

function App() {

  const [isBarsClicked, setIsBarsClicked] = useState(true);

  return (
    <div >
      <Header setIsBarsClicked={setIsBarsClicked} isBarsClicked={isBarsClicked}/>
      {isBarsClicked ? <LargeSidebar /> : <SmallSidebar/> }
      
      <Home/>
      
      
    </div>
  );
}

export default App;
