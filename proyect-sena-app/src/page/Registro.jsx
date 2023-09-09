import React from "react";
import Input from "../componentes/Input";
import Desplegable from "../componentes/desplegable";

const Registro = () => {
  return (
    <div>
      <h1>REGISTRATE</h1>

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



    </div>
  )
}

export default Registro;
