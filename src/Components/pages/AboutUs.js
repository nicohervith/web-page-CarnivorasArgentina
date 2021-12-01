import React from 'react'
import Footer from '../Footer'
import inv1 from '../../assets/inv1.jpg'
import inv2 from "../../assets/inv2.jpg";
import inv3 from "../../assets/inv3.jpg";
import inv4 from "../../assets/inv4.png";
import me from "../../assets/me.jpg";
import me2 from "../../assets/me2.jpg";


 const AboutUs = () => {
  return (
    <div>
      <div className="card-text-end2">
        <h2 class="card-title">Sobre Nosotros</h2>
        <p class="card-text-p2">
          Este proyecto es enriquecido desde su inicio con múltiples actores
          sociales que van aportando su pasión y expertiz. Cultivadores,
          fotógrafos , guardaparques, naturalistas, profesionales del ambiente y
          divulgadores permiten una combinación de pasiones y conocimientos, que
          logran la sinergia necesaria para entender más sobre las plantas
          carnívoras y su conservación.
        </p>
      </div>
      <div className="capa-sup2">
        <div className="card-sup2">
          <img src={inv1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              María Victoria Coppini y el equipo de «Adoptá un Bosque Panamá»
              relevando las plantas carnívoras del Cerro Chucantí, en Panamá.
            </p>
          </div>
        </div>

        <div className="card-sup2">
          <img src={inv2} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Florencia Reta, Ignacio Vergara y Kevin Isaías Vergara buscando
              las plantas carnívoras nativas de Corrientes.
            </p>
          </div>
        </div>

        <div className="card-sup2">
          <img src={inv3} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Mariano Rubén Saviello y José Antonio Radins tras encontrar
              Droseras nativas de Misiones.
            </p>
          </div>
        </div>

        <div className="card-sup2">
          <img src={inv4} className="card-img-top" alt="..." />
          <div className="card-body">
            <p></p>
            <br />
            <p className="card-text">
              Pablo Schepens, evaluando los estados de conservación de las
              nativas para UICN.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h2 class="card-title2">Sobre mi</h2>
      <div className="capa-sup2">
        <div className="card-textp2">
          <p className="card-text-p">
            Soy Federico Ezequiel Parrilli. Nací en Buenos Aires y la jungla de
            cemento me incentivó a llenar de verde cada espacio que pude.
            Primero, con cualquier planta que haga fotosíntesis y después con un
            notorio enfoque en las especies nativas. Hoy vivo en Puerto Madryn,
            Chubut.
          </p>
          <p className="card-text-p">
            Cultivo plantas carnívoras desde 2008 y viajo por los humedales de
            Argentina para fotografiar las plantas carnívoras en su hábitat
            natural e investigar sobre la distribución y estados de
            conservación.
          </p>
        </div>

        <div class="card-sup-me">
          <img src={me} class="card-img" alt="..." />
        </div>

        <div className="card-sup-me2">
          <img src={me2} className="card-img-top" alt="..." />
        </div>

        <div className="card-textp2">
          <p className="card-text-p">
            Soy Licenciado en Gestión Ambiental de la Universidad Centro de
            Altos Estudios en Ciencias Exactas (CAECE); Diplomado en la Gestión
            Integral del Cambio Climático y Diplomado en Derecho ambiental y
            Gestión de Áreas Naturales Protegidas. Tuve la suerte de dar charlas
            y capacitar en Instituciones públicas como la Administración de
            Parques Nacionales (APN), el Museo Argentino de Ciencias Naturales
            Bernardino Rivadavia (MACN), el Instituto Nacional de Tecnología
            Agropecuaria (INTA) y el Jardín Botánico Carlos Thays de la Ciudad
            Autónoma de Buenos Aires.
          </p>
          <p className="card-text-p">
            También en Universidades como la Universidad de Buenos Aires (UBA) y
            la Universidad Autónoma de Chiriquí (UNACHI) y en ONGs como Aves
            Argentinas (AA) y la Sociedad Argentina de Horticultura (SAH).
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
