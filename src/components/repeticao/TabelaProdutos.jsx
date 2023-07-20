import "./TabelaProdutos.css"
import produtos from "../../data/produtos"

export default function TabelaProdutos(props) {
    function renderizaCabecalho() {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
        )
    }

    function renderizaCorpo() {
        return (
            <tbody>
                {
                    produtos.map((produto, i) => {
                        return (
                            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                                <td>{ produto.id }</td>
                                <td>{ produto.nome }</td>
                                <td>R$ { produto.preco.toFixed(2).replace('.', ',') }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
    return (
        <div className="TabelaProdutos">
            <table>
                { renderizaCabecalho() }
                { renderizaCorpo() }
            </table>
        </div>
    )
}