import React from 'react'
import './Game.css'
import { Score } from './Score'
import { Choices } from './Choices'

export const Game = () => {
  return (
    <div className='main-container'>
      <Score/>
      <Choices/>
    </div>
  )
}
