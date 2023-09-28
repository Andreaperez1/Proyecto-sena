import React, { useState } from 'react';

export default function VerificarCodigo() {
  const [codigo, setCodigo] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [error, setError] = useState(null);

  const handleCodigoChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleContrasenaChange = (e) => {
    setNuevaContrasena(e.target.value);
  };

  const handleConfirmarContrasenaChange = (e) => {
    setConfirmarContrasena(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevaContrasena === confirmarContrasena) {
      // Las contraseñas coinciden, puedes continuar con la lógica para enviar la solicitud al servidor
      // y cambiar la contraseña.
      setError(null); // Limpia el mensaje de error si estaba mostrado.
      
      // Envía una solicitud al servidor para verificar el código y actualizar la contraseña.
      // Después de cambiar la contraseña con éxito, redirige al usuario a la página de inicio de sesión o muestra un mensaje de éxito.
    } else {
      // Muestra un mensaje de error al usuario indicando que las contraseñas no coinciden.
      setError('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Verificación de Código y Cambio de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={codigo}
          onChange={handleCodigoChange}
          required
        />
        <input
          type="password"
          value={nuevaContrasena}
          onChange={handleContrasenaChange}
          required
        />
        <input
          type="password"
          value={confirmarContrasena}
          onChange={handleConfirmarContrasenaChange}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Guardar Contraseña</button>
      </form>
    </div>
  );
}
