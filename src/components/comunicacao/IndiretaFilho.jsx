export default function IndiretaFilho(props) {
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => { props.quandoClicar('João', gerarIdade(), gerarNerd())}
            }>Fornecer Informações</button>
            <div>{Math.random()}</div>
        </div>
    )
}