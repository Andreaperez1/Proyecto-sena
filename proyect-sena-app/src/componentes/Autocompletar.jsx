import React, { useState } from "react";

const Autocompletar = ({ opciones, onSeleccion }) => {
  const [inputValue, setInputValue] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filtra las sugerencias basadas en la entrada del usuario
    const sugerenciasFiltradas = opciones.filter((opcion) =>
      opcion.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSugerencias(sugerenciasFiltradas);
    setMostrarSugerencias(true);
  };

  const handleSugerenciaClick = (sugerencia) => {
    setInputValue(sugerencia);
    setMostrarSugerencias(false);

    // Llama a la función 'onSeleccion' pasando la sugerencia seleccionada
    if (onSeleccion) {
      onSeleccion(sugerencia);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar ficha"
        value={inputValue}
        onChange={handleInputChange}
      />
      {mostrarSugerencias && (
        <ul>
          {sugerencias.map((sugerencia, index) => (
            <li key={index} onClick={() => handleSugerenciaClick(sugerencia)}>
              {sugerencia}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocompletar;


