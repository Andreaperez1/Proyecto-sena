import React, { useState } from 'react'

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
				<input
					type="email"
					value={email}
					onChange={handleEmailChange}
					required
				/>

				<button type="submit">Enviar Codigo</button>
			</form>
		</div>
	)
}
