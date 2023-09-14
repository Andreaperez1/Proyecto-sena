// react
import React, { useState } from 'react'


// componentes
import Input from '../componentes/Input'
import Desplegable from '../componentes/desplegable'
import Correo from '../componentes/Correo'
import PasswordInput from '../componentes/contraseña'
import Autocompletar from '../componentes/autocompletar'
import PoliticasPrivacidad from '../componentes/PoliticasPrivacidad'


//importamos rutas
import { Link, useNavigate } from 'react-router-dom'; // Importa los módulos correctamente




// css
import './styles/registro.css'


const Registro = () => {
    const [step, setStep] = useState(1);
    const [politicasAceptadas, setPoliticasAceptadas] = useState(false);
    const [mostrarPoliticas, setMostrarPoliticas] = useState(false);
    const [programaSeleccionado, setProgramaSeleccionado] = useState('');
    const [infoFicha, setInfoFicha] = useState('');
 
    const FichaInfo = {
      2712267: 'programacion de software',
      2712345: 'Información sobre el Programa 2',
      2787654: 'Información sobre el Programa 3',
    };
 
    const handleSeleccionFicha = (Ficha) => {
      const informacion = FichaInfo[Ficha];
      setProgramaSeleccionado(Ficha);
      setInfoFicha(informacion);
    };
 
    const goToNextStep = () => {
      if (step < 3) {
        setStep(step + 1);
      }
    };
 
    const goToPreviousStep = () => {
      if (step > 1) {
        setStep(step - 1);
      }
    };
 
    const handleSubmit = (e) => {
      e.preventDefault();
      if (politicasAceptadas) {
        // Realiza la lógica de registro aquí
        console.log('Usuario registrado correctamente');
      } else {
        alert('Debes aceptar las políticas de privacidad y seguridad.');
      }
    };
 
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>REGISTRATE</h1>
 
          {/* Sección 1: Información personal */}
          {step === 1 && (
            <>
              {/* Campos de información personal */}
              <Input label="Nombres" />
              <Input label="Apellidos" />
              <label htmlFor="Tipo de Documento">Tipo de Documento</label>
              <Desplegable
                options={[
                  { value: ' ', label: ' ' },
                  { value: 'T.I', label: 'T.I' },
                  { value: 'C.C', label: 'C.C' },
                  { value: 'C.E', label: 'C.E' },
                  { value: 'P.A', label: 'P.A' },
                ]}
              />
              <Input label="Número de Documento" />
              <Input label="Teléfono" />
              <Correo correo="Correo Institucional" />
              <Correo correo="Correo Personal" />
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input type="date" />
              <button onClick={goToNextStep}>Siguiente</button>
            </>
          )}
 
          {/* Sección 2: Información de registro */}
          {step === 2 && (
            <>
              {/* Campos de información de registro */}
              <label htmlFor="Rol">Rol</label>
              {/* Agrega el campo para el rol aquí */}
              <label htmlFor="Contraseña">Contraseña</label>
              <PasswordInput />
              <label htmlFor="ConfirmacionContraseña">Confirmación de Contraseña</label>
              <PasswordInput />
              <label htmlFor="NúmeroFicha">Número de ficha</label>
              <Autocompletar
                opciones={Object.keys(FichaInfo)}
                onSeleccion={handleSeleccionFicha}
              />
              <Input label="Ciudad (Corregimiento, Municipio)" />
              <Input label="Barrio" />
              <Input label="Dirección" />
              <label htmlFor="TipoSangre">Tipo de sangre</label>
              <Desplegable
                options={[
                  { value: ' ', label: ' ' },
                  { value: 'A+', label: 'A+' },
                  { value: 'A-', label: 'A-' },
                  { value: 'B+', label: 'B+' },
                  { value: 'B-', label: 'B-' },
                  { value: 'O+', label: 'O+' },
                  { value: 'O-', label: 'O-' },
                  { value: 'AB+', label: 'AB+' },
                  { value: 'AB-', label: 'AB-' },
                ]}
              />
              <button onClick={goToPreviousStep}>Atrás</button>
              <button onClick={goToNextStep}>Siguiente</button>
            </>
          )}
 
          {/* Sección 3: Opciones adicionales y finalización */}
          {step === 3 && (
            <>
              {/* Campos de opciones adicionales y finalización */}
              <label htmlFor="Genero">Género</label>
              <Desplegable
                options={[
                  { value: ' ', label: ' ' },
                  { value: 'Femenino', label: 'Femenino' },
                  { value: 'Masculino', label: 'Masculino' },
                  { value: 'Otro', label: 'Otro' },
                ]}
              />
              <label htmlFor="Eps">EPS</label>
              <Desplegable
                options={[
                  { value: ' ', label: ' ' },
                  { value: 'EPS 1', label: 'EPS 1' },
                  { value: 'EPS 2', label: 'EPS 2' },
                  { value: 'EPS 3', label: 'EPS 3' },
                  { value: 'EPS 4', label: 'EPS 4' },
                  { value: 'EPS 5', label: 'EPS 5' },
                ]}
              />
              <label htmlFor="politicas">
                <input
                  type="checkbox"
                  id="politicas"
                  checked={politicasAceptadas}
                  onChange={() => setPoliticasAceptadas(!politicasAceptadas)}
                />
                <a href="#" onClick={() => setMostrarPoliticas(true)}>
                  Acepto las políticas de privacidad y seguridad
                </a>
              </label>
              <button onClick={goToPreviousStep}>Atrás</button>
              <button type="submit" disabled={!politicasAceptadas}>Finalizar</button>
            </>
          )}
        </form>
 
        {/* Ventana emergente para las políticas */}
        {mostrarPoliticas && (
          <div className="ventana-emergente">
            <div className="contenido-emergente">
              {/* Agrega el contenido de las políticas aquí */}
              <button onClick={() => setMostrarPoliticas(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  };
 
  export default Registro;
