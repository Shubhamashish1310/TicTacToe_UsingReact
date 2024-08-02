import React from 'react'
import { useState } from 'react'
import Board from './Board'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  

  return (
    <>
     <h1 className='text-center text-7xl text-zinc-400 font-bold font-serif bg-black'>Tic Tac Toe</h1>
     <Board/>
    </>
  )
}

export default App
