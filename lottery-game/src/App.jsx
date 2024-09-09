import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lotteryi from './Lottery'
import { sum } from './helper'


function App() {
  let winCondition=(ticket)=>{
    return ticket[0]===0;
    
  }

  return (
    <>
     <Lotteryi n={3} winCondition={winCondition}/>
     
    </>
  )
}

export default App
