import React from 'react'
import { Outlet } from 'react-router-dom'

import '../page/styles/registro.css'

export default function () {
	return (
		<>
			<form className="caja-azul">
				<img
					className="img-registro"
					src="/img/mujerGorra.jpg"
					alt="aprendiz sena"
				/>
				<div className="caja-blanca">
					<h2>REGISTRATE</h2>
					<div className="formulario">
						<Outlet></Outlet>
					</div>
				</div>
			</form>
		</>
	)
}
