// react
import React from 'react'

// componentes
import Input from '../componentes/Input'
import Desplegable from '../componentes/desplegable'
import Correo from '../componentes/correo'
import Fecha from '../componentes/Fecha'

// css
import '../page/styles/registro.css'

const Registro = () => {
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

	return (
		<>
			<form className="caja-azul">
				<div className="caja-blanca">
					<div className="formulario">
						<h2>REGISTRATE</h2>
						<Input label="Nombres *" />

						<Input label="Apellidos *" />

						{/* <label htmlFor="Tipo de Documento">Tipo de Documento</label> */}
						<Desplegable
							options={[
								{ value: ' ', label: 'Tipo de documento *' },
								{ value: 'T.I', label: 'T.I' },
								{ value: 'C.C', label: 'C.C' },
								{ value: 'C.E', label: 'C.E' },
								{ value: 'P.A', label: 'P.A' },
							]}
						/>

						<Input label="N° de documento * " />

						<Input label="Teléfono *" />

						<Correo correo="Correo Institucional *" />

						<Correo correo="Correo Personal" />

						{/* <label htmlFor="fechaNacimiento">Fecha de nacimiento</label> */}

						<Fecha />
					</div>
					{/* <div className="navegacion">
						<button className="boton-navegacion">Atras</button>
						<button className="boton-navegacion">Siguiente</button>
					</div> */}
				</div>
				<img
					className="img-registro"
					src="../src/assets/img/mujer-gorra.webp"
					alt="aprendiz sena"
				/>
			</form>
			{/* elementos de otras paginas */}
			{/*  
			// <button>Atras</button>
			// <button>Siguiente</button> */}
		</>
	)
}

export default Registro
