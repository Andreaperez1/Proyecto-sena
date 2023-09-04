import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    documentType: '',
    documentNumber: '',
    phoneNumber: '',
    institutionalEmail: '',
    personalEmail: '',
    birthDate: '',
    role: '',
    password: '',
    confirmPassword: '',
    trainingGroup: '',
    trainingProgram: '',
    city: '',
    neighborhood: '',
    address: '',
    bloodType: '',
    gender: '',
    eps: '',
    acceptPrivacyPolicy: false,
  });



  const handleFichaChange = (selectedFicha) => {
    setFormData({
      ...formData,
      trainingGroup: selectedFicha,
      trainingProgram: fichaOptions.find(option => option.value === selectedFicha)?.label || '',
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const fichaOptions = [
    { value: '2712', label: 'programa' },
    { value: '2713', label: 'programacion' },
    { value: '65', label: 'progreso' },
    { value: '21', label: 'tecnico' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log('Las contraseñas no coinciden');
      return;
    }
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Registrate</h2>
      <form onSubmit={handleSubmit}>
        {/* Nombres */}
        <div>
          <label htmlFor="firstName">Nombres:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Apellidos */}
        <div>
          <label htmlFor="lastName">Apellidos:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Tipo de Documento */}
        <div>
          <label htmlFor="documentType">Tipo de Documento:</label>
          <select
            id="documentType"
            name="documentType"
            value={formData.documentType}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="C.C">C.C</option>
            <option value="C.E">C.E</option>
            <option value="T.I">T.I</option>
            <option value="P.A">P.A</option>
          </select>
        </div>
        {/* Número de Documento */}
        <div>
          <label htmlFor="documentNumber">Número de Documento:</label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Teléfono */}
        <div>
          <label htmlFor="phoneNumber">Teléfono:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Correo Institucional */}
        <div>
          <label htmlFor="institutionalEmail">Correo Institucional:</label>
          <input
            type="email"
            id="institutionalEmail"
            name="institutionalEmail"
            value={formData.institutionalEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Correo Personal */}
        <div>
          <label htmlFor="personalEmail">Correo Personal:</label>
          <input
            type="email"
            id="personalEmail"
            name="personalEmail"
            value={formData.personalEmail}
            onChange={handleInputChange}
          />
        </div>
        {/* Fecha de Nacimiento */}
        <div>
          <label htmlFor="birthDate">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Rol */}
        <div>
          <label htmlFor="role">Rol:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="administrador">Administrador</option>
            <option value="instructor">Instructor</option>
            <option value="aprendiz">Aprendiz</option>
          </select>
        </div>
        {/* Contraseña */}
        <div>
          <label htmlFor="password">Contraseña:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
            />
            <span className="show-password-icon" onClick={handleShowPassword}>
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmación de Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {formData.password !== formData.confirmPassword && (
            <p className="error-message">Las contraseñas no coinciden</p>
          )}
        </div>
{/* Número de Ficha */}
<div>
          <label htmlFor="trainingGroup">Número de Ficha:</label>
          <input
            type="text"
            id="trainingGroup"
            name="trainingGroup"
            value={formData.trainingGroup}
            onChange={handleInputChange}
            placeholder="Escribe el número de ficha"
            list="fichaOptions"
            required
          />
          <datalist id="fichaOptions">
            {fichaOptions.map(option => (
              <option key={option.value} value={option.value} />
            ))}
          </datalist>
        </div>
        {/* Programa */}
        <div>
          <label>Programa:</label>
          <input
            type="text"
            value={formData.trainingProgram}
            readOnly
          />
        </div>
        {/* Ciudad */}
        <div>
          <label htmlFor="city">Ciudad:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        {/* Barrio */}
        <div>
          <label htmlFor="neighborhood">Barrio:</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleInputChange}
          />
        </div>
        {/* Dirección */}
        <div>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        {/* Tipo de Sangre */}
        <div>
          <label htmlFor="bloodType">Tipo de Sangre:</label>
          <select
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        {/* Género */}
        <div>
          <label htmlFor="gender">Género:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        {/* EPS */}
        <div>
          <label htmlFor="eps">EPS:</label>
          <select
            id="eps"
            name="eps"
            value={formData.eps}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="EPS1">EPS1</option>
            <option value="EPS2">EPS2</option>
            <option value="EPS3">EPS3</option>
            {/* Agrega las EPS disponibles */}
          </select>
        </div>
        {/* Aceptar Política de Privacidad */}
        <div>
          <label>
            <input
              type="checkbox"
              name="acceptPrivacyPolicy"
              checked={formData.acceptPrivacyPolicy}
              onChange={handleCheckboxChange}
              required
            />{' '}
            Acepto la política de privacidad
          </label>
        </div>
        {/* Botón de Envío */}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;


