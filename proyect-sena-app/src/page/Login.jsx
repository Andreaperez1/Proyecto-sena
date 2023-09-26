import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@mui/joy'

export default function () {
	const [usuario, GuardarUsusario] = useState('')
	const [contrasena, setContrasena] = useState('')

	const handleChangeUsuario = (event) => {
		GuardarUsusario(event.target.value)
		console.log(event)
	}

	const handleChangeContrasena = (event) => {
		setContrasena(event.target.value)
	}

	return (
		<>
			<Input
				onChange={handleChangeUsuario}
				placeholder="Usuario"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
			/>
			<Input
				onChange={handleChangeContrasena}
				type="password"
				placeholder="Contraseña"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
			/>
			<button>Ingresar</button>
		</>
	)
}
