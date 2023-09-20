import axios from 'axios'

function buscarUsuarios() {
	let data
	axios
		.get(`https://proyecto-backend-sgbienestar.onrender.com/registro/usuario`)
		.then(function (response) {
			// handle success
			data = response.data // Actualiza el estado con los datos recibidos
			console.log(response.data) // Imprime los datos directamente aquí
		})
		.catch(function (error) {
			// handle error
			console.log(error)
		})
		.finally(() => {
			// console.log(data)
		})
}

export default buscarUsuarios
