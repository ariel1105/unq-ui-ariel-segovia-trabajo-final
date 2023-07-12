import React from 'react'
import './Score.css'
import { Boton } from './Boton'

export const Score = ({myScore, comScore, reset}) => {
  return (
    <>
      <ul className="score-container"> 
        <li>
          <span className="player">Jugador</span>
          <span className="score">{myScore}</span>
        </li>
        <li>
          <span className="player">COM</span>
          <span className="score">{comScore}</span>
        </li>
      </ul>
      <Boton action = {reset}/>
    </>
  )
}
