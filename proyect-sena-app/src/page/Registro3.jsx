import { Select, Option, Checkbox, Button } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { datosRegistro } from '../consultas/Datos'
import { registrarUsuario } from '../consultas/Peticiones'

export default function Registro3() {
	let datosEPS = JSON.parse(localStorage.getItem('eps'))

	const [rh, setRh] = useState(datosRegistro.rh)
	const [genero, setGenero] = useState(datosRegistro.genero)
	const [eps, setEps] = useState(datosRegistro.eps)
	const [politicas, setPoliticas] = useState(datosRegistro.pps)
	function handelChangeCheck(e) {
		setPoliticas(e.target.checked)
		alert('Politicas de Pivacidad')
		console.log(datosRegistro)
	}

	function guardarDatos() {
		datosRegistro.rh = rh
		datosRegistro.genero = genero
		datosRegistro.eps = eps
		datosRegistro.pps = politicas
	}

	let listaEps = datosEPS.map((eps) => (
		<Option key={eps._id} value={eps._id}>
			{' '}
			{eps.nombre}{' '}
		</Option>
	))

	useEffect(() => {
		guardarDatos()
		// console.log(rh, genero, eps, politicas)
	}, [rh, genero, eps, politicas])

	return (
		<>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
				defaultValue=""
				onChange={(e, nE) => setRh(nE)}
				value={rh}
			>
				<Option value="">Tipo de sangre*</Option>
				<Option value="A+">A+</Option>
				<Option value="A-">A-</Option>
				<Option value="O+">O+</Option>
				<Option value="O-">O-</Option>
				<Option value="AB+">AB+</Option>
				<Option value="AB-">AB-</Option>
			</Select>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
				defaultValue=""
				onChange={(e, nE) => setGenero(nE)}
				value={genero}
			>
				<Option value="">Genero*</Option>
				<Option value="M">Masculino</Option>
				<Option value="F">Femenino</Option>
				<Option value="O">Otros</Option>
			</Select>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
				defaultValue=""
				onChange={(e, nE) => setEps(nE)}
				value={eps}
			>
				<Option key=" " value="">
					Eps
				</Option>
				{listaEps}
			</Select>
			<div className="caja-politicas">
				<Checkbox
					checked={politicas}
					variant="soft"
					label="Acepto las politicas de privacidad y seguridad"
					onChange={handelChangeCheck}
				/>
			</div>
			{!politicas ? (
				<Button disabled sx={{ borderRadius: '15px', margin: '0 30%' }}>
					Registrar
				</Button>
			) : (
				<Button
					onClick={() => registrarUsuario(datosRegistro)}
					sx={{ borderRadius: '15px', margin: '0 30%' }}
				>
					Registrar
				</Button>
			)}

			<div className="boton-atras-registro3">
				<Link to="/registro/2">Atrás</Link>
			</div>
		</>
	)
}
