import { useState } from "react"
import "./Mega.css"
import Botoes from "../contador/Botoes"

export default (props) => {
    const [qtdNumeros, setQtdNumeros] = useState(6)
    const min = 6
    const max = 15

    function renderizaNumeros() {
        const numeros = gerarNumeros(qtdNumeros)
        return (
            <div>
                { numeros.map((n, i) => <span key={i} className="Numero">{n}</span>)}
            </div>
        )
    }

    function inc() {
        if(qtdNumeros < max) {
            setQtdNumeros(qtdNumeros + 1)
        }
    }
    
    function dec() {
        if(qtdNumeros > min) {
            setQtdNumeros(qtdNumeros - 1)
        }
    }    

    function renderizaMarcador() {
        return <h1>{qtdNumeros}</h1>
    }

    function getRandomArbitrary() {
        const min = 1
        const max = 60
        return parseInt(Math.random() * (max - min) + min)
    }
    
    function gerarNumeros(qtdNumeros) {
        const numeros = []
        while (numeros.length < qtdNumeros){
            let numero = getRandomArbitrary()
            if(!numeros.includes(numero)){
                numeros.push(numero)
            }
        }
        return numeros.sort((a, b) => { return a - b})
    }
      
    return (
        <div className="Mega">
            {renderizaMarcador()}
            <Botoes setInc={inc} setDec={dec}/>
            {renderizaNumeros()}
            <p>Limites min: {min} max: {max} números</p>
        </div>
    )
}