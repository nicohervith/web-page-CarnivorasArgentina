import React from 'react'
import esc1 from '../../assets/esc1.jpg'
import venus4 from "../../assets/venus4.jpg";
import capacitacion from "../../assets/capacitacion.png";
import jardinbot from "../../assets/jardinbot.jpg";
import Footer from "../Footer";

const Capacitaciones = () => {
  return (
    <div>
      <h2 class="card-title">Capacitaciones</h2>
      <div className="card-text-end2">
        <p class="card-text-p2">
          Bridamos capacitaciones y talleres para distintas instituciones.
          <p class="card-text-p2">
            <b>Escuelas: </b>La posibilidad de aportar en escuelas y jardines con
            plantas reales, es una verdadera experiencia para los estudiantes.
            Hacemos planes a la medida para cada curso, dependiendo edad y
            materia. También acercamos las plantas y la propuesta a escuelas de
            pedagogía alternativa como Waldorf y Montessori. ¿Querés que
            participemos en alguna escuela?
          </p>
        </p>
      </div>
      <div className="card-p3">
        <img src={esc1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Acercando las Plantas Carnívoras en la Educación Formal Primaria
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="card-text-end2">
        <p class="card-text-p2">
          <b>Empresas:</b> Responsabilidad Social Empresaria (RSE) combinada con
          plantas carnívoras es una exitosa combinación! Ofrecemos talleres de
          cultivo para aportar al contacto entre el personal con lo natural del
          reino vegetal. <a href="/contacto">Contactanos!</a>
        </p>
        <p class="card-text-p2">
          <b>Jardines Botánicos:</b> Asesoramos desde la elección de especies,
          identificación y cultivo de la colección carnívora. También ofrecemos
          servicio de mantenimiento. <a href="/contacto">Contactanos!</a>
        </p>
      </div>

      <div className="card-p3">
        <img src={venus4} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Acercando las Plantas Carnívoras en la Educación Formal Primaria
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="capa-sup">
        <div className="card-pp3">
          <img src={jardinbot} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Capacitación tras la donación de 40 especies de Plantas carnívoras
              al Jardín Botánico Carlos Thays. Ciudad Autónoma de Buenos Aires.
            </p>
          </div>
        </div>

        <div className="card-pp3">
          <img src={capacitacion} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Capacitación a guías de turismo y agentes de conservación del
              Parque Nacional Nahuel Huapi. Río Negro.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="card-text-end2">
        <p class="card-text-p2">
          <b>Guardaparques y voluntarios en áreas protegidas:</b> Nuestro compromiso
          con la educación ambiental en los agentes de protección es parte del
          Proyecto. Ofrecemos capacitaciones in- situ o ex-situ al personal de
          guardaparques y voluntarios, en recompensa por su compromiso con la
          conservación y sus aportes al proyecto Carnívoras Argentina.
          <a href="/contacto">Contactate con nosotros </a>
        </p>
        <br />
        <p class="card-text-p2">
          <b>Organismos estatales:</b> Ofrecemos servicio de consultoría ambiental (con
          título habilitante) como elaboración de inventarios de plantas
          carnívoras nativas y planificación de reservas. Las reservas naturales
          además de funcionar como resguardo de biodiversidad, permiten mitigar
          los efectos del Cambio Climático.<a href="#">¿Buscás un consultor ambiental?</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Capacitaciones;
