import React from "react";
import '../componentes/styles/fecha.css'
const Fecha = ({ label}) => {
    return (
        <div>
            <label>{label}</label>
            <input
            type="date"
            required
            />
        </div>
    )
};

export default Fecha;