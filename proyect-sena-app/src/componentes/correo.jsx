import React from 'react'
import './styles/input-registro.css'

function Correo(props,required) {
	return (
		<>
			{/* lable vacío !!!!!*/}

			{/* <label
				className={`correo ${props.correo}`}
				htmlFor={`correo ${props.correo}`}
				>
				{' '}
			</label> */}
			<input
				className="input-registro"
				type="email"
				name={`correo ${props.correo}`}
				label={`correo ${props.correo}`}
				placeholder={`${props.correo}`}
				required = {required}
			></input>
		</>
	)
}

export default Correo;
