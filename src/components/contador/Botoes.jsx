import "./Botoes.css"

export default (props) => {
    return (
        <div>
            <button className="Botoes" onClick={props.setInc}>+</button>
            <button className="Botoes" onClick={props.setDec}>-</button>
        </div>
    )
}