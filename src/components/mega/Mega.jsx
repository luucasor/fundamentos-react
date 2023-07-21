import { useEffect, useState } from "react"
import "./Mega.css"
import Botoes from "../contador/Botoes"

export default () => {
    const [qtdNumeros, setQtdNumeros] = useState(6)
    const min = 6
    const max = 15

    const styledMax = qtdNumeros == max ? <span style={{color: 'red'}}>{max}</span> : max
    const styledMin = qtdNumeros == min ? <span style={{color: 'red'}}>{min}</span> : min

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
        return (
            <div style={{display: "block"}}>
                <h2>Quantidade de números</h2>
                <h2>{qtdNumeros}</h2>
            </div>
        )
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
            <p>Limites min: {styledMin} max: {styledMax}  números</p>
        </div>
    )
}