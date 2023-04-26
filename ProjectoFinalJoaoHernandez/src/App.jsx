import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div className='row'>
      <div className='col-sm-6'>
      <Formulario/>
      </div>
      <div className='col-sm-6'>
      <Formulario/>
      </div>
      </div>
    </div>
  )
}

export default App
