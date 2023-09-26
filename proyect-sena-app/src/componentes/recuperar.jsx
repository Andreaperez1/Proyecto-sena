import React, { useState } from 'react';

function Recuperar() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía la solicitud de recuperación de contraseña al servidor aquí.
  };

  return (
    <div>
      <h2>Recuperación de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <button type="submit">Enviar Codigo</button>
      </form>
    </div>
  );
}

export default Recuperar;
