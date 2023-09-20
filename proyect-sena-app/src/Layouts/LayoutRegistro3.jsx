import React from 'react'
import { Outlet } from 'react-router-dom'

// css
import '../page/styles/registro.css'

export default function () {
	return (
		<>
			<div className="principal">
				<div className="caja-blanca2">
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
			</div>
		</>
	)
}
