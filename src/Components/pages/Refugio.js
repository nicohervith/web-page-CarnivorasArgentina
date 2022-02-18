import React from 'react'
import logorecarni from '../../assets/logorecarni.png'
import scollagerecarni from "../../assets/scollagerecarni.png";
import Footer from '../Footer';

const Refugio = () => {
  return (
    <div>
      <br />
      <img src={logorecarni} alt="" />
      <br />
      <br />
      <div className="card-text-end2">
        <p class="card-text-p2">
          El Programa <b>RECARNI</b> busca identificar aquellas áreas naturales
          protegidas (ANP) con poblaciones viables de plantas carnívoras nativas
          (PCN) e identificarlas para revalorizar su trabajo en la conservación
          de especies.
        </p>
        <p className="card-text-p2">
          Las plantas carnívoras, por su ecología, son organismos susceptibles a
          los cambios de uso de suelo de origen antropogénico. Estas plantas
          engrosan las filas de especies que estén aumentando su grado de
          amenaza por el avance de la frontera agropecuaria, el desarrollo
          inmobiliario, la predación y la generación de contaminantes, entre
          otras causas.
        </p>
        <p className="card-text-p2">
          Es conocido que las ANP son consideradas de las mejores herramientas
          de conservación de ecosistemas y sus especies asociadas. Bajo el
          Programa
          <b>RECARNI</b>, el Proyecto Carnívoras Argentina, evalúa si el Área
          Natural Protegida alberga plantas carnívoras nativas y si las
          condiciones de la misma, permiten que estas especies continúen
          desarrollándose en el tiempo, funcionando como un Refugio de
          Carnívoras Nativas.
        </p>
      </div>
      <h2>
        <b>Criterios para RECARNI</b>
      </h2>
      <p className="card-text-p2">
        Para que un Área Natural Protegida sea designado como un RECARNI debe
        cumplir al menos un criterio:
      </p>
      <p className="card-text-p2">
        <b> Criterio 1:</b> Albergar plantas carnívoras nativas creciendo de
        manera silvestre
      </p>
      <p className="card-text-p2">
        <b> Criterio 2:</b> Llevar adelante un programa de reintroducción de
        especies nativas que sean coincidentes con el distrito fitogeográfico de
        la región.
      </p>
      <br />
      <br />
      <br />
      <div class="container-image">
        <div className="container-image-refugio">
          <img src={scollagerecarni} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="card-text-refugio">
        <div class="card-header">
          Con la verificación de Criterios anteriores, el equipo de Carnívoras
          Argentina comienza el siguiente proceso:
        </div>
        <ul className="list-group ">
          <li className="list-group-item">
            <b>A)</b> Investigación en campo para identificar especies y
            distribución.
          </li>
          <li className="list-group-item">
            <b>B)</b> Muestreo de ejemplares rotulados como elementos para la
            conservación in-situ y ex- situ que retroalimenta el programa
            RECARNI mediante un banco de germoplasma.
          </li>
          <li className="list-group-item">
            <b>C)</b> Capacitación al personal de la reserva que le permitirá
            conocer las especies de carnívoras nativas que alberga el área
            protegida
          </li>
          <li className="list-group-item">
            <b>D)</b> Quien administra el ANP contará con fichas de cada especie
            de planta carnívora presente en su territorio protegido.
          </li>
          <li className="list-group-item">
            <b>E)</b> Inclusión en el Sistema de Información Geográfica del
            proyecto Carnívoras Argentina.
          </li>
          <li className="list-group-item">
            <b>F)</b> Logo del RECARNI para poder usar en cartelería y redes
            como promoción de su trabajo en conservación.
          </li>
        </ul>
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Refugio;
