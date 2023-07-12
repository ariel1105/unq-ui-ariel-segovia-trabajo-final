import React from 'react'
import './Choices.css'

export const Element = ({element, pick}) => {

  const handleClick= () => {
    pick()
  }

  return (
    <div className="action-box" onClick={handleClick}>
        <img src={element.image} alt="Piedra" className="element-image"/>
        {element.id}
    </div>
  )
}
