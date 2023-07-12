import React from 'react'
import './Result.css'

export const ResultElement = ({title, pick}) => {
  return (
    <div className="simple-box">
        {title}
        <img src={pick.image} alt="Piedra" className="element-image"/>
        {pick.id}
    </div>
  )
}
