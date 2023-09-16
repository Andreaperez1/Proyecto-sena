import { useState } from 'react'
import './styles/input-registro.css'

function PasswordInput({ placeholder = 'Contraseña *' }) {
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className="campo-contraseña">
			<input
				className=" input-registro input-contraseña"
				type={showPassword ? 'text' : 'password'}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder={placeholder}
				required
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

export default PasswordInput;
