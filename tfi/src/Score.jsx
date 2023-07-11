import React from 'react'
import './Score.css'

export const Score = () => {
  return (
    <ul className="score-container">
    
      <li>
        <span className="player">Jugador 1</span>
        <span className="score">0</span>
      </li>
      <li>
        <span className="player">Jugador 2</span>
        <span className="score">0</span>
      </li>
    </ul>
  )
}
