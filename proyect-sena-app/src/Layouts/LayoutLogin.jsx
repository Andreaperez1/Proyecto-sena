import React from 'react'
import { Outlet } from 'react-router-dom'
import '../page/styles/Login.css'

export default function () {
	return (
		<>
			<div className="caja-azul">
				<img
					className="imagenlogin"
					src="/img/imagenlogin.png"
					alt="imagen login"
				/>

				<div className="caja-contenedor">
					<div className="caja-transparente1">
						<div className="caja-formulario">
							<Outlet></Outlet>
						</div>
						<div className="caja-transparente2">LOGIN</div>
					</div>
				</div>
			</div>
		</>
	)
}
