import React, {useState} from 'react'
import './Formulario.css'


const Formulario = ({pacientes,setPacientes}) => {
    
    const[mascota,setMascota]=useState("")
    const[duenno,setDuenno]=useState("")
    const[date,setDate]=useState("")
    const[hour,setHour]=useState("")
    const[description,setDescription]=useState("")

    function agregarPacientes(){
        const informacion={
            mascota,
            duenno,
            date,
            hour,
            description
        }
        setPacientes([...pacientes,informacion])
        setMascota("")
        setDuenno("")
        setDate("")
        setHour("")
        setDescription("")
    }


  return (
    <div>
        
        <form className='inputForm' action="">
            <label className='inputText' htmlFor="">Nombre Mascota </label>
            <input className='inputTextinside' onChange={(e)=>{setMascota(e.target.value)}} value={mascota} type="text" />
            <label className='inputText' htmlFor="">Nombre Dueño </label>
            <input className='inputTextinside' onChange={(e)=>{setDuenno(e.target.value)}} value={duenno} type="text" />
            <label className='inputText' htmlFor="">Fecha </label>
            <input className='inputTextinside' onChange={(e)=>{setDate(e.target.value)}} value={date} type="date" />
            <label className='inputText' htmlFor="">Hora </label>
            <input className='inputTextinside' onChange={(e)=>{setHour(e.target.value)}} value={hour} type="time" />
            <label className='inputText' htmlFor="">Sintomas</label>
            <textarea className='inputTextinside' onChange={(e)=>{setDescription(e.target.value)}} value={description} type="text" />
            <br />
            <button className='btn btn-primary' onClick={agregarPacientes} type='button'>Agregar Cita</button>

        </form>
    </div>
  )
}

export default Formulario