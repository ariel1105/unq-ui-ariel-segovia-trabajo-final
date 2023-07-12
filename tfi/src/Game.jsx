import React, { useEffect, useState } from 'react'
import './Game.css'
import { Score } from './score/Score'
import { Choices } from './picks/Choices'
import { Boton } from './score/Boton'
import { Result } from './result/Result'

export const Game = () => {

  const [myScore, setMyScore] = useState(0)
  const [comScore, setComScore] = useState(0)
  const [myChoice, setMyChoice] = useState(null)
  const [comChoice, setComChoice] = useState(null)
  const [result, setResult] = useState("")

  useEffect(() => {
    setMyChoice(myChoice)
    setComChoice(comChoice)
    if(myChoice && comChoice){
      resolveMatch()
    }
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
    setResult("")
  }

  const handlePlay = (myPick, comPick) => {
    setMyChoice(myPick)
    setComChoice(comPick)
  }
  
  return (
    <div className='main-container'>
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <Score myScore={myScore} comScore={comScore} reset={reset}/>
      <Choices handlePlay={handlePlay}/>
      <Result result={result} myChoice={myChoice} comChoice={comChoice}/>
    </div>
  )
}
