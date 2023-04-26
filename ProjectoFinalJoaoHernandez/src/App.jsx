import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario'
import Header from './Header'
import Paciente from './Paciente'

function App() {
  
  const[pacientes,setPacientes]=useState([])

  return (
    <div className="App">
      <Header titulo={"Administrador de Pacientes"}/>
      <div className='row'>
      <div className='col-sm-6'>
      <Header titulo={"Crear Cita"}/>
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}/>
      </div>
      <div className='col-sm-6'>
      <Header titulo={"Lista de Citas"}/>

      {pacientes.map((paciente)=>{
        return <Paciente  nombre={paciente.mascota} 
                          duenno={paciente.duenno} 
                          fecha={paciente.date} 
                          hora={paciente.hour} 
                          sintomas={paciente.description} />
      }
      
      )}
      </div>
      </div>
    </div>
  )
}

export default App
