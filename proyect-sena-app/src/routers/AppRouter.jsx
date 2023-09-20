// modulos react, reactrouterdom
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// layouts
import LayoutRegistro from '../Layouts/LayoutRegistro'
import LayoutRegistro3 from '../Layouts/LayoutRegistro3'

// paginas
import Registro from '../page/Registro'
import Registro2 from '../page/Registro2'
import Registro3 from '../page/Registro3'

import Home from '../page/home'

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="registro" element={<LayoutRegistro />}>
				<Route path="1" element={<Registro />}></Route>
				<Route path="2" element={<Registro2 />}></Route>
			</Route>

			<Route path="/registro" element={<LayoutRegistro3 />}>
				<Route path="3" element={<Registro3 />}></Route>
			</Route>
		</Routes>
	)
}

export default AppRouter
