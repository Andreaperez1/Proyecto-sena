import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@mui/joy'
import { datoslogin } from '../consultas/Datos'
import { ingresarlogin } from '../consultas/Peticiones'

export default function () {
	const [usuario, GuardarUsusario] = useState(datoslogin.correo_inst);
	const [contrasena, setContrasena] = useState(datoslogin.contrasena);
	const [error, setError] = useState(null);


	const handleChangeUsuario = (event) => {
		GuardarUsusario(event.target.value)
		// console.log(event)
		setError(null); // Limpiar el mensaje de error cuando el usuario comienza a escribir nuevamente.
	}

	const handleChangeContrasena = (event) => {
		setContrasena(event.target.value);
		setError(null); // Limpiar el mensaje de error cuando el usuario comienza a escribir nuevamente.
	}

	const handleSubmit = () => {
		if (!usuario || !contrasena) {
		  setError('Ambos campos son obligatorios. Por favor, llénelos.');
		} else if (usuario === 'usuarioValido' && contrasena === 'contrasenaValida') {
		  console.log('Credenciales válidas');
		  // Ejecuta el código de ingreso (puedes modificar esto según tus necesidades)
		  ingresarlogin(datoslogin);
		} else {
		  setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
		}
	  };
	  
	function guardarusuario() {
		datoslogin.correo_inst = usuario
		datoslogin.contrasena = contrasena
	}

	useEffect(() => {
		guardarusuario()
	}, [usuario, contrasena])
	return (
		<>
			<Input
				onChange={handleChangeUsuario}
				value={usuario}
				placeholder="Usuario"
				sx={{
					borderRadius: '15px',
					margin: '0 30%',
					display: 'flex',
					gap: '1rem',
				}}
				variant="soft"
			/>
			<Input
				onChange={handleChangeContrasena}
				value={contrasena}
				type="password"
				placeholder="Contraseña"
				sx={{
					borderRadius: '15px',
					margin: '0 30%',
					display: 'flex',
				}}
				variant="soft"
			/>
			<div>
				<Link to="/recuperar-contrasena">
					{/* Enlace a la página de recuperación de contraseña */}
					<p>🔑¿Haz olvidado tu contraseña?</p>
				</Link>
				<Link to="/registro">
					{/* Enlace a la página de recuperación de contraseña */}
					<p>¿Aún no tienes cuenta?</p>
				</Link>
			</div>
			{error && <p className="error-message">{error}</p>}
			<button
				className="botonInsgresar"
				onClick={handleSubmit}>
				Ingresar
			</button>

		</>
	)
}
