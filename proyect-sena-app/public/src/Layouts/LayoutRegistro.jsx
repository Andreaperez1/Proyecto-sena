import React from 'react'
import { Outlet } from 'react-router-dom'
import '../page/styles/registro.css'

export default function () {
	return (
		<form>
			<div className="caja-azul">
				<div className="caja-blanca">
					<div className="formulario">
						<h2>REGISTRATE</h2>
						<Outlet></Outlet>
					</div>
				</div>
				<img
					className="img-registro"
					src="/img/mujerGorra.jpg"
					alt="aprendiz sena"
				/>
			</div>
		</form>
	)
}
