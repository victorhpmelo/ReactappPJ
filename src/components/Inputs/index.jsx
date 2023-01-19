import React from "react"
// import { Home,handleValores } from "../../Home"
import './styles.css'

export function Inputs(){
  return(
    <div className="flexInp">
    <form>
    <input 
      type="number"
      id="Valor"
      placeholder="Digite o Valor..." 
      // onChange={e => handleValores(e.target.value)}
      />

     <input
     type="text"
     id="Descricao"
     placeholder="Digite a Descrição..." 
    //  onChange={e => handleValores(e.target.value)}
     />
   
      <select >
        <option value='' selected disabled  hidden>Escolha o tipo:</option>
        <option>Entrada</option>
        <option>Saída</option>
      </select>
     </form>
     </div>

  )

}