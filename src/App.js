import styles from './App.css';
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./containers/home/home";

function App() {
  return (
    <div >
      <Header/>
      <Sidebar/>
      <Home/>
      
      
    </div>
  );
}

export default App;
