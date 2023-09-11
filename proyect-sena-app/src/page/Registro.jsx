import React, { useState } from "react";
import Input from "../componentes/Input";
import Desplegable from "../componentes/desplegable";
import Correo from "../componentes/Correo";
import PasswordInput from "../componentes/contraseña";
import Autocompletar from "../componentes/autocompletar";
import PoliticasPrivacidad from "../componentes/PoliticasPrivacidad";



const Registro = () => {

  const [politicasAceptadas, setPoliticasAceptadas] = useState(false);
  const [mostrarPoliticas, setMostrarPoliticas] = useState(false);
  const [programaSeleccionado, setProgramaSeleccionado] = useState("");
  const [infoFicha, setInfoFicha] = useState("");

  const handleAceptarPoliticas = () => {
    setPoliticasAceptadas(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si las políticas han sido aceptadas antes de continuar
    if (politicasAceptadas) {
      // Aquí puedes realizar la lógica de registro del usuario
      console.log("Usuario registrado correctamente");
    } else {
      alert("Debes aceptar las políticas de privacidad y seguridad.");
    }
  };

  const FichaInfo = {
    "2712267": "programacion de software",
    "2712345": "Información sobre el Programa 2",
    "2787654": "Información sobre el Programa 3",
  };

  // Función para manejar la selección de programa
// Corrige el nombre del objeto
const handleSeleccionFicha = (Ficha) => {
  // Accede a la información del programa seleccionado desde el objeto
  const informacion = FichaInfo[Ficha];

  setProgramaSeleccionado(Ficha);
  setInfoFicha(informacion);
};


  return (
    <div>
      <h1>REGISTRATE</h1>
      <form onSubmit={handleSubmit}>

        <Input label="nombres" />

        <Input label="apellidos" />

        <label htmlFor="Tipo de Documento">Tipo de Documento</label>
        <Desplegable
          options={[
            { value: " ", label: " " },
            { value: "T.I", label: "T.I" },
            { value: "C.C", label: "C.C" },
            { value: "C.E", label: "C.E" },
            { value: "P.A", label: "P.A" },
          ]}
        />

        <Input label="N° de documento" />

        <Input label="telefono" />

        <Correo correo="Correo Institucional" />

        <Correo correo="Correo personal" />

        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
        <input type="date" />

        <label htmlFor="Rol">Rol</label>
        <Desplegable
          options={[
            { value: " ", label: " " },
            { value: "Aprendiz", label: "Aprendiz" },
            { value: "Profesor", label: "Profesor" },
            { value: "Admin", label: "Admin" },
          ]}
        />

        <label htmlFor="Contraseña"></label>
        <PasswordInput />

        <label htmlFor="Confirmacion de contraseña"></label>
        <PasswordInput />

        <label htmlFor="N°">Número de ficha</label>
      <Autocompletar
        opciones={Object.keys(FichaInfo)} // Utiliza las claves del objeto como opciones
        onSeleccion={handleSeleccionFicha}
      />
      <label htmlFor="programa"></label>
      <input type="text" id="infoFicha" value={infoFicha} readOnly />

        <Input label="Ciudad (Corregimiento, Municipio)" />

        <Input label="Barrio" />

        <Input label="Dirrección" />

        <label htmlFor="Tipo de sangre">Tipo de sangre</label>
        <Desplegable
          options={[
            { value: " ", label: " " },
            { value: "A+", label: "A+" },
            { value: "A-", label: "A-" },
            { value: "B+", label: "B+" },
            { value: "B-", label: "B-" },
            { value: "O+", label: "O+" },
            { value: "O-", label: "O-" },
            { value: "AB+", label: "AB+" },
            { value: "AB-", label: "AB-" },

          ]}
        />

        <label htmlFor="Genero">Genero</label>
        <Desplegable
          options={[
            { value: " ", label: " " },
            { value: "Femenino", label: "Femenino" },
            { value: "Masculino", label: "Masculino" },
            { value: "Otro", label: "Otro" },
          ]}
        />

      <label htmlFor="Eps">Eps</label>
       <Desplegable
          options={[
            { value: " ", label: " " },
            { value: "EPS 1", label: "EPS 1" },
            { value: "EPS 2", label: "EPS 2" },
            { value: "EPS 3", label: "EPS 3" },
            { value: "EPS 4", label: "EPS 4" },
            { value: "PS 5", label: "EPS 5" },
          ]}
        />

        <label htmlFor="politicas">
          <input
            type="checkbox"
            id="politicas"
            checked={politicasAceptadas}
            onChange={() => setPoliticasAceptadas(!politicasAceptadas)}
          />
          <a href="#" onClick={() => setMostrarPoliticas(true)}>Acepto las politicas de privacidad y seguridad</a>
        </label>

        <button type="submit" disabled={!politicasAceptadas}>
          Registrar
        </button>
      </form>
      
            {/* Ventana emergente para las políticas */}
            {mostrarPoliticas && (
        <div className="ventana-emergente">
          <div className="contenido-emergente">
            <PoliticasPrivacidad />
            <button onClick={() => setMostrarPoliticas(false)}>Cerrar</button>
          </div>
        </div>
      )}

      <button>Atras</button>
      <button>Siguiente</button>
    </div>
  );
};


export default Registro;
