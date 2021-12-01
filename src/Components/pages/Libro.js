import React from 'react'
import libro from '../../assets/libro.png'
import Footer from '../Footer';

 const Libro = () => {
  return (
    <div>
      <br />
      <h1>
        <b>Plantas Carnívoras de Argentina</b>
      </h1>


        <div className="card-libro ">
          {/*style="max-width: 540px;"*/}
          <div className="row g-0">
            <div className="col-md-4">
              <img src={libro} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text-p">
                  El libro <b>“Plantas carnívoras de Argentina”</b> es el
                  producto de muchos viajes entre pantanos y montañas, para
                  conocer las plantas carnívoras que viven en Argentina. Plantas
                  asesinas creciendo desde los cálidos esteros correntinos hasta
                  las gélidas turberas de Tierra del Fuego.
                </p>
                <p className="card-text-p">
                  Más de 100 fotos, te explican de una manera amigable sobre las
                  especies nativas complementando con descripciones botánicas
                  que enriquecen este ambicioso material. Ponete las botas, ya
                  tenemos una guía sobre las plantas carnívoras nativas. Ellas
                  existen y pueden estar a la vuelta de la esquina (o no, ya
                  verás).
                </p>
                <p className="card-text-p">
                  Si querés tener tu ejemplar, escribinos a
                  <a href="#"> carnivorasargentina@gmail.com</a> Asunto:{" "}
                  <b>LIBRO</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
    </div>
  );
}

export default Libro;
