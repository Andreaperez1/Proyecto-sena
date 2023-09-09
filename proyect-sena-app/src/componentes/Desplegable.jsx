import React from "react";

const Desplegable = ({ options }) => {
    return (
        <select>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Desplegable;