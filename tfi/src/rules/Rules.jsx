import React from 'react'
import rulesImage from '../assets/rules.png'
import './Rules.css'
import { Boton } from '../score/Boton'

export const Rules = ({close}) => {

    const rules = [
        "Tijera corta a Papel",
        "Papel tapa a Piedra",
        "Piedra aplasta a Lagarto",
        "Lagarto envenena a Spock",
        "Spock rompe a Tijera",
        "Tijera decapita a Lagarto",
        "Lagarto devora a Papel",
        "Papel desautoriza a Spock",
        "Spock vaporiza a Piedra",
        "y como siempre, Piedra aplasta a Tijera"
    ]
  return (
    <div className="modal">
        <div className="modal-content">
            <Boton action={close} description={"Cerrar"}/>
            <div className="rules-container">
                <img src={rulesImage} alt="Rules"/>
                <div>{rules.map(i => (<div key={i} >- {i}</div>))}</div>
            </div>
        </div>
    </div>
  )
}
