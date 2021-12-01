import { useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);

  //Lo inicializo como un objeto vacio ya que si no tiene ningun atributo es que todo paso bien y no hay error
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    //Actualizo la variable de estado de los errores
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    //Si el objeto errores no tiene ninguna propiedad lo igual a 0
    if (Object.keys(errors).length === 0) {
      alert("Enviando formulario");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/n_hervith@hotmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          //Actualizo la informacion de que la peticion se hizo y mandó el correo
          setResponse(true);

          //Para limpiar el formulario y que el cartel de Enviado correctamente se esconda despues de 4
          setForm(initialForm);
          setTimeout(() => setResponse(false), 4000);
        });
    } else {
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
