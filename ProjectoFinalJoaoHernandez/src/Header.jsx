import React from 'react'
import './Header.css'

const Header = ({titulo}) => {
  return (
    <div className='inputTextapp'>
      <h2 >{titulo}</h2>
    </div>
  )
}

export default Header