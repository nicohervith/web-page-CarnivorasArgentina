import React from 'react'
import collage4 from '../../assets/collage4.jpg'
import collage5 from '../../assets/collage5.jpg'
import collage6 from "../../assets/collage6.jpg";
import Footer from '../Footer'

 const Cursos = () => {
  return (
    <div>
      <h2>
        <b>Cursos Virtuales</b>
      </h2>
      <div className="card-text-end2">
        <p class="card-text-p2">
          En estas capacitaciones, la distancia no es un problema! Tenemos
          cursos de cultivo y cursos sobre las Plantas Carnívoras de Argentina.
          Si querés que te avisemos cuando damos cada curso, mandanos un correo,
          con el asunto <a href="/contacto">“CURSO”</a>.
        </p>
      </div>
      <h3>
        <b>Cursadas 2022 </b>
      </h3>

      <div class="">
        <div class="">
          <h5 class="card-title">
            Curso virtual de plantas carnívoras de Argentina
          </h5>
          <p class="card-text">
            En este curso aprendés todo sobre las plantas carnívoras nativas
            desde una visión holística.
          </p>
          <br />
        </div>
        <div className="card-pp3">
          <img src={collage4} className="card-img-bottom" alt="..." />
        </div>
      </div>

      <div class="card-pc">
        <div class="">
          <div class="">
            <div class="card-body">
              <p class="card-text">
                <p></p>
                <br />
                <p> – ¿Qué son las plantas carnívoras? </p>
                <p>– ¿Cómo y de que se alimentan?</p>
                <p>– Distribución de especies nativas.</p>
                <p>– Reglas genéricas sobre su cultivo </p>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="">
            <div class="">
              <p class="card-text">
                <p></p>
                <br />
                <p>– Diferenciarlas en el campo </p>
                <p>– Estados de conservación </p>
                <p>
                  – Usos, desde el control biológico hasta el uso ornamental{" "}
                </p>
                <p>–Morfologia</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-text-end2">
        <p class="card-text-p2">
          <b>Cursada:</b> Mandanos un correo y te avisaremos cuando realicemos
          la 4° edición de este curso.
          <a href="/contacto"> Escribinos </a>
        </p>
      </div>
      <hr />
      <br />
      <div class="">
        <div class="">
          <h5 class="card-title">Curso de Venus atrapamoscas </h5>

          <br />
        </div>
        <div className="card-pp3">
          <img src={collage5} className="card-img-bottom" alt="..." />
        </div>
      </div>

      <div class="card-pc">
        <div class="">
          <div class="">
            <p class="card-text">
              <p></p>
              <br />
              <p> – Curiosidades históricas de la Venus atrapamoscas </p>
              <p>– Distribución</p>
              <p>– Taxonomía y morfología</p>
              <p>– Diversidad en Venus atrapamoscas y cultivares registrados</p>
              <p>– Cultiva Venus en tu casa </p>
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="">
            <div class="">
              <p class="card-text">
                <p></p>
                <br />

                <p>– Trasplante </p>
                <p>– Reproducir Venus atrapamoscas</p>
                <p>–Estados de conservación de la Dionaea muscipula</p>
                <p>–Medidas para reducir el impacto ambiental</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-text-end2">
        <p class="card-text-p2">
          <b>Cursada:</b> Mandanos un correo y te avisaremos cuando realicemos
          la 2° edición de este curso.
          <a href="/contacto"> Escribinos </a>
        </p>
      </div>
      <hr />

      <br />
      <div class="">
        <div class="">
          <h5 class="card-title">Curso de Nepenthes </h5>
          <br />
        </div>
        <div className="card-pp3">
          <img src={collage6} className="card-img-bottom" alt="..." />
        </div>
      </div>

      <div class="card-pc-nep">
        <div class="">
          <div class="">
            <p class="card-text">
              <p></p>
              <br />
              <p>
                – Historia de las Nepenthes, de plantas insectívoras a
                carnívoras -Distribución
              </p>
              <p>– Taxonomía y morfología</p>
              <p>
                – Especies de Nepenthes, clasificación por altura (lowland o
                highland)
              </p>
              <p>– Trasplante</p>
            </p>
          </div>
        </div>
        <div class="">
          <div class="">
            <div class="">
              <p class="card-text">
                <p></p>
                <br />

                <p>
                  – Híbridos y cultivares populares en el cultivo argentino.{" "}
                </p>
                <p>– Cultiva Nepenthes en tu casa</p>
                <p>–Reproducir Nepenthes</p>
                <p>– Estados de conservación de las Nepenthes</p>
                <p>–Medidas para reducir el impacto ambiental</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-text-end2">
        <p class="card-text-p2">
          <b>Cursada:</b> Mandanos un correo y te avisaremos cuando realicemos
          la 2° edición de este curso.
          <a href="/contacto"> Escribinos </a>
        </p>
      </div>
      <hr />
      <br />
      <h5>
        {" "}
        <b>Curso de Sarracenias: </b> Proximamente...
      </h5>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Cursos;