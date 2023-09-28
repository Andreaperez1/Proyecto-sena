import React from 'react'
import { Outlet } from 'react-router-dom'
import '../page/styles/Login.css'

export default function () {
	return (
		<>
			<div className="caja-azul">
				<img
					className="imagen-deportes"
					src="/img/imagenlogin.png"
					alt="imagenes login"
				/>

				<div className="caja-formulario">
					<div className="caja-transparente1">
						<Outlet></Outlet>
					</div>
					<div className="caja-transparente2"></div>
				</div>
			</div>
		</>
	)
}
