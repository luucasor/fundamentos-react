import styles from "./TabelaProdutos.css"
import produtos from "../../data/produtos"

export default function TabelaProdutos(props) {
    function renderizaCabecalho() {
        return (
            <thead style={styles.thead}>
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
                    produtos.map((produto) => {
                        return (
                            <tr key={produto.id}>
                                <td>{ produto.id }</td>
                                <td>{ produto.nome }</td>
                                <td>{ produto.preco }</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
    return (
        <div>
            <table style={styles.table}>
                { renderizaCabecalho() }
                { renderizaCorpo() }
            </table>
        </div>
    )
}