import React from 'react'
import '../picks/Choices.css'
export const Boton = ({action}) => {
  return (
    <button className="action-box" onClick={action}>Reiniciar</button>
  )
}
