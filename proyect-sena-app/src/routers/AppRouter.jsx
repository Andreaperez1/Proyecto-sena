// modulos react, reactrouterdom
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// layouts
import LayoutRegistro from '../Layouts/LayoutRegistro'
import LayoutRegistro3 from '../Layouts/LayoutRegistro3'
import LayoutLogin from '../Layouts/LayoutLogin'

// paginas
import Registro from '../page/Registro'
import Registro2 from '../page/Registro2'
import Registro3 from '../page/Registro3'

import Home from '../page/home'
import Login from '../page/Login'

import Recuperar from '../page/Recuperar'
import VerificarContraseña from '../page/VerificarContraseña'

function AppRouter() {
	return (
		<Routes>
			{/* ruta home */}
			<Route path="/" element={<Home />}></Route>
			{/* ruta paginas registro */}
			<Route path="/registro" element={<LayoutRegistro />}>
				<Route path="/registro" element={<Registro />}></Route>
				<Route path="2" element={<Registro2 />}></Route>
			</Route>
			<Route path="/registro" element={<LayoutRegistro3 />}>
				<Route path="3" element={<Registro3 />}></Route>
			</Route>

			{/* ruta pagian login */}
			<Route path="/" element={<LayoutLogin />}>
				<Route path="/login" element={<Login />}></Route>
			</Route>

			{/* Nueva ruta para la página de recuperación de contraseña */}
			<Route path="/recuperar-contrasena" element={<Recuperar />} />
			<Route path="/nueva-contraseña" element={<VerificarContraseña />} />

		</Routes>
	)
}

export default AppRouter;
