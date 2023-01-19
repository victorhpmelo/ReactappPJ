import React from "react"
// import { Home,handleValores } from "../../Home"
import './styles.css'

export function Table(){
  return(
    <table>
    <thead>
      <tr>
        <th className="ColunaValor">Valor</th>
        <th className='ColunaDesc'>Descrição</th>
        <th className="ColunaTipo">Tipo</th>
        <th className="ColunaHora">Horário</th>
        <th className="ColunaApagar">Editar</th>
        <th className="ColunaAcao"></th>          
      </tr>
    </thead>
  </table>
  )

}