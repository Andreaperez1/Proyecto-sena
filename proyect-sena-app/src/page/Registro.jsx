import React, { useState } from 'react'
import { Input, Option, Select } from '@mui/joy'
import { Link } from 'react-router-dom'

import { datosRegistro } from '../consultas/Datos'

export default function Registro() {
	let [nombre, setNombre] = useState(datosRegistro.nombres)
	let [apellido, setApellido] = useState(datosRegistro.apellidos)
	let [tDocumento, setTDocumento] = useState(datosRegistro.tipo_doc)
	let [documento, setDocumento] = useState(datosRegistro.n_doc)
	let [correoSena, setCorreoSena] = useState(datosRegistro.correo_inst)
	let [correo, setCorreo] = useState(datosRegistro.correo_pers)
	let [fechaNacimiento, setFechaNacimiento] = useState(datosRegistro.nacimiento)

	function handleChangeNombre(e) {
		setNombre(e.target.value)
	}

	function handleChangeApellido(e) {
		setApellido(e.target.value)
	}

	function handleChangeTDocumento(e, newValue) {
		setTDocumento(newValue)
	}

	function handleChangeNumeroDoc(e) {
		setDocumento(e.target.value)
	}

	function handleChangeCorreoSena(e) {
		setCorreoSena(e.target.value)
	}

	function handleChangeCorreo(e) {
		setCorreo(e.target.value)
	}

	function handlechangeFechaNacimiento(e) {
		setFechaNacimiento(e.target.value)
	}

	function mantenerDatos() {
		datosRegistro.nombres = nombre
		datosRegistro.apellidos = apellido
		datosRegistro.tipo_doc = tDocumento
		datosRegistro.n_doc = documento
		datosRegistro.correo_inst = correoSena
		datosRegistro.correo_pers = correo
		datosRegistro.nacimiento = fechaNacimiento
	}

	return (
		// formulario
		<>
			<Input
				value={nombre}
				onChange={handleChangeNombre}
				placeholder="Nombre*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Input
				value={apellido}
				onChange={handleChangeApellido}
				placeholder="Apellido*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%', color: 'gray' }}
				variant="soft"
				required
				defaultValue=""
				value={tDocumento}
				onChange={handleChangeTDocumento}
			>
				<Option value="">Tipo de documento*</Option>
				<Option value="T.I">T.I</Option>
				<Option value="C.C">C.C</Option>
				<Option value="C.e">C.E</Option>
				<Option value="P.a">P.A</Option>
			</Select>
			<Input
				value={documento}
				onChange={handleChangeNumeroDoc}
				placeholder="Número de documento*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Input
				value={correoSena}
				onChange={handleChangeCorreoSena}
				placeholder="Correo institucional*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<Input
				value={correo}
				onChange={handleChangeCorreo}
				placeholder="Correo Personal*"
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
			/>
			<div style={{ display: 'block' }}>
				<div style={{ textAlign: 'left', margin: '0 31%', color: 'gray' }}>
					Fecha de nacimiento*
				</div>
				<Input
					onChange={handlechangeFechaNacimiento}
					value={fechaNacimiento}
					type="date"
					sx={{ borderRadius: '15px', margin: '0 30%', color: 'gray' }}
					variant="soft"
					required
				/>
			</div>
			<div className="navegacion">
				<Link to="/" className="button-navegacion">
					<div onClick={mantenerDatos}>{'Atrás'}</div>
				</Link>

				{nombre == '' ||
				apellido == '' ||
				tDocumento == '' ||
				documento == '' ||
				correoSena == '' ||
				fechaNacimiento == '' ? (
					<button onClick={mantenerDatos} className="button-navegacion">
						{'Siguiente'}
					</button>
				) : (
					<Link to="/registro/2">
						<div onClick={mantenerDatos} className="button-navegacion">
							{'Siguiente>>'}
						</div>
					</Link>
				)}
			</div>
		</>
	)
}
