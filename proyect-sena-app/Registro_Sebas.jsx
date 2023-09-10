import React, { useState } from 'react';

function Registro() {
  const [datos, setDatos] = useState({
    contraseña: '',
    confirmacionContraseña: '',
    numeroDeFicha: '',
    programa: '',
    ciudad: '',
    barrio: ''
  });

  const [errorContraseña, setErrorContraseña] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contraseña') {
      const contieneMayuscula = /[A-Z]/.test(value);
      const contieneNumero = /\d/.test(value);
      const contieneLetra = /[a-zA-Z]/.test(value);

      if (!(contieneMayuscula && contieneNumero && contieneLetra && value.length >= 6)) {
        setErrorContraseña('La contraseña debe contener al menos una mayúscula, un número y tener al menos 6 caracteres.');
      } else {
        setErrorContraseña('');
      }
    }

    setDatos({
      ...datos,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorContraseña) {
      
      alert('Registro exitoso');
    } else {
      alert('Por favor, corrige los errores antes de enviar el formulario.');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contraseña:
          <input
            type="password"
            name="contraseña"
            value={datos.contraseña}
            onChange={handleChange}
          />
          {errorContraseña && <p className="error">{errorContraseña}</p>} {'La contraseña debe contener al menos una mayúscula, un número y tener al menos 6 caracteres.'}
        </label>
        <label>
          Confirmación de Contraseña:
          <input
            type="password"
            name="confirmacionContraseña"
            value={datos.confirmacionContraseña}
            onChange={handleChange}
          />
        </label>

        <label>
          Número de Ficha:
          <input
            type="text"
            name="numeroDeFicha"
            value={datos.numeroDeFicha}
            onChange={handleChange}
          />
        </label>
        <label>
          Programa:
          <select
            name="programa"
            value={datos.programa}
            onChange={handleChange}
          >
            <option value="programa1">Programa 1</option>
            <option value="programa2">Programa 2</option>
            <option value="programa3">Programa 3</option>
            <option value="programa4">Programa 4</option>
            <option value="programa5">Programa 5</option>
            <option value="programa6">Programa 6</option>
            <option value="programa7">Programa 7</option>
            <option value="programa8">Programa 8</option>
            <option value="programa9">Programa 9</option>
            <option value="programa10">Programa 10</option>
            <option value="programa11">Programa 11</option>
            <option value="programa12">Programa 12</option>
            <option value="programa13">Programa 13</option>
            <option value="programa14">Programa 14</option>
            <option value="programa15">Programa 15</option>
            <option value="programa16">Programa 16</option>
            <option value="programa17">Programa 17</option>
            <option value="programa18">Programa 18</option>
            <option value="programa19">Programa 19</option>
            <option value="programa20">Programa 20</option>
          </select>
        </label>
        <label>
          Ciudad:
          <input
            type="text"
            name="ciudad"
            value={datos.ciudad}
            onChange={handleChange}
          />
        </label>
        <label>
          Barrio:
          <input
            type="text"
            name="barrio"
            value={datos.barrio}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
