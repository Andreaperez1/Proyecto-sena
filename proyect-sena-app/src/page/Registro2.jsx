// React
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Joy ui
import { Input, Option, Select, Autocomplete } from '@mui/joy'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { datosRegistro } from '../consultas/Datos'

export default function Registro2() {
	const roles = JSON.parse(localStorage.getItem('roles'))
	const fichas = JSON.parse(localStorage.getItem('fichas'))
	const [rol, setRol] = useState(datosRegistro.rol)
	const [contrasena, setContrasena] = useState(datosRegistro.contrasena)
	const [contrasena2, setContrasena2] = useState('')
	const [ficha, setFicha] = useState(datosRegistro.ficha)
	const [telefono, setTelefono] = useState(datosRegistro.telefono)
	const [direccion, setDireccion] = useState(datosRegistro.direccion)
	let contrasIguales

	const ojoAbierto = <VisibilityIcon onClick={cambiarAText} />
	const ojoCerrado = <VisibilityOffIcon onClick={cambiarAPass} />

	const [typeInput, setTypeInput] = useState('password')
	const [iconoPass, setIconPass] = useState(ojoAbierto)

	function cambiarAText() {
		setTypeInput('text')
		setIconPass(ojoCerrado)
	}
	function cambiarAPass() {
		setTypeInput('password')
		setIconPass(ojoAbierto)
	}

	function handleChangeRol(event, newValue) {
		setRol(newValue)
		console.log(newValue)
	}
	function handleChangeContrasena(event) {
		console.log(event.target.value)
		setContrasena(event.target.value)
	}
	function handleChangeContrasena2(event) {
		setContrasena2(event.target.value)
	}

	function guardarIdficha(codigo) {
		const fichaElegida = fichas.find((e) => e.codigo === codigo)
		setFicha(fichaElegida._id)
		console.log(fichaElegida)
	}

	function handleChangeFicha(event, newValue) {
		guardarIdficha(newValue)
	}

	function handleChangeTelefono(event) {
		setTelefono(event.target.value)
	}
	function handleChangeDireccion(event) {
		setDireccion(event.target.value)
	}

	const listRoles = roles.map((rol) => (
		<Option key={rol._id} value={rol._id}>
			{rol.nombre}
		</Option>
	))

	function compararContraseña() {
		if (contrasena != '' && contrasena2 != '' && contrasena == contrasena2) {
			// console.log('las contraseñas sonIguales')
			contrasIguales = true
		} else {
			// console.log('Contraseña no es igual')

			contrasIguales = false
		}
	}

	function guardarDatos() {
		datosRegistro.rol = rol
		datosRegistro.contrasena = contrasena
		datosRegistro.ficha = ficha
		datosRegistro.telefono = telefono
		datosRegistro.direccion = direccion
	}

	useEffect(() => {
		compararContraseña()
		guardarDatos()
	}, [rol, contrasena, contrasena2, ficha, telefono, direccion])

	return (
		<>
			<Select
				defaultValue={rol}
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				onChange={handleChangeRol}
				required
			>
				<Option key=" " value="">
					Rol *
				</Option>
				{listRoles}
			</Select>

			<Input
				onChange={handleChangeContrasena}
				type={typeInput}
				placeholder="Contraseña*"
				endDecorator={iconoPass}
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Input
				onChange={handleChangeContrasena2}
				type={typeInput}
				placeholder="Confirmar Contraseña*"
				endDecorator={iconoPass}
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Autocomplete
				onInputChange={handleChangeFicha}
				isOptionEqualToValue={() => true}
				options={fichas}
				defaultChecked={ficha}
				getOptionLabel={(fichas) => fichas.codigo}
				placeholder="Número de ficha*"
				variant="soft"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				required
			/>
			<Input
				value={telefono}
				onChange={handleChangeTelefono}
				placeholder="Telefono*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Input
				value={direccion}
				onChange={handleChangeDireccion}
				placeholder="Dirección*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<div className="navegacion ">
				<Link to="/registro/1">
					<div className="button-navegacion">{'Atrás'}</div>
				</Link>
				{rol == '' ||
				contrasena == '' ||
				contrasena2 == '' ||
				contrasIguales == false ||
				ficha == '' ||
				telefono == '' ||
				direccion == '' ? (
					<button className="button-navegacion">{'Siguiente'}</button>
				) : (
					<Link to="/registro/3">
						<div className="button-navegacion">{'Siguiente'}</div>
					</Link>
				)}
			</div>
		</>
	)
}
