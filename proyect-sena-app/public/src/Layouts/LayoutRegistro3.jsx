import React from 'react'
import { Outlet } from 'react-router-dom'

export default function () {
	return (

		<>
		<form className="principal">
			<div className="caja1">
				<div className="formulario">
				<Outlet></Outlet>
				</div>
				<div className="caja-azul2">
					<img
						className="img-bienestar"
						src="/img/logoblancosena.png"
						alt="Logo-bienestar"
						/>
					<img
						className="img-bienestar"
						src="/img/logo.png"
						alt="Logo-bienestar"
						/>
				</div>
			</div>
			<img
				className="img-registro"
				src="/img/Bienvenida.jpg"
				alt="aprendiz sena"
				/>
				
		</form>
	</>
				)
}
