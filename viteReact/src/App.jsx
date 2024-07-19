import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15


  const addValue = () => {
    if (counter == 20) {
      setCounter(counter = 20)
    } else {
      setCounter(counter++)
    }
  }


  const deleteValue = () => {
    if (counter <= 0) {
      setCounter(counter = 0)
    } else {
      setCounter(counter--)
    }
  }

  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}>
        Add Value
      </button>
      <br />
      <button
        onClick={deleteValue}>
        remove Value

      </button>

    </>
  )
}

export default App
