import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
    let nome = ''
    let idade = 0
    let nerd = false

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span><strong>{idade}</strong></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <div>
                <div>PAI</div>
                <IndiretaFilho quandoClicar={fornecerInformacoes}/>
            </div>
        </div>
    )
}