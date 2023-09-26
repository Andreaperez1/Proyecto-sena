import React from 'react'
import { Outlet } from 'react-router-dom'

import '../page/styles/registro.css'

export default function () {
	return (
		<form className="principal">
			<img
				className="img-registro"
				src="/img/Bienvenida.jpg"
				alt="aprendiz sena"
			/>
			<div className="caja-blanca2">
				<div className="formulario">
					<Outlet></Outlet>
				</div>
			</div>
			<div className="caja-azul2">
				<img
					className="img-bienestar"
					src="/img/logo-bienestar.png"
					alt="Logo-bienestar"
				/>
			</div>
		</form>
	)
}
