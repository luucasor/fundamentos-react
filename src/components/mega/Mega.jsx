import { useState } from "react"
import "./Mega.css"
import Botoes from "../contador/Botoes"

export default function Mega() {
    const [qtdNumeros, setQtdNumeros] = useState(6)
    const min = 6
    const max = 15

    function styled(value) {
        return qtdNumeros === value ? <span style={{color: 'red'}}>{value}</span> : value
    }

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
        const numeros = Array(qtdNumeros)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = getRandomArbitrary()
            return [ ...nums, novoNumero ]
        }, [])
        return numeros.sort((a, b) => { return a - b})
    }
      
    return (
        <div className="Mega">
            {renderizaMarcador()}
            <Botoes setInc={inc} setDec={dec}/>
            {renderizaNumeros()}
            <p>Limites min: {styled(min)} max: {styled(max)}  números</p>
        </div>
    )
}