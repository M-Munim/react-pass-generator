import { useState, useCallback } from 'react'
import './App.css'

function App() {
  // setting length of bar
  const [length, setLength] = useState(8);

  // setting numbers are allowed or not
  const [numberAllowed, setNumberAllowed] = useState(false);

  // setting chars are allowed or not
  const [charAllowed, setCharAllowed] = useState(false);

  // setting main password field
  const [password, setPassword] = useState("");

  // passgenerator method will callback itself on every change
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+[]{}~`"
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char);
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">

        <h1 className='text-white text-2xl font-bold p-3 text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 px-3 py-1 shrink-0 font-bold'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">

            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              // onchange length will be set according to the value
              onChange={(e) => { setLength(e.target.value) }} />

            <label htmlFor=""> length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              // will toggle between check and uncheck
              onChange={() => { setNumberAllowed((prev) => !prev) }} />

            <label htmlFor=""> Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              // will toggle between check and uncheck
              onChange={() => { setCharAllowed((prev) => !prev) }} />

            <label htmlFor=""> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
