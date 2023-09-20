import React from 'react'
import { Link } from 'react-router-dom' // Importa Link desde react-router-dom

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/registro/1">
				<button>Regístrate</button>
			</Link>
			<button>Inicia Sesión</button>
		</div>
	)
}

export default Home
