import React from 'react'
import redlistpic from '../../assets/redlistpic.jpg'
import Footer from '../Footer';
import uicn from "../../assets/uicn.png";

 const Redlist = () => {
  return (
    <div>
      <br />
      <h2>
        <b>Red List Carnívoras argentinas</b>
      </h2>
      <div className="card-text-end2">
        <p className="card-text-p">
          Estamos trabajando en evaluar los estados de conservación de las
          plantas carnívoras en Argentina, siguiendo los lineamientos de la{" "}
          <p></p>
          <a
            href="https://www.iucn.org/es/acerca-de-la-uicn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unión Internacional para la Conservación de la Naturaleza (UICN)
          </a>
        </p>
      </div>
      <div className="capa-sup-redlist">
        <div className="card-sup1">
          <img src={redlistpic} className="card-img-top" alt="" />
        </div>
      </div>
      <div className="card-text-end2">
        <p className="card-text-p">
          En esta investigación se pretende asignar una categoría que vislumbre
          la proyección de la especie en el tiempo, de esta manera se pueden
          aportar a la toma de decisiones desde la gestión para proteger las
          especies mas vulneradas por el desarrollo humano.
        </p>
        <p className="card-text-p">
          A fin de que el equipo técnico formado por Pablo Schepens y Federico
          E. Parrilli pueda trabajar en el grupo voluntario de asesores de UICN,
          se llevó a cabo la respectiva capacitación como asesores globales y
          regionales.
        </p>
      </div>
      
        <div className="card-sup-uicn">
          <img src={uicn} className="card-img-top" alt="" />
        </div>
      
      <div className="card-text-end2">
        <p className="card-text-p">
          El análisis global permite enrriquecer el sistema de información de la
          UICN para comprender el nivel de amenaza global de una especie. El
          análisis regional en cambio, permite cualificar el estado de las
          especies a nivel territorial.
        </p>
      </div>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
}

export default Redlist;
