import React from 'react'
import './styles/input-registro.css'
const Input = ({ label, type = 'text' }) => {
	return (
		<input
			type={type}
			placeholder={label}
			className="input-registro"
			required
		/>
	)
}

export default Input
