import React from 'react'
import { Link } from 'react-router-dom' // Importa Link desde react-router-dom

// consultas
import { buscarPorRuta } from '../consultas/Peticiones'
function pedirDatosBackend() {
	buscarPorRuta('/dominio-sena', 'dominiosSena')
	buscarPorRuta('/rol', 'roles')
	buscarPorRuta('/ficha', 'fichas')
	buscarPorRuta('/eps', 'eps')
	buscarPorRuta('/programa/programa', 'programas')
}

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/registro/1">
				<button onClick={pedirDatosBackend}>Regístrate</button>
			</Link>
			<Link to="/login">
				<button>Inicia Sesión</button>
			</Link>
		</div>
	)
}

export default Home
