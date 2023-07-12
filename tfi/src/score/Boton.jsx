import React from 'react'
import '../picks/Choices.css'
export const Boton = ({action, description}) => {
  return (
    <button className="action-box" onClick={action}>{description}</button>
  )
}
