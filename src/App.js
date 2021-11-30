import NavBar from './Components/Navigation/NavBar.js'
import {Routes,Route} from 'react-router-dom';
import './App.css';
import PageRoute from './Components/PageRoute'
import Home from './Components/pages/Home'




function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <PageRoute />
    </div>
  );
}

export default App;
