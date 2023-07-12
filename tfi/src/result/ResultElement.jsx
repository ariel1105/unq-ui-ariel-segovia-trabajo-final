import React from 'react'
import '../picks/Choices.css'

export const ResultElement = ({title, pick}) => {
  return (
    <div className="simple-box">
        {title}
        <img src={pick.image} alt="Piedra" className="element-image"/>
        {pick.id}
    </div>
  )
}
