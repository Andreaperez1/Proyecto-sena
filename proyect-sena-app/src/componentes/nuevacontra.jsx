import React, { useState } from 'react';

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía la solicitud de cambio de contraseña al servidor aquí.
  };

  return (
    <div>
      <h2>Cambio de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nueva Contraseña:
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </label>
        <label>
          Confirmar Nueva Contraseña:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </label>
        <button type="submit">Cambiar Contraseña</button>
      </form>
    </div>
  );
}

export default ChangePassword;
