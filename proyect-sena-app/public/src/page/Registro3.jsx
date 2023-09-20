import React, { useState } from 'react'

// componentes
import Desplegable from '../componentes/Desplegable'
import PoliticasPrivacidad from '../componentes/PoliticasPrivacidad'

// consultas
// import buscarUsuarios from '../consultas/usuarios.js'

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
		<>
		
					<Desplegable
						options={[
							{ value: ' ', label: 'Tipo de sangre *' },
							{ value: 'A+', label: 'A+' },
							{ value: 'A-', label: 'A-' },
							{ value: 'B+', label: 'B+' },
							{ value: 'B-', label: 'B-' },
							{ value: 'O+', label: 'O+' },
							{ value: 'O-', label: 'O-' },
							{ value: 'AB+', label: 'AB+' },
							{ value: 'AB-', label: 'AB-' },
						]}
					/>
					<Desplegable
						options={[
							{ value: ' ', label: 'Género * ' },
							{ value: 'Femenino', label: 'Femenino' },
							{ value: 'Masculino', label: 'Masculino' },
							{ value: 'Otro', label: 'Otro' },
						]}
					/>

					<Desplegable
						options={[
							{ value: ' ', label: 'EPS * ' },
							{ value: 'EPS 1', label: 'EPS 1' },
							{ value: 'EPS 2', label: 'EPS 2' },
							{ value: 'EPS 3', label: 'EPS 3' },
							{ value: 'EPS 4', label: 'EPS 4' },
							{ value: 'PS 5', label: 'EPS 5' },
						]}
					/>
			
						<input
							type="checkbox"
							id="politicas"
							checked={politicasAceptadas}
							onChange={() => setPoliticasAceptadas(!politicasAceptadas)}
						/>
						<a href="#" onClick={() => setMostrarPoliticas(true)}>
							Acepto las politicas de privacidad y seguridad
						</a>
					
					<button
					
						type="submit"
						disabled={!politicasAceptadas}
						onClick={() => buscarUsuarios()}
					>
						Registrar
					</button>
					{mostrarPoliticas && (
						<div>
							<div>
								<PoliticasPrivacidad />
								<button
									
									onClick={() => setMostrarPoliticas(false)}
								>
									Cerrar
								</button>
							</div>
						</div>
					)}
				
				
		</>
	)
}

export default Registro3
