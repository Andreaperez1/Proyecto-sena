import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@mui/joy'
import { datoslogin } from '../consultas/Datos'
import { ingresarlogin } from '../consultas/Peticiones'

export default function () {
	const [usuario, GuardarUsusario] = useState(datoslogin.correo_inst)
	const [contrasena, setContrasena] = useState(datoslogin.contrasena)

	const handleChangeUsuario = (event) => {
		GuardarUsusario(event.target.value)
		// console.log(event)
	}

	const handleChangeContrasena = (event) => {
		setContrasena(event.target.value)
	}

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
					{' '}
					{/* Enlace a la página de recuperación de contraseña */}
					<p>🔑¿Haz olvidado tu contraseña?</p>
					{/* <p>recuperar contraseña</p> */}
				</Link>
			</div>
			<button
				className="botonInsgresar"
				onClick={() => ingresarlogin(datoslogin)}
			>
				Ingresar
			</button>
		</>
	)
}
