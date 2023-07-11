import React, { useState } from 'react'
import './Game.css'
import { Score } from './Score'
import { Choices } from './Choices'
import { Boton } from './Boton'

export const Game = () => {

  const [myScore, setMyScore] = useState(0)
  const [comScore, setComScore] = useState(0)
  const [myChoice, setMyChoice] = useState(null)
  const [comChoice, setComChoice] = useState(null)

  const reset = () => {
    setMyScore(0)
    setComScore(0)
    setMyChoice(null)
    setComChoice(null)
  }

  const handlePlay = (myPick, comPick) => {
    setMyChoice(myPick)
    setComChoice(comPick)
    console.log(myPick + comPick)
  }
  
  return (
    <div className='main-container'>
      <Score/>
      <Choices handlePlay = {()=>handlePlay}/>
      <Boton/>
    </div>
  )
}
