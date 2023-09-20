import React from 'react'
import './styles/input-registro.css'

function Correo(props, required) {
	return (
		<input
			type="email"
			name={`correo ${props.correo}`}
			label={`correo ${props.correo}`}
			placeholder={`${props.correo}`}
			className="input-registro"
		></input>
	)
}

export default Correo
