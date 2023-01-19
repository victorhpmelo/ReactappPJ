import React, {useState,} from 'react'
import { Card } from '../components/Card'
import { Inputs } from '../components/Inputs'
import { Flow } from '../components/Flow'
import { ButtonAdd } from '../components/Buttons'
import { Table } from '../components/Table'


export function Home() {


  const [valName,setValName] = useState()
  const [valNames,setValNames] = useState([])

  function handleValores(){
    const newVal ={
    time: new Date().toLocaleDateString("pt-br",{
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    })
    }
    setValNames(pState =>[...pState,newVal])
    }
    return (
      
      <div className="container">
      
      <Flow/>
      <Inputs/>
      <ButtonAdd/>
      <Table/>
      <Card/>

    </div>
  )
  
  

}

