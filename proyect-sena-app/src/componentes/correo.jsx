

function Correo (props) {
    return (
        <div>
            <label className = {`correo ${props.correo}`} htmlFor={`correo ${props.correo}`} > </label>
            <input type="email" name={`correo ${props.correo}`} label={`correo ${props.correo}`} placeholder={`correo ${props.correo}`} required>
            </input>
        </div>
    )
}

export default Correo