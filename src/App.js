import NavBar from './Components/Navigation/NavBar.js'
import {Routes,Route} from 'react-router-dom';
import logo from './assets/logo.jpg';
import './App.css';
import Home from './Components/pages/Home'
import Items from "./Components/pages/Items";
import Logo from "./Components/pages/Logo";




function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <Home />
    </div>
  );
}

export default App;
