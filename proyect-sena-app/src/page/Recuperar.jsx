import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Importa Link desde react-router-dom
import Input from '../componentes/Input'

export default function Recuperar() {
	const [email, setEmail] = useState('')

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Envía la solicitud de recuperación de contraseña al servidor aquí.
	}

	return (
		<div>
			<h2>Recuperación de Contraseña</h2>
			<form onSubmit={handleSubmit}>
				<Input
					type="email"
					value={email}
					onChange={handleEmailChange}
					required
				/>
               <Link to="/nueva-contraseña">
  					<button>Enviar Contraseña</button>
				</Link>

			</form>
		</div>
	)
}
