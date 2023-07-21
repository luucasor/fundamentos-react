import "./App.css"
import React from 'react'

import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"

// eslint-disable-next-line
export default () => (
    <div className="App">
        <h1>Fundamento React (Arrow)</h1>
        
        <div className="Cards">
            <Card titulo="#12 - Contador" color="#E45F12">
                <Contador numeroInicial={10}/>
            </Card>

            <Card titulo="#11 - Componente Controlado (input)" color="#E45F56">
                <Input/>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#10323C">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={3}/>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
            </Card>

            <Card titulo="#07 - Repetição (desafio)" color="#FF4C10">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com filho" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            
            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>
)