import React from 'react'
import './Choices.css'

export const Element = ({element, onClick}) => {

  const handleClick= () => {
    onClick()
  }

  return (
    <div className="element-container" onClick={handleClick}>
        <img src={element.image} alt="Piedra" className="element-image"/>
        {element.id}
    </div>
  )
}
