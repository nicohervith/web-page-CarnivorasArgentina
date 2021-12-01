import React from 'react'
import Footer from "../Footer";
import logojurassic from '../../assets/logojurassic.png'
import utricularia from "../../assets/utricularia.jpg";
import mapa from '../../assets/mapa.png'

 const JurassicPlant = () => {
  return (
    <div>
      <div className="jurassic-card">
        <img src={logojurassic} alt="" />
      </div>
      <div className="card-text-endjp">
        <p class="card-text-p2">
          El proyecto <b>Jurassic Plant</b> consiste en la creación del primer
          jardín botánico de plantas carnívoras de Latinoamérica. Sus objetivos
          son la educación ambiental, la conservación de especies nativas y
          promover el desarrollo sostenible de Loreto (Corrientes). El proyecto
          es llevado a cabo por{" "}
          <b>«Kevin» Isaías Vergara y Federico E. Parrilli</b>.
        </p>
      </div>
      <div className="capa-sup">
        <div className="card-sup1">
          <img src={utricularia} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Utricularia foliosa, una de las carnívoras nativas que se pueden
              hallar en las excursiones guiadas.
            </p>
          </div>
        </div>
        <div className="card-text-jp">
          <p className="card-text-p-jp">
            Las plantas carnívoras son especies muy atractivas que atrapan la
            atención de las personas. Capturan diversos organismos y cumplen un
            rol fundamental en sus ecosistemas nativos.
          </p>
          <p className="card-text-p-jp">
            Estas plantas, que habitan por todo el mundo, se encuentran rodeadas
            de mitos y leyendas. Funcionan como una herramienta clave para la
            educación ambiental y permiten conocer de una manera divertida la
            biodiversidad y los ambientes naturales que nos rodean.
          </p>
        </div>
      </div>
      <div class="card-jp">
        <img src={mapa} class="card-img-top" alt="..." />
        <div class="">
          <p class="card-text-p">
            Corrientes es la provincia Argentina que tiene mayor cantidad de
            plantas carnívoras nativas. El proyecto Jurassic Plant apunta a
            aumentar la valoración del patrimonio biológico de los Esteros del
            Iberá, enriqueciendo culturalmente a sus pobladores y ofreciendo a
            sus turistas, mediante un jardín botánico y excursiones en kayak,
            una experiencia inigualable.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default JurassicPlant;
