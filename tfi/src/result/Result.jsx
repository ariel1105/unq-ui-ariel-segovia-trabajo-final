import React from 'react'
import './Result.css'
import { ResultElement } from './ResultElement'


export const Result = ({result, myChoice, comChoice}) => {
  if (result){
    return (
        <div className="result-container">
            <ResultElement title={"Jugador"} pick={myChoice}/> 
            <h3>{result}</h3>
            <ResultElement title={"COM"} pick={comChoice}/> 
        </div>
    )
  }
}
