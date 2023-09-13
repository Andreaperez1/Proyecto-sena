// React
import React, { useState } from 'react'

// Componentes
import Desplegable from '../componentes/desplegable'
import PasswordInput from '../componentes/contraseña'
import Autocompletar from '../componentes/autocompletar'
import Input from '../componentes/Input'
// CSS
import '../page/styles/registro.css'
import '../componentes/styles/input-registro.css'

const Registro2 = () => {
	const FichaInfo = {
		2712267: 'programacion de software',
		2712345: 'Información sobre el Programa 2',
		2787654: 'Información sobre el Programa 3',
	}

	// Función para manejar la selección de programa
	// Corrige el nombre del objeto
	const handleSeleccionFicha = (Ficha) => {
		// Accede a la información del programa seleccionado desde el objeto
		const informacion = FichaInfo[Ficha]

		setProgramaSeleccionado(Ficha)
		setInfoFicha(informacion)
	}
	const [programaSeleccionado, setProgramaSeleccionado] = useState('')
	const [infoFicha, setInfoFicha] = useState('')

	return (
		<div className="caja-azul">
			<div className="caja-blanca">
				<div className="formulario">
					<h2>REGISTRATE</h2>
					<Desplegable
						options={[
							{ value: '', label: 'Rol *' },
							{ value: 'Aprendiz', label: 'Aprendiz' },
							{ value: 'Profesor', label: 'Profesor' },
							{ value: 'Admin', label: 'Admin' },
						]}
					/>
					{/* <label htmlFor="Contraseña"></label> */}
					<PasswordInput />
					{/* <label htmlFor="Confirmacion de contraseña"></label> */}
					<PasswordInput placeholder="Confirmar contraseña *" />
					{/* <label htmlFor="N°">Número de ficha</label> */}

					<Autocompletar
						opciones={Object.keys(FichaInfo)} // Utiliza las claves del objeto como opciones
						onSeleccion={handleSeleccionFicha}
					/>
					{/* <label htmlFor="programa"></label> */}
					<input
						type="text"
						id="infoFicha"
						value={infoFicha}
						readOnly
						className="input-registro"
						placeholder="Programa"
					/>

					<Input label="Ciudad (Corregimiento, Municipio)" />
					<Input label="Barrio" />
					<Input label="Dirrección" />

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
				</div>
			</div>
			<img
				className="img-registro"
				src="../src/assets/img/Bienvenida-web.webp"
				alt="Aprendices Sena"
			/>
		</div>
	)
}

export default Registro2
