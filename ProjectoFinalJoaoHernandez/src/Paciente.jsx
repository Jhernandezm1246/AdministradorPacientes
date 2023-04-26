import React from 'react'
import './Paciente.css'

function Paciente({nombre,duenno,date,hour,sintomas}) {
  return (
    <div className='card border-primary mb-3'>
        
        <label className='inputTextinside' htmlFor="">Nombre Mascota </label>
        
        <input className='inputTextinside' value={nombre} type="text" />
        
        <label className='inputTextinside' htmlFor="">Nombre Dueño </label>
        
        <input className='inputTextinside' value={duenno} type="text" />
        
        <label className='inputTextinside' htmlFor="">Fecha </label>
        
        <input className='inputTextinside' value={date} type="date" />
        
        <label className='inputTextinside' htmlFor="">Hora: </label>
        
        <input className='inputTextinside' value={hour} type="time" />
        
        <label className='inputTextinside' htmlFor="">Sintomas </label>
        
        <input className='inputTextinside' value={sintomas} type="text" />
        

        
    </div>




  )
}

export default Paciente