// React
import { React, useState } from 'react'

// Joy ui
import { Input, Option, Select, Autocomplete, Button } from '@mui/joy'

// iconos
import VisibilityIcon from '@mui/icons-material/Visibility'

import { Link } from 'react-router-dom'

export default function Registro2() {
	function handleChange(event, newValue) {
		console.log(`Cambiaste a "${newValue}"`)
	}
	const [value, setValue] = useState('')
	const minLength = 12
	const Fichas = [
		{ label: '1994 The Shawshank Redemption', Ficha: 1994 },
		{ label: 'The Godfather', Ficha: 1972 },
		{ label: 'The Godfather: Part II', Ficha: 1974 },
		{ label: 'The Dark Knight', Ficha: 2008 },
		{ label: '12 Angry Men', Ficha: 1957 },
		{ label: "Schindler's List", Ficha: 1993 },
		{ label: 'Pulp Fiction', Ficha: 1994 },
	]
	return (
		<>
			<Select
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				defaultValue=""
				onChange={handleChange}
				required
			>
				<Option value="">Rol *</Option>
				<Option value="Aprendiz">Aprendiz</Option>
				<Option value="Instr">Instructor</Option>
				<Option value="Admin">Administrador</Option>
			</Select>

			<Input
				type="password"
				placeholder="Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				type="password"
				placeholder="Confirmar Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Autocomplete
				placeholder="Número de ficha*"
				options={Fichas}
				variant="soft"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				required
			/>
			<Input
				placeholder="Ciudad*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Barrio*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Dirección*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<div className="navegacion ">
				<Link to="/registro/1">
					<div className="button-navegacion">{'<<Atrás'}</div>
				</Link>
				<Link to="/registro/3">
					<div className="button-navegacion">{'Siguiente>>'}</div>
				</Link>
			</div>
		</>
	)
}
