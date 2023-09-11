import { useState } from "react";

function PasswordInput() {
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

return (
    <div>
    <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
    </button>
    </div>
);
}

export default PasswordInput;