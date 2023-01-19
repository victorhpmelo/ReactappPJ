import React from 'react'
import './styles.css'
import 'boxicons'

export function Card(props){
  return(
    <div className="card">
      <h1>R$: 500.00</h1>
      <h2>Máquinas</h2>
      <div className="icons">
      <box-icon type='solid' name='chevron-up-square' color='rgb(240, 0, 0)' size = 'lg'></box-icon>
      <box-icon type='solid' name='chevron-down-square' color='rgb(0, 0 , 206)'size = 'lg'></box-icon>
      </div>
      <h3>14:35:23</h3>
   <h4>
   <button><i class='bx bxs-eraser' ></i></button>
    <label htmlFor="button">Apagar</label>
   </h4>
    
      
   

      </div>

  )


}