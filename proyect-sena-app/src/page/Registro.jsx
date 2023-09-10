
import Input from "../componentes/Input";
import Desplegable from "../componentes/desplegable";
import Correo from "../componentes/correo"

const Registro = () => {
  return (
    <div>
      <h1>REGISTRATE</h1>
      <form action="">

      <Input label ="nombres"></Input>

      <Input label ="apellidos"></Input>

      <Desplegable
      options={[
        {value:" ", label: " "},
        {value:"T.I", label: "T.I"},
        {value:"C.C", label: "C.C"},
        {value:"C.E", label: "C.E"},
        {value:"P.A", label: "P.A"},
      ]}
      />

<Input label ="tarjeta de identidad"></Input>

<Input label ="telefono"></Input>

<Correo 
correo = "Sena"/>

<Correo 
correo = "personal"/>

<label htmlFor="contaseña"></label>
<input type="password" placeholder="contraseña" />

<label htmlFor="Rol">Rol</label>
<Desplegable 
options={[
  {value:" ", label: " "},
        {value:"Aprendiz", label: "Aprendiz"},
        {value:"Profesor", label: "Profesor"},
        {value:"Admin", label: "Admin"},
        
]}/>

<label htmlFor="fechaNacimiento"></label>
<input type="date" />

</form>

    </div>
  )
}

export default Registro;
