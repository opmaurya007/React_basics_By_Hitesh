
import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter]=useState(15)

  const addValue=()=>{
    setCounter(counter+1)

    console.log(counter)
  }
  const removeValue=()=>{
      setCounter(counter-1)
      console.log(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter values: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
