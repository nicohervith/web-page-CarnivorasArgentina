import NavBar from './Components/Navigation/NavBar.js'
import {Routes,Route} from 'react-router-dom';
import './App.css';
import PageRoute from './Components/PageRoute'
import Home from './Components/pages/Home'
import SocialBar from './Components/SocialBar.jsx';




function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialBar/>
      <hr />
      <PageRoute />
    </div>
  );
}

export default App;
