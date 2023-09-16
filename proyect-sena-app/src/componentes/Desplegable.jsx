import React from 'react'
import '../componentes/styles/desplegable.css'

const Desplegable = ({ options }) => {
	return (
		<select className="desplegable" required>
			{options.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}

export default Desplegable;
