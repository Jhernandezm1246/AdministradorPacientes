import React from 'react'
import './Paciente.css'

function Paciente({nombre,duenno,date,hour,sintomas}) {
  return (
    <div className='card text-bg-secondary mb-3'>
        <div className='inputTextapp'>
        <h3>Nombre:</h3>
        <h5 className='inputTextinside'>{nombre}</h5>
        <h3>Dueño:</h3>
        <h5 className='inputTextinside'>{duenno}</h5>
        <h3>Fecha:</h3>
        <h5 className='inputTextinside'>{date} </h5>
        <h3>Hora:</h3>
        <h5 className='inputTextinside'>{hour}</h5>
        <h3>Sintomas:</h3>
        <h5 className='inputTextinside'>{sintomas}</h5>
        </div>
    </div>




  )
}

export default Paciente