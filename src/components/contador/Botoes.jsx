import "./Botoes.css"

export default function Botoes(props) {
    return (
        <div>
            <button className="Botoes" onClick={props.setDec}>-</button>
            <button className="Botoes" onClick={props.setInc}>+</button>
        </div>
    )
}