// react
import React, { useState } from 'react'

// componentes
import Input from '../componentes/Input'
import Desplegable from '../componentes/desplegable'
import Correo from '../componentes/correo'
import PasswordInput from '../componentes/Contraseña'
import PoliticasPrivacidad from '../componentes/PoliticasPrivacidad'

// css
import '../styles/registro.css'

const Registro = () => {
	const [politicasAceptadas, setPoliticasAceptadas] = useState(false)
	const [mostrarPoliticas, setMostrarPoliticas] = useState(false)

	const handleAceptarPoliticas = () => {
		setPoliticasAceptadas(true)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// Verifica si las políticas han sido aceptadas antes de continuar
		if (politicasAceptadas) {
			// Aquí puedes realizar la lógica de registro del usuario
			console.log('Usuario registrado correctamente')
		} else {
			alert('Debes aceptar las políticas de privacidad y seguridad.')
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="caja-azul">
				<div className="caja-blanca">
					<div className="formulario1">
						<h2>REGISTRATE</h2>
						<Input label="nombres" />
						<Input label="apellidos" />

						<Desplegable
							options={[
								{ value: ' ', label: 'Tipo de documento *' },
								{ value: 'T.I', label: 'T.I' },
								{ value: 'C.C', label: 'C.C' },
								{ value: 'C.E', label: 'C.E' },
								{ value: 'P.A', label: 'P.A' },
							]}
						/>

						<Input label="numero de documento" />
						<Input label="telefono" />
						<Correo correo="Sena" />
						<Correo correo="personal" />

						{/* <label htmlFor="fechaNacimiento"></label> */}
						<input className="campo-fecha" type="date" />
					</div>
				</div>
				<img
					className="img-registro"
					src="../src/assets/img/mujer-gorra.webp"
					alt="aprendiz sena"
				/>

				{/* elementos de la segunda pagina */}
				{/* <label htmlFor="Rol">Rol</label> */}
				{/* <Desplegable
							options={[
                { value: ' ', label: 'Rol *' },
								{ value: 'Aprendiz', label: 'Aprendiz' },
								{ value: 'Profesor', label: 'Profesor' },
								{ value: 'Admin', label: 'Admin' },
							]}
						/> */}
				{/* <PasswordInput /> */}

				{/* elemmentos de la ultima pagina de registro */}

				{/* <label htmlFor="politicas">
					<input
						type="checkbox"
						id="politicas"
						checked={politicasAceptadas}
						onChange={() => setPoliticasAceptadas(!politicasAceptadas)}
					/>
					<a href="#" onClick={() => setMostrarPoliticas(true)}>
						Acepto las politicas de privacidad y seguridad
					</a>
				</label>

				<button type="submit" disabled={!politicasAceptadas}>
					Registrar
				</button> */}
			</form>

			{/* Ventana emergente para las políticas */}
			{/* {mostrarPoliticas && (
				<div className="ventana-emergente">
					<div className="contenido-emergente">
						<PoliticasPrivacidad />
						<button onClick={() => setMostrarPoliticas(false)}>Cerrar</button>
					</div>
				</div>
			)} */}
		</div>
	)
}

export default Registro
