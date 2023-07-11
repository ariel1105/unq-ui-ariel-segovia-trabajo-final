import React from 'react'
import './Choices.css'
import lagartoImage from './assets/lagarto.png';
import papelImage from './assets/papel.png';
import piedraImage from './assets/piedra.png';
import spockImage from './assets/spock.png';
import tijeraImage from './assets/tijera.png';


export const Choices = () => {

  const choices = [
    {id: 'lagarto',image: lagartoImage},
    {id: 'papel',image: papelImage},
    {id: 'piedra',image: piedraImage},
    {id: 'spock',image: spockImage},
    {id: 'tijera',image: tijeraImage},
  ]
  return (
    <>
      {choices.map(i => (
        <div className="element-container" key = {i.id}>
          <img src={i.image} alt="Piedra" className="element-image"/>
        </div>
      ))}
    </>
  )
}
