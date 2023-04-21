import React, {useState} from 'react'
import './Formulario.css'
const Formulario = () => {
    const[pacientes,setPacientes]=useState([])
    const[mascota,setMascota]=useState("")
    const[duenno,setDuenno]=useState("")

    function agregarPacientes(){
        const informacion={
            mascota,
            duenno
        }
        setPacientes([...pacientes,mascota])
        setMascota("")
        setDuenno("")
    }


  return (
    <div>
        <form className='inputForm' action="">
            <label htmlFor="">Nombre Mascota </label>
            <input onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type="text" />
            <label htmlFor="">Nombre Dueño </label>
            <input onChange={(e)=>{setDuenno(e.target.value)}} value={duenno} type="text" />
            <label htmlFor="">Fecha </label>
            <input type="date" />
            <label htmlFor="">Hora </label>
            <input type="hour" />
            <label htmlFor="">Sintomas</label>
            <textarea type="text" />
            <button onClick={agregarPacientes} type='button'>Agregar</button>

        </form>
    </div>
  )
}

export default Formulario