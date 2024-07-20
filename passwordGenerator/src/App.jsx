import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumalowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#%^&*()_+{}[]."

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)   // This method returns index value of array

      pass += str.charAt(char)  //".charAt()" returns the character of the index 
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect( () => {
    passwordGenerator()
  }, [length, charAllowed, numAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 '>Password Genertor</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readonly
          />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  hover:bg-blue-500'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 py-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              className='cursor-pointer accent-blue-500'
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type ="checkbox"
              className='accent-blue-500'
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => setNumalowed((prev) => !prev)} //!prev => reverse the previous value
            />
          </div>
          <label htmlFor="numberInput">Numbers</label>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className='accent-blue-500'
              id='charInput'
              onChange={() => setCharAllowed((prev) => !prev)} //!prev => reverse the previous value //Tooggles
            />
          </div>
          <label htmlFor="charInput">Characters</label>

        </div>

      </div>

    </>
  )
}

export default App
