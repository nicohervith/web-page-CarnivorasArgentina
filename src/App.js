import NavBar from './Components/Navigation/NavBar.js'
import {Routes,Route} from 'react-router-dom';
import logo from './assets/logo.jpg';
import './App.css';
import Home from './Components/pages/Home'
import Items from "./Components/pages/Items";
import Logo from "./Components/pages/Logo";
import acuatica1 from './assets/acuatica1.jpg'
import puelodic2019 from './assets/puelodic2019.jpg'


function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <div className="capa-sup">
        <figure>
          <img src={acuatica1} className="ac1" alt="ac1" />
          <div className="capa">
            <p>
              Plantas carnívoras acuáticas de Argentina en plena floración.
              Corrientes.
            </p>
          </div>
        </figure>
          <div className="card-text">
            <p className="card-text-p">
              Las plantas carnívoras atraen, capturan y digieren a sus presas.
              Son especies fascinantes que despiertan el interés por su belleza
              y lo atractivo de su rareza. Esta atracción que despiertan es una
              gran oportunidad para acercarnos a la naturaleza y entender más
              sobre el mundo que nos rodea.
            </p>

            <p className="card-text-p">
              En el Proyecto Carnívoras Argentina hacemos investigación,
              divulgación y cultivo.
            </p>
          </div>
        <div className="card-text">
          <p className="card-text-p">
            Investigamos para conocer más sobre la distribución y estados de
            conservación de las especies nativas. Es decir, aquellas especies
            que crecen en estado silvestre en Argentina.
          </p>

          <p className="card-text-p">
            Divulgamos para dar a conocer las plantas que nos rodean, empatizar
            con los ecosistemas y así entender la importancia de cuidar la
            naturaleza, de la cual somos parte. Divulgamos mediante
            publicaciones, cursos virtuales y capacitaciones presenciales.
          </p>
        </div>
        <div className="capa-sup">
          <figure>
            <img src={puelodic2019} className="puelo" alt="puelo" />
            <div className="capa">
              <p>
                Educación ambiental con guardaparques y turistas en el Parque
                Nacional Lago Puelo, Chubut.
              </p>
            </div>
          </figure>
        </div>
      </div>

      <hr />

      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
