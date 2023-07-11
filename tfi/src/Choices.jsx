import React,{ useState } from 'react'
import './Choices.css'
import lagartoImage from './assets/lagarto.png';
import papelImage from './assets/papel.png';
import piedraImage from './assets/piedra.png';
import spockImage from './assets/spock.png';
import tijeraImage from './assets/tijera.png';
import { Element } from './Element';

export const Choices = ({handlePlay}) => {

  const [myPick, setMyPick] = useState(null)
  const [comPick, setComPick] = useState(null)

  const lizard = {id: 'lagarto', image: lagartoImage, beats: ['spock', 'papel']}
  const paper = {id: 'papel',    image: papelImage,   beats: ['spock', 'piedra']}
  const rock = {id: 'piedra',    image: piedraImage,  beats: ['tijera', 'lagarto']}
  const spock = {id: 'spock',    image: spockImage,   beats: ['tijera', 'piedra']}
  const scissor = {id: 'tijera', image: tijeraImage,  beats: ['papel', 'lagarto']}

  const choices = [
    lizard,
    paper,
    rock,
    spock,
    scissor
  ]

  const getComPick = () => {
    let pick = choices[Math.floor(Math.random() * choices.length)]; 
    setComPick(pick)
  }

  const getMyPick = (id) => {
    let pick = choices.find(i => i.id === id)
    setMyPick(pick)
  }

  const play = (id) => {
    getMyPick(id)
    getComPick()
    handlePlay(myPick, comPick)
    console.log(myPick.id + comPick.id)
  }

  return (
    <div className="elements-container">
      {choices.map(i => (
       <Element key = {i.id} element={i} onClick={()=>play(i.id)}/>
      ))}
    </div>
  )
}
