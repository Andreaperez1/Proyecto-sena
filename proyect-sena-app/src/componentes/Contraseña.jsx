import { useState } from 'react'
import './styles/input-registro.css'

function PasswordInput() {
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className="campo-contraseña">
			<input
				className="input-contraseña"
				type={showPassword ? 'text' : 'password'}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="mostrar-conrtaseña"
				type="button"
				onClick={togglePasswordVisibility}
			>
				{showPassword ? '🚫' : '👀'}
			</button>
		</div>
	)
}

export default PasswordInput
