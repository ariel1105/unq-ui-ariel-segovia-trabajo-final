import React, { useEffect, useState } from 'react'
import './Game.css'
import { Score } from './Score'
import { Choices } from './Choices'
import { Boton } from './Boton'

export const Game = () => {

  const [myScore, setMyScore] = useState(0)
  const [comScore, setComScore] = useState(0)
  const [myChoice, setMyChoice] = useState(null)
  const [comChoice, setComChoice] = useState(null)
  const [result, setResult] = useState("")

  useEffect(() => {
    setMyChoice(myChoice)
    setComChoice(comChoice)
    resolveMatch()
  }, [myChoice, comChoice])

  const resolveMatch = () => {
    if(isWon()) {win()}
    else if (isLost()) {lose()}
    else {setResult("Empate")}
  }

  const isWon = () => {
    return myChoice && myChoice.beats.includes(comChoice.id)
  }

  const isLost = () => {
    return comChoice && comChoice.beats.includes(myChoice.id)
  }

  const win = () => {
    setResult("Ganaste")
    setMyScore(myScore + 1) 
  }

  const lose = () => {
    setResult("Perdiste")
    setComScore(comScore + 1)
  }

  const reset = () => {
    setMyScore(0)
    setComScore(0)
    setMyChoice(null)
    setComChoice(null)
  }

  const handlePlay = (myPick, comPick) => {
    setMyChoice(myPick)
    setComChoice(comPick)
  }
  
  return (
    <div className='main-container'>
      <Score myScore={myScore} comScore={comScore}/>
      <Choices handlePlay={handlePlay}/>
      <Boton/>
      {result && <h3>{result}</h3>}
    </div>
  )
}
