import React, { useState } from 'react'

// componentes
import Desplegable from '../componentes/desplegable'
import PoliticasPrivacidad from '../componentes/PoliticasPrivacidad'

// css
import '../page/styles/registro3.css'

const Registro3 = () => {
	const handleAceptarPoliticas = () => {
		setPoliticasAceptadas(true)
	}

	const [politicasAceptadas, setPoliticasAceptadas] = useState(false)
	const [mostrarPoliticas, setMostrarPoliticas] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		// 		// Verifica si las políticas han sido aceptadas antes de continuar
		if (politicasAceptadas) {
			// Aquí puedes realizar la lógica de registro del usuario
			console.log('Usuario registrado correctamente')
		} else {
			alert('Debes aceptar las políticas de privacidad y seguridad.')
		}
	}

	return (
		<form onSubmit={handleSubmit} className="principal">
			<div className="caja1">
				<div className="formulario">
					<Desplegable
						options={[
							{ value: ' ', label: ' ' },
							{ value: 'Femenino', label: 'Femenino' },
							{ value: 'Masculino', label: 'Masculino' },
							{ value: 'Otro', label: 'Otro' },
						]}
					/>

					<Desplegable
						options={[
							{ value: ' ', label: ' ' },
							{ value: 'EPS 1', label: 'EPS 1' },
							{ value: 'EPS 2', label: 'EPS 2' },
							{ value: 'EPS 3', label: 'EPS 3' },
							{ value: 'EPS 4', label: 'EPS 4' },
							{ value: 'PS 5', label: 'EPS 5' },
						]}
					/>
					<div>
						<input
							type="checkbox"
							id="politicas"
							checked={politicasAceptadas}
							onChange={() => setPoliticasAceptadas(!politicasAceptadas)}
						/>
						<a href="#" onClick={() => setMostrarPoliticas(true)}>
							Acepto las politicas de privacidad y seguridad
						</a>
					</div>
					<button type="submit" disabled={!politicasAceptadas}>
						Registrar
					</button>
					{mostrarPoliticas && (
						<div className="ventana-emergente">
							<div className="contenido-emergente">
								<PoliticasPrivacidad />
								<button onClick={() => setMostrarPoliticas(false)}>
									Cerrar
								</button>
							</div>
						</div>
					)}
				</div>
				<div className="caja-azul2">
					<img
						className="img-bienestar"
						src="../src/assets/img/logoblancosena.png"
						alt="Logo-bienestar"
					/>
					<img
						className="img-bienestar"
						src="../src/assets/img/logo.png"
						alt="Logo-bienestar"
					/>
				</div>
			</div>
			<img
				className="img-registro"
				src="../src/assets/img/Bienvenida-web.webp"
				alt="aprendiz sena"
			/>
		</form>
	)
}

export default Registro3
