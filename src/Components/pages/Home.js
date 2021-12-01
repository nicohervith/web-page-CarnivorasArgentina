import React from 'react'
import acuatica1 from '../../assets/acuatica1.jpg';
import puelodic2019 from '../../assets/puelodic2019.jpg'
import  Carousel  from '../Carousel';
import venusorna from '../../assets/venusorna.jpg'
import Footer from '../Footer.jsx'


 const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="capa-sup">
        <div className="card-sup1">
          <img src={acuatica1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Plantas carnívoras acuáticas de Argentina en plena floración.
              Corrientes.
            </p>
          </div>
        </div>
        <div>
          <div className="card-text1">
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
        </div>
        <div>
          <div className="card-text1">
            <p className="card-text-p">
              Investigamos para conocer más sobre la distribución y estados de
              conservación de las especies nativas. Es decir, aquellas especies
              que crecen en estado silvestre en Argentina.
            </p>
            <p className="card-text-p">
              Divulgamos para dar a conocer las plantas que nos rodean,
              empatizar con los ecosistemas y así entender la importancia de
              cuidar la naturaleza, de la cual somos parte. Divulgamos mediante
              publicaciones, <a href="">cursos virtuales</a> y
              <a href="/capacitaciones"> capacitaciones</a> presenciales.
            </p>
          </div>
        </div>

        <div className="card-sup1">
          <img src={puelodic2019} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Educación ambiental con guardaparques y turistas en el Parque
              Nacional Lago Puelo, Chubut.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="card-venus">
        <img src={venusorna} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Venus atrapamoscas del cultivo ornamental</p>
        </div>
      </div>
      <div>
        <div className="card-text-end">
          <p className="card-text-p">
            Cultivamos porque nos encanta. Tenemos distintas especies y cruzas
            que cuidamos siguiendo nuestra política ambiental. Nuestras plantas
            están libres de agrotóxicos, no promueven la predación de especies
            silvestres y son cuidadas utilizando la menor cantidad de recursos
            no renovables.
          </p>
        </div>
      </div>
      <div>
        <div className="card-text-end">
          <p className="card-text-p">
            Te invitamos a recorrer la página, para aprender más sobre nuestro
            trabajo con las <a href="">Plantas carnívoras de Argentina</a>. Si
            querés contactarnos, no dudes en escribirnos a
            <a href=""> carnivorasargentina@gmail.com</a>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
