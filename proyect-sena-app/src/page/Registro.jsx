import React from 'react'
import { Input, Option, Select } from '@mui/joy'
import { Link } from 'react-router-dom'

// componentes material
// import {
// 	TextField,
// 	MenuItem,
// 	FormControl,
// 	InputLabel,
// 	Select,
// 	Button,
// } from '@mui/material/'

// componentes Joy UI

export default function Registro() {
	// const [tipoDoc, setTipoDoc] = React.useState('')

	// const handleChange = (event) => {
	// 	setTipoDoc(event.target.value)
	// }

	function handleChange(event, newValue) {
		console.log(`Cambiaste a "${newValue}"`)
	}
	let nombre

	return (
		// Joy UI
		<>
			<Input
				placeholder="Nombre*"
				value={nombre}
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Apellido*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Select
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
				defaultValue=""
				onChange={handleChange}
			>
				<Option value="">Tipo de documento*</Option>
				<Option value="Ti">Ti</Option>
				<Option value="Cc">Cc</Option>
				<Option value="Pa">Pa</Option>
			</Select>
			<Input
				placeholder="Número de documento*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Correo institucional*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Correo Personal"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<div style={{ display: 'block' }}>
				<div style={{ textAlign: 'center' }}>Fecha de nacimiento*</div>
				<Input
					type="date"
					sx={{ borderRadius: '15px', minWidth: '16rem' }}
					variant="soft"
					required
				/>
			</div>
			<div className="navegacion ">
				<Link to="/">
					<div className="button-navegacion">{'<<Atrás'}</div>
				</Link>
				<Link to="/registro/2">
					<div className="button-navegacion">{'Siguiente>>'}</div>
				</Link>
			</div>
		</>
	)
}
