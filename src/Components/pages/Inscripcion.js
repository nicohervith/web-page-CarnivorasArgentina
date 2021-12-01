import React from "react";
import ContactForm from "../Form/ContactForm";
import Footer from "../Footer";

const Inscripción = () => {
  return (
    <div>
      <br />
      <h2>
        <b>Inscripción a los cursos</b>
        <div className="card-text-end2">
          <p class="card-text-p2">
            Para solicitar información sobre cursos virtuales, te invitamos a
            completar el formulario.
          </p>
        </div>
      </h2>
      <ContactForm />
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default Inscripción;
